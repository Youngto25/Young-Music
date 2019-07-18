module.exports = 
  class Slider{
    constructor(option={}){
      this.$el = option.el
      this.$slides = option.slides
      this.$interval = option.interval || 3000
      this.$index = 0
      this.render()
      this.start()
    }
    
    render(){
      this.$length = this.$slides.length
      this.$el.style.width = `${this.$length*100}%`
      this.$el.innerHTML = this.$slides.map((item)=>{
        return `<div class="item">
          <a href="${item.link}">
            <img src="${item.image}">
          </a>
         </div>  
      `
      }).join('')
    }

    start(){
      setInterval(this.next.bind(this),this.$interval)
    }

    next(){
      if(this.$index >= this.$length -1){
        this.$index = 0
      }else{
        this.$index += 1
      }
      this.$el.style.transform = `translateX(${-this.$index*100/this.$length}%)`
    }
  }
