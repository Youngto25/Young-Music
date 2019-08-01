module.exports = class Lyrics{
  constructor(musicid,el,audio){
    this.$musicid = musicid || 231442948
    this.$el = el
    this.$audio = audio
    this.$lines = this.$('.player-lyrics-lines')

    this.$node = ''
    this.lyricIndex = -1
    this.lyricsArr = []

    this.getLyrics()
    this.listenAudio()
  }

  listenAudio(){
    this.$audio.addEventListener('timeupdate',()=>{
      this.locateLyric()
    })
  }

  getLyrics(){
    fetch(`http://localhost:4000/lyrics?musicid=${this.$musicid}`)
    .then(res => res.json())
    .then(json => json.replace(/jsonp1\((.*)\)/, '$1'))
    .then(data => JSON.parse(data))
    .then(lyrics => lyrics.lyric)
    .then(lyric => this.reset(lyric))
  }

  locateLyric() {
    if(this.$audio.currentTime === 0) {
      this.lyricIndex = -1
      this.$lines.style.transform = `translateY(0px)`
    }
    let currentTime = this.$audio.currentTime*1000
    let nextLineTime
    if(this.lyricsArr.length && this.lyricsArr.length > this.lyricIndex+1){
      nextLineTime = this.lyricsArr[this.lyricIndex+1][0]
    }
    if(currentTime > nextLineTime && this.lyricIndex < this.lyricsArr.length - 1) {
      this.lyricIndex++
      let node = this.$(`[data-time="${this.lyricsArr[this.lyricIndex][0]}"]`)
      if(node) this.setLyricToCenter(node)
      this.$$('p')[0].innerText = this.lyricsArr[this.lyricIndex][1]
      this.$$('p')[1].innerText = this.lyricsArr[this.lyricIndex+1] ? this.lyricsArr[this.lyricIndex+1][1] : ''
    }
  }

  setLyrics(lyrics) {
    console.log('setLyrics')
    this.lyricIndex = 0
    let fragment = document.createDocumentFragment()
    let lyricsArr  = []
    this.lyricsArr = lyricsArr
    lyrics.split(/\n/)
      .filter(str => str.match(/\[.+?\]/))
      .forEach(line => {
        let str = line.replace(/\[.+?\]/g, '')
        if(str){
          line.match(/\[.+?\]/g).forEach(t=>{
            t = t.replace(/[\[\]]/g,'')
            let milliseconds = parseInt(t.slice(0,2))*60*1000 + parseInt(t.slice(3,5))*1000 + parseInt(t.slice(6))
            lyricsArr.push([milliseconds, str])
          })
        }
      })

    lyricsArr.filter(line => line[1].trim() !== '').sort((v1, v2) => {
      if(v1[0] > v2[0]) {
        return 1
      } else {
        return -1
      }
    }).forEach(line => {
        let node = document.createElement('p')
        node.setAttribute('data-time', line[0])
        node.innerText = line[1]
        fragment.appendChild(node)
      })
    this.$lines.innerHTML = ''
    this.$lines.appendChild(fragment)
  }

  setLyricToCenter(node) {
    console.log(node)
    this.$node = node
    let translateY = node.offsetTop - this.$el.offsetHeight / 2
    translateY = translateY > 0 ? translateY : 0
    this.$lines.style.transform = `translateY(-${translateY}px)`
    this.$$('p').forEach(node => node.classList.remove('current'))
    node.classList.add('current')
  }

  reset(text) {
    if (text) {
      let lyrics = this.text = this.formatText(text) || ''
      this.setLyrics(lyrics)
    }
  }


  getSeconds(line) {
    return +line.replace(/^\[(\d{2}):(\d{2}).*/, (match, p1, p2) => 60 * (+p1) + (+p2))
  }

  formatText(text) {
    let div = document.createElement('div')
    div.innerHTML = text
    return div.innerText
  }

  $(s){
    return this.$el.querySelector(s)
  }

  $$(s){
    return this.$el.querySelectorAll(s)
  }

}