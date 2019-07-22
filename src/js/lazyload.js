module.exports = function lazyload(imgs){
  let images = Array.from(imgs)

  if('IntersectionObserver' in window){
    let observer = new IntersectionObserver(function(entries){
      entries.forEach(entry=>{
        if(entry.intersectionRatio>0){
          loadImage(entry.target,()=>{
            observer.unobserve(entry.target)
          })
        }
      })
    },{threshold: 0.01})
  
    images.forEach(image=>observer.observe(image))
  }else{
    let onscroll = throttle(function(){
      if(images.length === 0 ){
        return window.removeEventListener('scroll',onscroll)
      }
      images = images.filter(img=>img.classList.contains('lazyload'))
      images.forEach(img=>{
        if(inViewport(img)){
          loadImage(img)
        }
      })
    },300)
  
    window.addEventListener('scroll',onscroll)
    window.dispatchEvent(new Event('scroll'))
  }

  function throttle(func,wait){
    let prev , timer
    return function fn(){
      let curr = Date.now()
      let diff = curr - prev
      if(!prev || diff >= wait){
        func()
        prev = curr
      }else if(diff<wait){
        clearTimeout(timer)
        timer = setTimeout(fn,wait-diff)
      }
    }
  }

  function inViewport(img){
    let { top, left, right, bottom } = img.getBoundingClientRect()
    let vpHeigth = document.documentElement.clientHeight
    return (
      (top>0 && top<vpHeigth)
    )
  }

  function loadImage(img,callback){
    let image = new Image()
    image.src = img.dataset.src
    image.onload = function(){
      img.src = image.src
      img.classList.remove('lazyload')
      callback()
    }
  }
}