import './main.css'
import Slider from './js/slider'
import './js/tabs'

var sliderItem = new Slider({
  el: document.querySelector('.item-wrapper'),
  slides: [
    {link: '#1',image: './imgs/carousel-1.jpg'},
    {link: '#2',image: './imgs/carousel-2.jpg'},
    {link: '#3',image: './imgs/carousel-3.jpg'},
    {link: '#4',image: './imgs/carousel-4.jpg'},
    {link: '#5',image: './imgs/carousel-5.jpg'}
  ]
})

if (module.hot) {
  module.hot.accept();
}
