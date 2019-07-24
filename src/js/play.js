import Lyrics from './lyrics'

export default  class Play{
  constructor(el,currentSong){
    this.$el = el
    this.$currentSong = currentSong
    this.$iconPlay = this.$('.icon-play')
    this.$audio = this.$('#audio')
    this.$src = 'http://aqqmusic.tc.qq.com/amobile.music.tc.qq.com/C400001luHbo2nQT1Y.m4a?guid=9082630980&vkey=A3698750923D94E4468877E51A2B50B808166FB74221B6C90F304993FB655068B034B7686C28504F0685E66E525D13E46B1B2E8BE1F6C514&uin=0&fromtag=38'
    this.$Lyrics = {}
    console.log(this.$currentSong)
    console.log(this.$audio)
    this.setData()
    this.setHeader()
    this.playSong()
    this.pauseSong()
  }

  

  setData(){
    let src = `http://y.gtimg.cn/music/photo_new/T002R300x300M000${this.$currentSong.albummid}.jpg?max_age=2592000`
    this.$('.pic-wrapper .pic img').src = src
    this.$('.player-background').style = `background-image: url(${src})`
    this.$audio.src = this.$src
    this.$Lyrics = new Lyrics('',this.$('.lyrics-wrapper'),this.$audio)
  }

  setHeader(){
    this.$('.song-detail .title h2').innerText = this.$currentSong.songname
    this.$('.song-detail .title p span').innerText = this.$currentSong.singer.map((singName)=>{
      return `${singName.name}`
    }).join(' ')
  }

  
  
  playSong(){
    this.$('.play-icon').addEventListener('click',()=>{
      this.addHide('.play-icon')
      this.remove('.pause-icon')
      setTimeout(()=>{
        this.$audio.play()
      },0)
    })
  }

  pauseSong(){
    this.$('.pause-icon').addEventListener('click',()=>{
      this.addHide('.pause-icon')
      this.remove('.play-icon')
      this.$audio.pause()
    })
  }

  createAudio(){
    var audio = document.createElement('audio')
    
  }

  addHide(element){
    return this.$(element).classList.add('hide')
  }

  remove(element){
    return this.$(element).classList.remove('hide')
  }

  $(s){
    return this.$el.querySelector(s)
  }

  $$(s){
    return this.$iconPlay.querySelectorAll(s)
  }
}

//http://aqqmusic.tc.qq.com/amobile.music.tc.qq.com/C400001luHbo2nQT1Y.m4a?guid=9082630980&vkey=A3698750923D94E4468877E51A2B50B808166FB74221B6C90F304993FB655068B034B7686C28504F0685E66E525D13E46B1B2E8BE1F6C514&uin=0&fromtag=38
      //http://124.14.20.14/amobile.music.tc.qq.com/C400000QuRpw4KQoLI.m4a?guid=9082630980&vkey=BF15BA48808985F74F9770206AB8539A4FEA45E416061FF71BA3BC313A4DA6B53C43A3ACB5B9323569DAC99DCA87999BA8B6F3A994B3A556&uin=0&fromtag=38

//http://ws.stream.qqmusic.qq.com/C100000aWkAw2Vg2vQ.m4a?fromtag=38

