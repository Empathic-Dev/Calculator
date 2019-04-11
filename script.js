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
