const input = document.querySelector("#my-select");

input.addEventListener("change", () => {
  document.querySelector(
    ".output"
  ).innerHTML = `Sie haben ${input.value} ausgewählt!`;
});
