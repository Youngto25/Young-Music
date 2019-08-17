import Lyrics from './lyrics'

export default  class Play{
  constructor(el,currentSong,songs){
    this.$el = el
    this.$currentSong = currentSong
    this.$songs = songs
    this.$iconPlay = this.$('.icon-play')
    this.$audio = this.$('#audio')
    this.$src = ''
    this.$Lyrics = {}
    this.render()
    this.playSong()
    this.pauseSong()
    this.$audio.addEventListener('timeupdate',()=>{
      this.setProgerssBar()
      this.$('.wrapper .lyric span').innerText = this.$Lyrics.$node.innerText || '......'
    })
  }

  render(){
    this.getSongSrc()
    this.setData()
    this.setHeader()
    this.setIconProgressBar()
  }

  getSongSrc(){
    this.$src = this.$currentSong.url
    this.$audio.src = this.$src
  }

  setData(){
    let src = this.$currentSong.pic
    this.$('.pic-wrapper .pic img').src = src
    this.$('.player-background').style = `background-image: url(${src})`
    
    this.$Lyrics = new Lyrics(this.$currentSong.songid,this.$('.lyrics-wrapper'),this.$audio)
    this.$audio.onloadedmetadata = () => this.$('.total-time').innerText = this.formateTime(this.$audio.duration)
  }

  setHeader(){
    this.$('.song-detail .title h2').innerText = this.$currentSong.title
    this.$('.song-detail .title p span').innerText = this.$currentSong.author
  }

  setProgerssBar() {
    if(this.$audio.currentTime === 0) this.$('.progress-after').style.transform = `translateX(100%)`
    let percent = this.$audio.currentTime * 100 /this.$audio.duration
    this.$('.progress-after').style.transform = `translateX(${percent-100}%)`
    this.$('.current-time').innerText = this.formateTime(this.$audio.currentTime)
  }

  setIconProgressBar(){
    this.$('.play-icon').classList.remove('hide')
    this.$('.pause-icon').classList.add('hide')
    this.$('.progress-after').style= `transform: translateX(-100%)`
  }
 
  playSong(){
    this.$('.play-icon').addEventListener('click',()=>{
      this.addHide('.play-icon')
      this.removeHide('.pause-icon')
      setTimeout(()=>{
        this.$audio.play()
      },0)
    })
  }

  pauseSong(){
    this.$('.pause-icon').addEventListener('click',()=>{
      this.addHide('.pause-icon')
      this.removeHide('.play-icon')
      this.$audio.pause()
    })
  }

  formateTime(secondsTotal) {
    let minutes = parseInt(secondsTotal/60)
    minutes = minutes >= 10 ? '' + minutes : '0' + minutes
    let seconds = parseInt(secondsTotal%60)
    seconds = seconds >= 10 ? '' + seconds : '0' + seconds
    return minutes + ':' + seconds
  }

  addHide(element){
    return this.$(element).classList.add('hide')
  }

  removeHide(element){
    return this.$(element).classList.remove('hide')
  }

  $(s){
    return this.$el.querySelector(s)
  }

  $$(s){
    return this.$iconPlay.querySelectorAll(s)
  }
}

