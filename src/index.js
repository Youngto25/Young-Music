import './main.css'
import Search from './js/search'
import Play from './js/play'
import Swiper from './js/shoushi'
import lazyload from './js/lazyload'


import './js/tabs'

const $ = s=>document.querySelector(s)
const $$ = s=>document.querySelectorAll(s)

setTimeout(()=>{
  $('#siteWelcome').classList.remove('active')
},100)


fetch('http://localhost:4000/rank/')
 .then(res => res.json())
 .then(rank => rank.data.topList)
 .then(topList => {
   rankList(topList)
   lazyload($$('.lazyload'))
  })

var xxx = new Search($('.search-view'))


if (module.hot) {
  module.hot.accept();
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
  },200)
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
