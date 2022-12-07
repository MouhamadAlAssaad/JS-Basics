const num1 = parseInt(prompt('Enter your shoe size '));
document.getElementById("shoe_size").value=num1;
const num2 = parseInt(prompt('Enter your birth year '));
document.getElementById("year").value=num2;
function myFunction(num, num2) {
    let x = (((((num*2)+5)*50)-num2)+1766);

    return x;
  }
  document.getElementById("validate").onclick = function() {
  let y =myFunction(num1,num2);
  alert(y);
  }