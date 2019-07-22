module.exports = class Search{
  constructor(el){
    this.$el = el
    this.$input = this.$el.querySelector('.input')
    this.$search = this.$el.querySelector('.icon-search')
    this.$songs = []
    this.$keyword = ''
    this.$page = 1
    this.$curpage = 1
    this.$fetching = false
    this.onscroll = this.onScroll.bind(this)
    this.getValue()
    window.addEventListener('scroll',this.onscroll)
  }

  onScroll(){
    if(document.body.scrollHeight < document.documentElement.clientHeight + pageYOffset + 50){
      this.search(this.$curpage + 1)
    }
  }

  getValue(){
    this.$search.addEventListener('click',this.search.bind(this))
    this.$input.addEventListener('input',(event)=>{
      let keyword = event.target.value.trim()
      if(!keyword) return this.reset()
      this.$keyword = keyword
    })
  }

  reset(){
    this.$page = 1
    this.$keyword = ''
    this.$el.querySelector('.search-list').innerHTML = ''
    this.$el.querySelector('.singer-list').innerHTML = ''
  }

  search(page){
    if(this.$fetching)return
    if(!this.$keyword)return
    this.$fetching = true
    fetch(`http://localhost:4000/search?keyword=${this.$keyword}&page=${page || this.$page}`)
      .then(res=>res.json())
      .then(json=> {
        if(this.$curpage === 1){
          this.createSinger(json.data.zhida)
        }
        this.createList(json.data.song.list)
        this.$songs.push(...json.data.song.list)
        this.$curpage = json.data.song.curpage
        console.log('songs')
        console.log(this.$songs)
      })
      .then(()=>this.$fetching = false)
      .catch(()=>this.$fetching = false)
  }

  createSinger(zhida){
    if(!zhida.singername) return
    this.$el.querySelector('.singer-list').innerHTML = `
    <div class="list">
      <div class="img">
        <img src="https://y.gtimg.cn/music/photo_new/T001R68x68M000${zhida.singermid}.jpg?max_age=2592000" alt="">
      </div>
      <div class="detail">
        <h2>${zhida.singername}</h2>
        <p><span>单曲：${zhida.songnum}</span><span>专辑：${zhida.albumnum}</span></p>
      </div>
    </div>
    `
  }

  createList(lists){
    let html = lists.map(list=>
      `
      <div class="list">
        <div class="img">
          <img src="./imgs/music.png" alt="">
        </div>
        <div class="detail">
          <h2>${list.songname}</h2>
          <p>${this.getSinger(list.singer)}</p>
        </div>
      </div>
      `
    ).join('')
    this.$el.querySelector('.search-list').insertAdjacentHTML('beforeend',html)
  }

  getSinger(singers){
    return singers.map(singer=>
      `
        ${singer.name}
      `).join('/')
  }
}