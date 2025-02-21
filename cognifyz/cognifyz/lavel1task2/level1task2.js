const myButton = document.getElementById("myButton");
myButton.addEventListener("click", function() {
  if (this.style.backgroundColor === "lightgray") {
    this.style.backgroundColor = "lightblue";
  } else {
    this.style.backgroundColor = "lightgray";
  }
});

function greet() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  let greeting;

  if (hours < 12) {
    greeting = "Good morning!";
  } else if (hours < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  alert(greeting);
}


function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
    return; 
  }

  const sum = num1 + num2;
  document.getElementById("result").textContent = "Result: " + sum;
}