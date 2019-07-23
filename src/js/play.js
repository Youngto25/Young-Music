module.exports = class Play{
  constructor(el,currentSong){
    this.$el = el
    this.$currentSong = currentSong
    this.$iconPlay = this.$el.querySelector('.icon-play')
    console.log(this.$currentSong)
    this.setImage()
    this.setHeader()
    this.playSong()
    this.pauseSong()
  }

  setImage(){
    let src = `http://y.gtimg.cn/music/photo_new/T002R300x300M000${this.$currentSong.albummid}.jpg?max_age=2592000`
    this.$el.querySelector('.pic-wrapper .pic img').src = src
  }

  setHeader(){
    this.$el.querySelector('.song-detail .title h2').innerText = this.$currentSong.songname
    this.$el.querySelector('.song-detail .title p span').innerText = this.$currentSong.singer.map((singName)=>{
      return `${singName.name}`
    }).join(' ')
  }
  
  playSong(){
    this.$iconPlay.querySelector('.play-icon').addEventListener('click',()=>{
      this.addHide('.play-icon')
      this.remove('.pause-icon')
    })
  }

  pauseSong(){
    this.$iconPlay.querySelector('.pause-icon').addEventListener('click',()=>{
      this.addHide('.pause-icon')
      this.remove('.play-icon')
    })
  }

  addHide(element){
    return this.$iconPlay.querySelector(element).classList.add('hide')
  }

  remove(element){
    return this.$iconPlay.querySelector(element).classList.remove('hide')
  }
}