const modal=document.querySelector("#modal");
let login_btn=document.querySelector("#nav-login");
let close_btn=document.querySelector("#close_btn");

login_btn.addEventListener("click",()=>{
    modal.showModal()
})
close_btn.addEventListener("click",()=>{
    modal.close()
})


// modal column 2

let modal_column2=document.querySelector(".column_2")

modal_column2.innerHTML=`<div>
<div class="input_field">

  <input id="email_or_mobile" type="text" placeholder="Enter Email/Mobile number" />
</div>
<div class="input_field">
  <input type="password" placeholder="Enter password" />
  <a class="links" href="#">forgot?</a>
</div>
<p id="terms_para">
  By continuing you agree to Flipkart's
  <a class="links" href="">Terms of Use</a> and <a class="links" href="#">Privacy Policy.</a>
</p>
<button class="btn login">Login</button>
<p>OR</p>
<button class="btn otp">Request OTP</button>
<a class="create_account links" href="#">
  New to Flipkart? Create an account</a
>
</div>`

let opt_btn=document.querySelector(".otp")
opt_btn.addEventListener("click",()=>{
    let email_or_mobile=document.querySelector("#email_or_mobile");
    let password=document.querySelector('input[type="password"]');
    if(email_or_mobile.value !=="" && password.value !==""){
        modal_column2.innerHTML=`        <div>
        <div class="otp_heading">

          <p>Please enter the OTP sent to 9155284675.<a class="links" href="#">Change</a></p>
          
        </div>
        <div class="otp_container">
          <input
            class="otp"
            type="text"
            oninput="digitValidate(this)"
            onkeyup="tabChange(1)"
            maxlength="1"
            autofocus
          />
          <input
            class="otp"
            type="text"
            oninput="digitValidate(this)"
            onkeyup="tabChange(2)"
            maxlength="1"
          />
          <input
            class="otp"
            type="text"
            oninput="digitValidate(this)"
            onkeyup="tabChange(3)"
            maxlength="1"
          />
          <input
            class="otp"
            type="text"
            oninput="digitValidate(this)"
            onkeyup="tabChange(4)"
            maxlength="1"
          />
          <input
          class="otp"
          type="text"
          oninput="digitValidate(this)"
          onkeyup="tabChange(5)"
          maxlength="1"
        />
        <input
        class="otp"
        type="text"
        oninput="digitValidate(this)"
        onkeyup="tabChange(6)"
        maxlength="1"
      />
        </div>
        <button class="btn otp_verify_btn">Verify</button>
        <p>Not received your code? <a class="links" href="#">Resend code</a></p>
      </div>`  
    }
})

// otp

let digitValidate = function (ele) {
  ele.value = ele.value.replace(/[^0-9]/g, "");
};

let tabChange = function (val) {
  let ele = document.querySelectorAll(".otp_container>input");
  if (ele[val - 1].value != "") {
    ele[val].focus();
  } else if (ele[val - 1].value == "") {
    ele[val - 2].focus();
  }
};