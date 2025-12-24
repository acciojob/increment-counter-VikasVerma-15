//your JS code here. If required.
let heading = document.getElementById("head");
let button = document.getElementById("bt");

button.addEventListener("click", () => {
  heading.textContent = Number(heading.textContent) + 1;
	alert(heading.textContent);
});