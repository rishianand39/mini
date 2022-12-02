let left_handle=document.querySelector(".handle-left")
let right_handle=document.querySelector(".handle-right")
let root=document.querySelector(":root");


// left arrow handle
left_handle.addEventListener("click",()=>{
    if(parseInt(getComputedStyle(root).getPropertyValue("--slide-index")) !==0){
        console.log("left")
        root.style.setProperty("--slide-index",parseInt(getComputedStyle(root).getPropertyValue("--slide-index"))-1)
    }else{
        root.style.setProperty("--slide-index",3)  
    }
})

// right arrow handle
right_handle.addEventListener("click",()=>{
    if(parseInt(getComputedStyle(root).getPropertyValue("--slide-index"))!==3){
        root.style.setProperty("--slide-index",parseInt(getComputedStyle(root).getPropertyValue("--slide-index"))+1)
        console.log("right")
    }else{
        root.style.setProperty("--slide-index",0) 
    }
})