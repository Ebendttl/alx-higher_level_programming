let name = "Dele";
console.log("Hello, " + name + "!");function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

let number = 5;
console.log("The factorial of " + number + " is: " + factorial(number));function calculate(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = "Invalid operator";
  }

  return result;
}

let num1 = 5;
let num2 = 3;
let operator = "+";

let result = calculate(num1, num2, operator);

console.log(`The result of ${num1} ${operator} ${num2} is: ${result}`);