let name = document.getElementById("name");
let surname = document.getElementById("surname");
let city = document.getElementById("city");
document.querySelector("button").addEventListener("click",function reset() {

    let resbtn = confirm('do you want to continue?')
    if (resbtn == true){
        name.value = null;
        surname.value = null;
        city.value = null;
        return true
    }
})