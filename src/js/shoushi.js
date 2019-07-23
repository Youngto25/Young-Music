module.exports = class Swiper{
    constructor(el,span){
      this.$el = el
      this.$span = span
      this.initX = 0
      this.newX = 0
      this.clock = ''
      this.judge()
    }

    judge(){
      this.$el.ontouchstart = (e)=>{
        this.initX = e.changedTouches[0].pageX 
      }
      this.$el.ontouchmove = (e)=>{
        if(this.clock) clearInterval(this.clock)
        this.clock = setTimeout(()=>{
          this.newX = e.changedTouches[0].pageX
          if(this.newX - this.initX > 0) {
            this.$el.querySelector('.wrapper').style.transform = 'translateX(0vw)'
            this.$span.querySelector('.left').classList.add('active')
            this.$span.querySelector('.right').classList.remove('active')
          } else {
            this.$el.querySelector('.wrapper').style.transform = 'translateX(-100vw)'
            this.$span.querySelector('.left').classList.remove('active')
            this.$span.querySelector('.right').classList.add('active')
          }  
        }, 100)
    }
  }
}
