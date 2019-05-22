var silder=document.querySelector("#silder");
var left=document.querySelector(".left");
var right=document.querySelector(".right");

// right.addEventListener("click",function(){
   
//     var active=document.querySelector(".active");
//    if(active.nextElementSibling!=null){
//     active.nextElementSibling.classList.add("active");
//     active.classList.remove("active");
//    }else{
//        silder.children[0].children[0].classList.add("active");
//        active.classList.remove("active");
       
//    }
//     console.log(silder.children[0]);
// })

// left.addEventListener("click",function(){
   
//     var active=document.querySelector(".active");
//    if(active.previousElementSibling!=null){
//     active.previousElementSibling.classList.add("active");
//     active.classList.remove("active");
//    }else{
//        silder.children[0].children[2].classList.add("active");
//        active.classList.remove("active");
       
//    }
//     console.log(silder.children[0]);
// })

var silder=document.querySelector("#silder");
var left=document.querySelector(".left");
var right=document.querySelector(".right");
 
var left_a=0;
document.body.addEventListener("keydown",function(ev){
    if(ev.which==37){
        left-=800;
        var active=document.querySelector(".active");
        if(active.nextElementSibling!=null){
         active.nextElementSibling.classList.add("active");
         active.classList.remove("active");
        }else{
            silder.children[0].children[0].classList.add("active");
            active.classList.remove("active");
            
        }
    }
    if(ev.which==39){
        left_a+=800;
        var active=document.querySelector(".active");
        if(active.previousElementSibling!=null){
         active.previousElementSibling.classList.add("active");
         active.classList.remove("active");
        }else{
            silder.children[0].children[2].classList.add("active");
            active.classList.remove("active");
            
        }
    }
    silder.style.left=left_a+"px";
})
