//your JS code here. If required.
let heading = document.getElementById("head");
let button = document.getElementById("bt");

button.addEventListener("click", () => {
	alert(heading.textContent);
  heading.textContent = Number(heading.textContent) + 1;
	
});
