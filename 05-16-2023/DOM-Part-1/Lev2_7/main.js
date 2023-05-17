const btn = document.querySelector("button");
const output = document.querySelector(".umwickeln");
let counter = 0;

btn.addEventListener("click", () => {
  const newContent = document.createElement("div");
  newContent.textContent = counter;
  output.appendChild(newContent);
  if (counter % 10 == 0) {
    newContent.setAttribute("class", "weiss");
  } else {
    newContent.setAttribute("class", "rechteck");
  }
  counter++;
});
