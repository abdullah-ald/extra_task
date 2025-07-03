const slides=document.querySelectorAll(".container .slide");
const dotes=document.querySelector(".dotes");
for(let i =0 ;i<slides.length-2;i++){
    dotes.innerHTML+=`<span class="dote" onclick=moveSlid(${i})></span>`
}

function moveSlid(index){

    for(let i=0;i<slides.length;i++){
        slides[i].style.transform=`translateX(calc(-${index * 100}% - ${4 * index}vw))`
    }
}