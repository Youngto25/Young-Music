import './main.css'
import Slider from './js/slider'
import lazyload from './js/lazyload'
import './js/tabs'
import recommend from './json/recommend.json'

if (module.hot) {
  module.hot.accept();
}

render()

function render(){
  let slides = recommend.data.slider.map(slide=>{
    return {link: slide.linkUrl, image: slide.picUrl }
  })
  new Slider({
    el: document.querySelector('.item-wrapper'),
    slides
  })
}

let radioList = recommend.data.radioList
let songList = recommend.data.songList

document.querySelector('.radio-item').innerHTML = radioList.map((item)=>{
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

document.querySelector('.songList-item').innerHTML = songList.map((item)=>{
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

lazyload(document.querySelectorAll('.lazyload'))
