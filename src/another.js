import './rec.css'
import './js/svg.js'
import Slider from './js/slider'
import lazyload from './js/lazyload'
import Recommend from './json/recommend.json'

const $ = s=>document.querySelector(s)
const $$ = s=>document.querySelectorAll(s)

if (module.hot) {
  module.hot.accept();
}

render(Recommend.data.slider)
radio(Recommend.data.radioList)
song(Recommend.data.songList)
lazyload($$('.lazyload'))

// fetch('http://localhost:4000/')
//   .then(res=>res.json())
//   .then(json=> {
//     render(json.data.slider)
//     radio(json.data.radioList)
//     song(json.data.songList)
//     lazyload($$('.lazyload'))
//   })

function radio(radioList){
  $('.radio-item').innerHTML = radioList.map((item)=>{
    return `
    <div class="item">
      <a href="#">
        <img class="pic lazyload" data-src="${item.picUrl}" alt="">
      </a>
      <div class="play"><img src="./imgs/list_sprite.png"></div>
      <div class="title">${item.Ftitle}</div>
    </div>
    `
  }).join('')
}

function song(songList){
  $('.songList-item').innerHTML = songList.map((item)=>{
    return `
    <div class="item">
      <a href="#">
        <img class="pic lazyload" data-src="${item.picUrl}" alt="">
      </a>
      <div class="play"><img src="./imgs/list_sprite.png"></div>
      <div class="title">${item.songListDesc}</div>
    </div>
    `
  }).join('')
}

function render(slider){
  let slides = slider.map(slide=>{
    return {link: slide.linkUrl, image: slide.picUrl }
  })
  new Slider({
    el: $('.item-wrapper'),
    slides
  })
}