"use strict";
let headerSlider=document.querySelector(".header-slider")
let carouselIndicators=document.querySelector(".carousel-indicators")
let sliderItems=document.querySelectorAll(".slider")
let carouselIndicatorItems=carouselIndicators.querySelectorAll("li")
console.log(carouselIndicatorItems)
let menu=document.querySelector(".menu")
let menuBtn=document.querySelector(".menuBtn")
let faBars=document.querySelector(".fa-bars")
let faXmark=document.querySelector(".fa-xmark")


console.log(sliderItems)
let activeSlideIndex
let activeSlide
let nextSlide
let slideNextIndex
let activeIndicator
let activeNextIndicator


menuBtn.addEventListener("click",function(){
    menu.classList.toggle("show");
    faXmark.classList.toggle("show");
    faBars.classList.toggle("hidden")
})



sliderItems.forEach(function(slide,index){
    console.log(slide)
    if(index!=0){
        slide.classList.add("hidden")
    }
    sliderItems[0].setAttribute("data-active","")
    carouselIndicatorItems[0].classList.add("active")
    slide.dataset.index=index;
    slide.addEventListener("click",function(){
        activeIndicator=carouselIndicators.querySelector(".active")
        activeSlideHidden(slide)
        findNextSlide(index)
        showNextSlide()

    })
});
carouselIndicatorItems.forEach(function(indicator,index){
    indicator.addEventListener("click",function(){
        findActiveSlide()
        activeSlideHidden(activeSlide)
        sliderItems[index].classList.remove("hidden")
        sliderItems[index].setAttribute("data-active","")
        indicator.classList.add("active")
        
    })
})

setInterval(function (){
    findActiveSlide()
    activeSlideHidden(activeSlide)
    findNextSlide(activeSlideIndex)
    showNextSlide()

    
},3000)

function findActiveSlide(){
    activeSlide=document.querySelector("[data-active]")
    activeSlideIndex=+activeSlide.getAttribute("data-index")
    activeIndicator=carouselIndicators.querySelector(".active")
    console.log(activeIndicator)
}
function activeSlideHidden(item){
    item.classList.add("hidden")
    item.removeAttribute("data-active")
    console.log(activeIndicator+"barev")
    activeIndicator.classList.remove("active")
}
function showNextSlide(){
   
    nextSlide.classList.remove("hidden")
    nextSlide.setAttribute("data-active","")
    activeNextIndicator.classList.add("active")
    
}
function findNextSlide(activeIndex){
    
    if(activeIndex+1==sliderItems.length){
        slideNextIndex=0;
    }else{
        slideNextIndex=activeIndex+1

    }
    nextSlide=document.querySelector(`[data-index="${slideNextIndex}"]`)
    activeNextIndicator=carouselIndicatorItems[slideNextIndex]

}
function findPrevSlide(){
    if(activeSlideIndex==0){
        slideNextIndex=sliderItems.length-1
    }else{
        slideNextIndex=activeSlideIndex-1
    }
   
    nextSlide=document.querySelector(`[data-index="${slideNextIndex}"]`)
}