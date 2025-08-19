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
let stop = false;

const isVal = (val) => ["/", "*", "-", "+"].includes(val);

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.textContent;

    if (stop) {
      if (isVal(val) && val !== "=" && val !== "clear") {
        stop = false;
      } else if (!isVal(val) && val !== "=" && val !== "clear") {
        exp = [];
        stop = false;
      }
    }

    if (exp.length === 0 && !isVal(val) && val !== "=" && val !== "clear") {
      exp.push(val);
      screen.textContent = val;
    } else if (
      exp.length === 1 &&
      !isVal(val) &&
      val !== "=" &&
      val !== "clear" &&
      exp[0].length < 9
    ) {
      exp[0] += val;
      screen.textContent = exp[0];
    } else if (
      exp.length === 1 &&
      isVal(val) &&
      val !== "=" &&
      val !== "clear"
    ) {
      exp.push(val);
    } else if (
      exp.length === 2 &&
      !isVal(val) &&
      val !== "=" &&
      val !== "clear"
    ) {
      exp.push(val);
      screen.textContent = exp[2];
    } else if (
      exp.length === 2 &&
      isVal(val) &&
      val !== "=" &&
      val !== "clear"
    ) {
      exp[1] = val;
    } else if (
      exp.length === 3 &&
      !isVal(val) &&
      val !== "=" &&
      val !== "clear" &&
      exp[2].length < 9
    ) {
      console.log(exp[2].length);
      exp[2] += val;
      screen.textContent = exp[2];
    } else if (
      exp.length === 3 &&
      (isVal(val) || val === "=") &&
      val !== "clear"
    ) {
      exp[0] = operate(Number(exp[0]), Number(exp[2]), exp[1]);

      console.log(exp[0]);

      if (exp[0] === Infinity) {
        screen.textContent = "Seriously?";
      } else if (exp[0].toString().length > 8 && exp[0] > 1) {
        screen.textContent = "Too Large";
      } else if (exp[0].toString().length > 8 && exp[0] < 1) {
        screen.textContent = exp[0].toFixed(7);
      } else {
        screen.textContent = exp[0];
      }
      stop = true;
      exp.pop();
      exp.pop();
    } else if (val === "clear") {
      exp = [];
      screen.textContent = "";
    }
  });
});
