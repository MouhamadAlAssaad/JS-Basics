let gre = document.querySelector(".green");
let re = document.querySelector(".red");
let blu = document.querySelector(".blue");
let t = document.getElementById("text");

gre.onclick = function () {
  t.style.color = "green";
};

re.onclick = function () {
  t.style.color = "red";
};

blu.onclick = function () {
  t.style.color = "blue";
};