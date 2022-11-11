let root=document.querySelector(":root")


document.querySelector(".first").addEventListener("click",()=>{
    root.style.setProperty("--background","white")
    root.style.setProperty("--color","black")

})
document.querySelector(".second").addEventListener("click",()=>{
    root.style.setProperty("--background","black")
    root.style.setProperty("--color","white")

})
document.querySelector(".third").addEventListener("click",()=>{
    let third_theme=getComputedStyle(root)
    root.style.setProperty("--background",third_theme.getPropertyValue("--third-theme"))
    root.style.setProperty("--color","white")

})