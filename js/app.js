var overlay= document.getElementById("overlay");
var btn= document.querySelector(".buttons");

btn.addEventListener("click",function(){
    overlay.style.display="block";
})

overlay.addEventListener("click",function(){
    overlay.style.display="none";
})