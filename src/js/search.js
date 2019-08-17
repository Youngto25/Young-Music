module.exports = class Search{
  constructor(el){
    this.$el = el
    this.$input = this.$el.querySelector('.input')
    this.$search = this.$el.querySelector('.icon-search')
    this.$songs = []
    this.$currentSong = {}
    this.$keyword = ''
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
    this.$input.addEventListener('keypress',(e)=>{
      if(e.code === 'Enter'){
        this.$search.dispatchEvent(new Event('click'))
      }
    })
    let fn = (event)=>{
      let keyword = event.target.value.trim()
      if(!keyword) return this.reset()
      this.$keyword = keyword
    }
    fn = this.debounce(fn,400)
    this.$input.addEventListener('input',fn)
  }

  reset(){
    this.$page = 1
    this.$keyword = ''
    this.$el.querySelector('.search-list').innerHTML = ''
    this.$el.querySelector('.singer-list').innerHTML = ''
  }

  search(){
    if(this.$fetching)return
    if(!this.$keyword)return
    this.$fetching = true
    fetch(`https://api.apiopen.top/searchMusic?name=${this.$keyword}`)
      .then(res=>res.json())
      .then(json=>{
        this.$songs.push(...json.result)
        this.createList(json.result)
      })
  }

  createList(lists){
    let html = lists.map(list=>
      `
      <div class="list">
        <div class="img">
          <img src="./imgs/music.png" alt="">
        </div>
        <div class="detail">
          <h2>${list.title}</h2>
          <p>${this.getSinger(list.author)}</p>
        </div>
      </div>
      `
    ).join('')
    this.$el.querySelector('.search-list').insertAdjacentHTML('beforeend',html)
    this.listenerPlay()
  }

  listenerPlay(){
    let lists = this.$el.querySelectorAll('.search-list .list')
    for(let i=0; i<lists.length; i++){
      lists[i].addEventListener('click',()=>{
        this.$currentSong = this.$songs[i]
      })
    }
  }

  getSinger(singers){
    return singers.split(',').map(singer=>
      `
        ${singer}
      `).join('/')
  }

  debounce(func,wait){
    let timer = null
    return function(){
      if(timer) clearTimeout(timer)
      timer = setTimeout(()=>func.apply(this,arguments),wait)
    }
  }
}