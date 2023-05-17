const btn = document.querySelectorAll("button");
console.log(btn);

btn.forEach((elm) => {
  elm.addEventListener("click", () => {
    const output = elm.textContent;
    document.querySelector("h1").innerHTML = output;
  });
});
