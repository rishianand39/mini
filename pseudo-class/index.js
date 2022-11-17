document.querySelector('input[type="submit"]').addEventListener("click",(e)=>{
    e.preventDefault();
    document.querySelector(".error_message").innerHTML="Please fill your email"
})