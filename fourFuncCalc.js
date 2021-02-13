var operator = prompt("Please enter the expression to be used (*, +, -, /, %, **) or type 'z' to exit: ")

switch (operator) {
  case '+':
    var firstNum = prompt("Please enter the first number: ")
    var secondNum = prompt("Please enter the second number: ")
    var sum = parseInt(firstNum) + parseInt(secondNum)
    console.log("Your sum is: ",sum)
    break;
  case '-':
    var firstNum = prompt("Please enter the first number: ")
    var secondNum = prompt("Please enter the second number: ")
    var difference = parseInt(firstNum) - parseInt(secondNum)
    console.log("Your difference is: ",difference)
    break;
  case '*':
    var firstNum = prompt("Please enter the first number: ")
    var secondNum = prompt("Please enter the second number: ")
    var product = parseInt(firstNum) * parseInt(secondNum)
    console.log("Your product is: ",product)
    break;
  case '/':
    var firstNum = prompt("Please enter the first number: ")
    var secondNum = prompt("Please enter the second number: ")
    var quotient = parseInt(firstNum) / parseInt(secondNum)
    console.log("Your quotient is: ",quotient)
    break;
  case 'z':
    console.log("Exiting...")
    break;
  default:
    console.log("Please input an appropiate operator and try again!")
    break;
}
