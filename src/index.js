import './main.css'
import Search from './js/search'
import Play from './js/play'
import Swiper from './js/shoushi'
import lazyload from './js/lazyload'
import Rank from './json/rank.json'
import searchList from './json/search.json'

import './js/tabs'

const $ = s=>document.querySelector(s)
const $$ = s=>document.querySelectorAll(s)
var songs = []
var index = 3

setTimeout(()=>{
  $('#siteWelcome').classList.remove('active')
},100)


fetch(`https://api.apiopen.top/searchMusic?name=男儿当自强`)
      .then(res=>res.json())
      .then(json=>{
        songs.push(...json.result)
      })

rankList(Rank.data.topList)
lazyload($$('.lazyload'))


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

$('#pre-icon').addEventListener('click',()=>{
  index--
  let music = null
  xxx.$songs.length?music = xxx.$songs:music = songs
  if(index < 0) index = music.length - 1
  ssss(index,music)
})

$('#next-icon').addEventListener('click',()=>{
  index++
  let music = null
  xxx.$songs.length?music = xxx.$songs:music = songs
  console.log(music)
  if(index > music.length - 1) index = 0
  ssss(index,music)
})

function showPlayPage(){
  if(!$('#audio').src){
    new Play(playPage,songs[0])
  }
  $('.mark').classList.add('notScroll')
  $('.mark').style.height = '80vh';
  playPage.style = `transform: translateY(0);transition: transform 0.5s`
}

function ssss(index,songs){
  new Play(playPage,songs[index])
}


new Swiper($('.play-page main'),$('.play-page .icon-exchange'))
