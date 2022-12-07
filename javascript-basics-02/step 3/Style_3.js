let div1 = document.createElement("div");
document.body.appendChild(div1);
div1.className = "divv";
var insert = document.querySelector(".divv");
var input = document.getElementById("name");
document.getElementById("name").onkeyup = function (){
    insert.innerHTML = input.value;
};
