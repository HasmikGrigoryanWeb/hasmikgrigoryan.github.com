"use strict";
AOS.init();


let miniInfo=document.querySelector(".mini-info");
let text="Hello! My name is Hasmik Grigoryan Web developer";
let i=0;
typeWriter()
function typeWriter(){
    if(i<text.length){
        miniInfo.innerHTML+=text.charAt(i);
        i++;
        setTimeout(typeWriter,60)
    }

}



