import './main.css'
import Slider from './js/slider'
import lazyload from './js/lazyload'
import './js/tabs'
import recommend from './json/recommend.json'
import rank from './json/rank.json'

let radioList = recommend.data.radioList
let songList = recommend.data.songList
let topList = rank.data.topList

if (module.hot) {
  module.hot.accept();
}

render()

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

document.querySelector('.rank-item').innerHTML = topList.map((item)=>{
  return `
  <div class="item">
    <div class="pic">
      <img class="lazyload" data-src="${item.picUrl}" alt="">
    </div>
    <div class="content clearfix">
      <div class="content-wrapper">
        <h2>${item.topTitle}</h2>
        ${songHandle(item)}
      </div>
    </div>
  </div>
  `
}).join('')

function songHandle(item){
  return item.songList.map((song,index)=>
    `
    <p>${index+1}<span>${song.songname}</span>- ${song.singername}</p>
    `
  ).join('')
}

function render(){
  let slides = recommend.data.slider.map(slide=>{
    return {link: slide.linkUrl, image: slide.picUrl }
  })
  new Slider({
    el: document.querySelector('.item-wrapper'),
    slides
  })
}

lazyload(document.querySelectorAll('.lazyload'))
