module.exports = (function(){
  var lis = document.querySelectorAll('nav ul li')
  var sections = document.querySelectorAll('main>section')
  for(let i=0;i<lis.length;i++){
    lis[i].addEventListener('click',function(){
      for(let i=0;i<lis.length;i++){
        lis[i].classList.remove('active')
        sections[i].classList.add('hide')
      }
      this.classList.add('active')
      sections[i].classList.remove('hide')
    })
  }
})()