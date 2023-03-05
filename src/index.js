import "./styles.css";

document.getElementById("app").innerHTML = ``;
let display = document.querySelector(".display");
let button = document.querySelectorAll(".key-box");

let string = "";
let arr = Array.from(button);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText == "=") {
      string = eval(string);
      display.value = string;
    } else if (e.target.innerText == "AC") {
      string = "";
      display.value = string;
    } else if (e.target.innerText == "DE") {
      string = string.substring(0, string.length - 1);
      display.value = string;
    } else {
      string += e.target.innerText;
      display.value = string;
    }
  });
});
