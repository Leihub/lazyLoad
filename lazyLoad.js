class lazyLoad{
    constructor(el){
        this.imgList = Array.from(document.querySelectorAll(el))
        this.init()
    }
    canLoad(){
        let imgList = this.imgList
        for(let i=0;i<imgList.length;i++){
            this.getBound(imgList[i]) && this.loadImage(imgList[i],i)
        }
    }
    getBound(el){
        let bound = el.getBoundingClientRect()
        let Clientheight = window.innerHeight
        return bound.top <= Clientheight - 100
    }
    loadImage(el,index){
        let src = el.getAttribute('data-orignal')
        el.src = src
        this.imgList.splice(index,1)
    }
    bindEvent(){
        window.addEventListener('scroll',()=>{
            this.canLoad()
        })
    }
    init(){
        this.canLoad()
        this.bindEvent()
    }
}