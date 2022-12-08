let password = document.getElementById("password");
let confirmation = document.getElementById("confirmation");

document.querySelector("button").onclick = function(e){
    if(password.value == '' && confirmation.value == ''){
        password.style.border = "1px solid red";
    } else if(password.value == confirmation.value){
        alert("Password Confirmed!");
    } else {
        confirmation.style.border = "1px solid red"
    }
};