const inputValue = document.querySelector("#number");
const btn = document.querySelectorAll("button");

let currentInput = "";
let operator = "";
let previousInput = "";

console.log(inputValue.value);

btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerHTML;

    if (value >= 0 && value <= 9) {
      if (currentInput === "0") {
        currentInput = value;
      } else {
        currentInput += value;
        inputValue.value = currentInput;
      }
    } else if (value === "+" || value === "-") {
      operator = value;
      previousInput = currentInput;
      currentInput = "";
    } else if (value === "=") {
      const result = eval(`${previousInput} ${operator} ${currentInput} `);
      inputValue.value = result;
      currentInput = result;
      operator = "";
      previousInput = "";
    } else if (value === "C") {
      inputValue.value = "";
      currentInput = "";
      previousInput = "";
      operator = "";
    }
  });
});

inputValue.addEventListener("change", () => {
  
});
