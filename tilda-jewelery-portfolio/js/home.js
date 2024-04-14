"use strict"
let progress=document.querySelector(".progress-mini")
let broochContainer=document.querySelector(".brooch");
let brooches=broochContainer.querySelectorAll("img")
console.log(brooches)
let combImages=document.querySelectorAll(".comb-img")
let combImg
let menu=document.querySelector(".menu")
let menuBtn=document.querySelector(".menuBtn")
let faBars=document.querySelector(".fa-bars")
let faXmark=document.querySelector(".fa-xmark")
menuBtn.addEventListener("click",function(){
    menu.classList.toggle("show");
    faXmark.classList.toggle("show");
    faBars.classList.toggle("hidden")
})

window.addEventListener("scroll",function(){
    let allHeight=document.body.scrollHeight-document.documentElement.clientHeight;
    console.log(allHeight)
    let winscroll=window.pageYOffset
    console.log(winscroll)
    progress.style.width=winscroll*100/allHeight+"%"
})

window.addEventListener("scroll",function(){
    let screenHeight=window.innerHeight;
    brooches.forEach(function(brooch){
        let broochTop=brooch.getBoundingClientRect()
        if(broochTop.top<screenHeight-150){
            brooch.classList.add("scalebox")
        }else{
            brooch.classList.remove("scalebox")
        }
        
    })
})
window.addEventListener("scroll",function(){
    let screenHeight=window.innerHeight;
    combImages.forEach(function(combImg){
        let combImgTop=combImg.getBoundingClientRect()
        if(combImgTop.top<screenHeight/3){
            combImg.classList.add("rotatebox")
        }else{
            combImg.classList.remove("rotatebox")
        }
        
    })
})