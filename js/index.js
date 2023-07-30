const toggler = document.querySelector(".btn-sidebar");

window.addEventListener("resize",()=>{
    let width = screen.width;
    if (width > 576){
        document.querySelector("#sidebar").classList.remove("collapse");    
    }
    else{
        document.querySelector("#sidebar").classList.add("collapse");    
    }
})


toggler.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapse");
});