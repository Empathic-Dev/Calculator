    // basic calculator script
  function calc(){
  var a = parseInt(document.getElementById("#value1").value);
  var b = parseInt(document.getElementById("#value2").value);
  var op = document.getElementById("#operator").value;
  var calculate;

  if (op == "add") {
    calculate = a + b;
  } else if (op == "min"){
    calculate = a - b;
  } else if (op == "div"){
    calculate = a / b;
  } else if (op == "mul"){
    calculate = a * b;
  }
  document.getElementById("#results").innerText = calculate;
  }

    // calculator app style script
var oneBtn = document.getElementById("calc-one");
var twoBtn = document.getElementById("calc-two");
var threeBtn = document.getElementById("calc-three");
var fourBtn = document.getElementById("calc-four");
var fiveBtn = document.getElementById("calc-five");
var sixBtn = document.getElementById("calc-six");
var sevenBtn = document.getElementById("calc-seven");
var eightBtn = document.getElementById("calc-eight");
var nineBtn = document.getElementById("calc-nine");
var zeroBtn = document.getElementById("calc-zero");

var decimalBtn = document.getElementById("calc-decimal");
var clearBtn = document.getElementById("calc-clear");
var backspaceBtn = document.getElementById("calc-backspace");
var displayValElement = document.getElementById("calc-display-val");

var displayVal = '0';
var pendingVal;
var evalStringArray = [];

var calcNumBtns = document.getElementsByClassName("calc-btn-num");
var calcOperatorBtns = document.getElementsByClassName("calc-btn-operator");

var updateDisplayVal = (clickObj) => {
  var btnText = clickObj.target.innerText;
  console.log(btnText);
  if (displayVal === "0")
    displayVal = "";

    displayVal += btnText;
    displayValElement.innerText = displayVal;

  console.log("updateDisplayVal Function Test");
  console.log(displayVal);
}

var performOperation = (clickObj) => {
  var operator = clickObj.target.innerText;

  switch (operator) {
    case '+':
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("+");
      break;
    case '-':
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("-");
      break;
    case 'x':
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("*");
      break;
    case '÷':
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("/");
      break;
    case '=':
      evalStringArray.push(displayVal);
      var evaluation = eval(evalStringArray.join(" "));
      displayVal = evaluation + "";
      displayValElement.innerText = displayVal;
      evalStringArray = [];
      break;
    default:
      break;
  }
}

for (let i = 0; i < calcNumBtns.length; i++) {
  calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}
for (let i = 0; i < calcOperatorBtns.length; i++) {
  calcOperatorBtns[i].addEventListener('click', performOperation, false);
}

clearBtn.onclick = () => {
  displayVal = "0";
  pendingVal = undefined;
  evalStringArray = [];
  displayValElement.innerHTML = displayVal;
  console.log("all clear btn works");
}
backspaceBtn.onclick = () => {
  let lengthOfDisplayVal = displayVal.length;
  displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);

  if (displayVal === "")
    displayVal = "0";

  displayValElement.innerText = displayVal;
  console.log("backspace btn works");
}
decimalBtn.onclick = () => {
  if(!displayVal.includes('.'))
    displayVal += ".";
  displayValElement.innerText = displayVal;
}

    // calculator v3
function getHistory(){
  return document.getElementById("history-value").innerText;
} // this function gets the inner html of the ".history-value" element and returns it

function printHistory(num){
  document.getElementById("history-value").innerText=num;
} // this function gets the inner html of the ".history-value" element and sets the "num" parameter to the ".history-value"

function getOutput(){
  return document.getElementById("output-value").innerText;
} // this function gets the inner html of the ".output-value" element and returns it

function printOutput(num){
  if (num == ""){
    document.getElementById("output-value").innerText=num;
      // if the output value is an empty string, the ".input-value" element stays empty
  } else {
    document.getElementById("output-value").innerText=getFormattedNumber(num);
      // if the output value is a number,
  }
}

function getFormattedNumber(num){
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
} // this function gets the number and returns a comma separated value if the number is long

function reverseNumberFormat(num){
  return Number(num.replace(/,/g,''));
} // this function replaces the comma with an empty character so the calculator can manipulate the number

var operator = document.getElementsByClassName("calc-v3-operator");
  // this variable gets the list of elements with a ".calc-v3-operator"

// this for loop accesses each operator and listens for a click event
  for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click', function(){
    console.log("This operator was clicked: "+this.id);
  }); // when an operator is clicked 
}

var numbers = document.getElementsByClassName("calc-v3-number");
  // this variable gets the list of elements with a ".calc-v3-number"

// this for loop accesses each number and listens for a click event
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function(){
      // get the output without the commas first
    var output=reverseNumberFormat(getOutput());
    if(output!=NaN){ // if output is not a number
      output=output+this.id; // concatenate the id to the output and print it inside the "."
      printOutput(output);
      console.log("This number was clicked: "+this.id);
    }
  });
}