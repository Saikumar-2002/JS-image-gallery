let images=document.querySelectorAll(".parent img");
let icon=document.getElementById("close")
let popDiv=document.querySelector(".pop-up");
let popImg=document.getElementById("main-img")

for(img of images){
    img.onclick=function(){
        popDiv.style.display="flex";
        icon.style.display="block";
        popImg.src=this.src;

    }
}

function closepop(){
    popDiv.style.display="none"
}
