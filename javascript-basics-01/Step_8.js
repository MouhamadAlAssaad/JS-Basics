const age = parseInt(prompt("Enter your age"));
document.getElementById("age").value=age;
let answer;

if (age>18) {
    answer = "You are over 18";}
else {
    answer =  "You are under 18";
};
document.getElementById("validate").onclick = function() {
console.log(answer)
alert(answer)
}