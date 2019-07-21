module.exports = class Search{
  constructor(el){
    this.$el = el
    this.$input = this.$el.querySelector('.input')
    this.$search = this.$el.querySelector('.icon-search')
    this.$keyword = ''
    this.$page = 1
    this.getValue()
    this.search()
  }

  getValue(){
    this.$search.addEventListener('click',this.search.bind(this))
    this.$input.addEventListener('input',(event)=>{
      this.$keyword = event.target.value
    })
  }

  search(){
    if(!this.$keyword)return
    fetch(`http://localhost:4000/search?keyword=${this.$keyword}&page=${this.$page}`)
      .then(res=>res.json())
      .then(json=> {
        console.log(json.data.song.list)
        this.createList(json.data.song.list)
    })
  }

  createList(lists){
    this.$el.querySelector('.search-list').innerHTML = lists.map(list=>{
      return `
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
    }).join('')
  }

  getSinger(singers){
    return singers.map(singer=>
      `
        ${singer.name}
      `).join('/')
  }
}