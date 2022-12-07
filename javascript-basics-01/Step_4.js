var name=prompt("Enter your name");
document.getElementById("name").value=name;
var surname=prompt("Enter your surname");
document.getElementById("surname").value=surname;
var city=prompt("Enter your city");
document.getElementById("city").value=city;
document.getElementById("validate").onclick = function() {
alert(` hello
    name : ${name}
    surname : ${surname}
    city : ${city}

    `);
}