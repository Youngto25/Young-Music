import './main.css'
import Slider from './js/slider'
import Search from './js/search'
import lazyload from './js/lazyload'
import './js/tabs'
import rank from './json/rank.json'

let topList = rank.data.topList

rankList(topList)

fetch('http://localhost:4000/')
  .then(res=>res.json())
  .then(json=> {
    render(json.data.slider)
    radio(json.data.radioList)
    song(json.data.songList)
    lazyload(document.querySelectorAll('.lazyload'))
  })

new Search(document.querySelector('.search-view'))



if (module.hot) {
  module.hot.accept();
}

function radio(radioList){
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
}

function song(songList){
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
}

function rankList(topList){
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
}


function songHandle(item){
  return item.songList.map((song,index)=>
    `
    <p>${index+1}<span>${song.songname}</span>- ${song.singername}</p>
    `
  ).join('')
}

function render(slider){
  let slides = slider.map(slide=>{
    return {link: slide.linkUrl, image: slide.picUrl }
  })
  new Slider({
    el: document.querySelector('.item-wrapper'),
    slides
  })
}
