const open_modal_btn=document.querySelector("#open_modal")
const modal=document.querySelector("#modal");
const skip=document.querySelector("#skip");
const create_account=document.querySelector('input[type="submit"')

open_modal_btn.addEventListener("click",()=>{
    modal.showModal()
})

skip.addEventListener("click",()=>{
    modal.close()
})

create_account.addEventListener("click",(e)=>{
    e.preventDefault()
    window.alert("alert")
})