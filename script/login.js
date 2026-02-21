
document.getElementById("btn-login").addEventListener("click",function(){
    // console.log("Log in button clicked");
    const inputNumber = document.getElementById('input-number');
    const contacNumber = inputNumber.value ;
    // console.log(contacNumber);
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value ;
    // console.log(pin)
    if(contacNumber == '01234567890' && pin == '1234'){
        // console.log('login successful');
        alert("Login Successfull");
        // window.location.replace("./home.html")
        window.location.assign("./home.html");
    }
    else{
        alert("Login Failed");
        return ;
    }
})