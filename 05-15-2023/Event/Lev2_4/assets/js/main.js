const btn = document.querySelector("#button");
const color = document.querySelector("#farbeAuswahlen");

btn.addEventListener("click", () => {
  event.preventDefault();
  document.body.style.backgroundColor = color.value.replace(" ", "");
  let selectedOption = color.options[color.selectedIndex];
  selectedOption.style.backgroundColor = color.value.replace(" ", "");
});
