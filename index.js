"use strict"

let img=document.querySelector("#img1");
let arrayImage=["sky.jpg","sun.png","frog.jpg","dor.png"]
let index=1;
let leftmenu=document.querySelector("#leftMenu");
let horizontalLine=document.querySelector("#horizontal");
let t="cross.png"



let menuside=document.querySelector("#menuSide");

function Next(){

 

    if(index>arrayImage.length-1){
        index=0;

    }

    img.setAttribute("src",arrayImage[index])
    index++;
   
   
    
}

function Prev(){
   
    if(index<=1){
        return;
       }
     index--;

    img.setAttribute("src",arrayImage[index-1])
   
 
    console.log(index)
    
}

function CrossShow(){
    if(horizontalLine.getAttribute("src")==="horizontal.png"){
        horizontalLine.setAttribute("src",t);
        //your menu shows here
        // menuside.animate([{width:"10rem"}],{duration:500,iterations:1,fill:"forwards"})
        menuside.style.visibility="visible"
        menuside.style.width="10rem"
    }
    else{
        horizontalLine.setAttribute("src","horizontal.png") 
        // menuside.animate([{width:"0rem"}],{duration:500,iterations:1,fill:"backwards"})
        menuside.style.visibility="hidden"
        menuside.style.width="0rem"
       
    }
 
}

       