const btns = document.querySelectorAll("button");
const screen = document.querySelector(".screen");

console.log(btns);

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let a = "";
let b = "";
let operator;

function operate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "clear") {
      screen.textContent = "";
    } else {
      if (
        btn.textContent === "+" ||
        btn.textContent === "-" ||
        btn.textContent === "/" ||
        btn.textContent === "*"
      ) {
        screen.textContent = "";
        console.log(a);
      } else {
        a += btn.textContent;
        screen.textContent += btn.textContent;
      }
    }
  });
});
