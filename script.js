//your JS code here. If required.
let counter = document.getElementById("counter");
let button = document.getElementById("incrementBtn");

button.addEventListener("click", () => {
  alert(counter.textContent); // un-incremented value
  counter.textContent = Number(counter.textContent) + 1;
});