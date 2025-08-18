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
let operator = "";

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

let exp = [];
let ans = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (exp.length === 0) {
      exp.push(btn.textContent);
    } else if (
      exp.length === 1 &&
      btn.textContent !== "+" &&
      btn.textContent !== "-" &&
      btn.textContent !== "*" &&
      btn.textContent !== "/"
    ) {
      exp[0] += btn.textContent;
      screen.textContent = exp[0];
      console.log(exp);
    } else if (
      exp.length === 1 &&
      (btn.textContent === "+" ||
        btn.textContent === "-" ||
        btn.textContent === "*" ||
        btn.textContent === "/")
    ) {
      exp.push(btn.textContent);
    } else if (exp.length === 2) {
      exp.push(btn.textContent);
    } else if (exp.length === 3 && btn.textContent !== "=") {
      exp[2] += btn.textContent;
      console.log(exp);
    } else if (exp.length === 3 && btn.textContent === "=") {
      exp[0] = operate(Number(exp[0]), Number(exp[2]), exp[1]);
      screen.textContent = exp[0];
      console.log(exp[0]);
      exp.pop();
      exp.pop();
    }
  });
});
