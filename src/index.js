import './main.css'
import Slider from './js/slider'
import Search from './js/search'
import Play from './js/play'
import Swiper from './js/shoushi'
import './js/svg.js'
import lazyload from './js/lazyload'
import './js/tabs'
import rank from './json/rank.json'

let topList = rank.data.topList


const $ = s=>document.querySelector(s)
const $$ = s=>document.querySelectorAll(s)

fetch('http://localhost:4000/')
  .then(res=>res.json())
  .then(json=> {
    render(json.data.slider)
    radio(json.data.radioList)
    song(json.data.songList)
    lazyload($$('.lazyload'))
  })

fetch('http://localhost:4000/rank/')
 .then(res => res.json())
 .then(rank => rank.data.topList)
 .then(topList => rankList(topList))

var xxx = new Search($('.search-view'))


if (module.hot) {
  module.hot.accept();
}

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

function rankList(topList){
  $('.rank-item').innerHTML = topList.map((item)=>{
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
    el: $('.item-wrapper'),
    slides
  })
}




var playPage = $('.play-page')
var openButton = $('.header .open-play-page')

openButton.addEventListener('click',showPlayPage)

$('.icon-close-page .icon').addEventListener('click',()=>{
  $('.mark').classList.remove('notScroll')
  $('.mark').style.height = 'auto'
   playPage.style.transform = 'translateY(-100%)'
})

$('.search-view .search-list').addEventListener('click',()=>{
  new Play(playPage,xxx.$currentSong)
  setTimeout(()=>{
    openButton.dispatchEvent(new Event('click'))
  },400)
})

function showPlayPage(){
  let currentSong = {songname: '龙的传人',albummid: '002a50FE1JHhpM',songid: 7028535,singer: [{name: '王力宏'}]}
  if(!$('#audio').src){
    new Play(playPage,currentSong)
  }
  $('.mark').classList.add('notScroll')
  $('.mark').style.height = '80vh';
  playPage.style = `transform: translateY(0);transition: transform 0.5s`
}


new Swiper($('.play-page main'),$('.play-page .icon-exchange'))
