/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}


function greet(timeStr) {
  const hour = parseInt(timeStr, 10);
  if (hour < 12) return "Good Morning"
  if (hour > 15) return "Good Evening"
  return "Good Afternoon"
}

function displayMessage(greetingStr) {
  document.getElementById("greeting").innerText = greetingStr;
}
/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
