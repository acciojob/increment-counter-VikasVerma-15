document.addEventListener("DOMContentLoaded", function () {
  const counter = document.getElementById("counter");
  const button = document.getElementById("incrementBtn");

  button.addEventListener("click", function () {
    alert(Number(counter.textContent));
    counter.textContent = Number(counter.textContent) + 1;
  });
});