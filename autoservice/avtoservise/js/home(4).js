"use strict";
let container=document.querySelector(".carousel")
let sliderItems=container.querySelectorAll(".services-text")
console.log(sliderItems)
let btnNext=document.querySelector(".btn-next")
let btnPrev=document.querySelector(".btn-prev")
let nextSlide
sliderItems.forEach(function(slide,index){
    if(index!=0){
        slide.classList.add("Hidden")
    };
    sliderItems[0].setAttribute("data-active","");
    slide.dataset.index=index
    slide.addEventListener("click",function(){
         activeSlideHidden(slide)
            slide.classList.add("Hidden")
            slide.removeAttribute("data-active")
            let slideNextIndex;
            if (index + 1 == sliderItems.length) {
                slideNextIndex = 0;
            } else {
                slideNextIndex = index + 1;

            }
             nextSlide = container.querySelector(`[data-index="${slideNextIndex}"]`);
            showSlide()
            nextSlide.classList.remove("Hidden")
            nextSlide.setAttribute("data-active","")
        })
})
btnNext.addEventListener("click",function(){
   
    let activeSlide=document.querySelector("[data-active]")
    let activeSlideIndex=+activeSlide.getAttribute("data-index")
    activeSlideHidden(activeSlide)
    activeSlide.classList.add("Hidden")
    activeSlide.removeAttribute("data-active")
    let slideNextIndex;
    if(activeSlideIndex+1==sliderItems.length){
        slideNextIndex=0;
    }else{
        slideNextIndex=activeSlideIndex+1
    }
     nextSlide=document.querySelector(`[data-index="${slideNextIndex}"]`)
    nextSlide.classList.remove("Hidden")
    nextSlide.setAttribute("data-active","")
})
btnPrev.addEventListener("click",function(){
    let activeSlide=document.querySelector("[data-active]")
    let activeSlideIndex=+activeSlide.getAttribute("data-index")
    activeSlideHidden(activeSlide)
    activeSlide.classList.add("Hidden")
    activeSlide.removeAttribute("data-active")
    let slideNextIndex;
    if(activeSlideIndex==0){
        slideNextIndex=sliderItems.length-1
    }else{
        slideNextIndex=activeSlideIndex-1
    }
    console.log(slideNextIndex)
     nextSlide=document.querySelector(`[data-index="${slideNextIndex}"]`)
    showSlide()
    nextSlide.classList.remove("Hidden")
    nextSlide.setAttribute("data-active","")
})
setInterval(function(){

        let activeSlide=document.querySelector("[data-active]")
        let activeSlideIndex=+activeSlide.getAttribute("data-index")
        activeSlideHidden(activeSlide)
        activeSlide.classList.add("Hidden")
        activeSlide.removeAttribute("data-active")
        let slideNextIndex;
        if(activeSlideIndex+1==sliderItems.length){
            slideNextIndex=0;
        }else{
            slideNextIndex=activeSlideIndex+1
        }
        nextSlide=document.querySelector(`[data-index="${slideNextIndex}"]`)
        showSlide()
        nextSlide.classList.remove("Hidden")
        nextSlide.setAttribute("data-active","")
   
},5000)
function activeSlideHidden(item){
    item.classList.add("Hidden")
    item.removeAttribute("data-active")

}
function showSlide(){
    nextSlide.classList.remove("Hidden")
    nextSlide.setAttribute("data-active","")
}