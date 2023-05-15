const btn = document.querySelector("#clickMe");
let anzahl = 0;

btn.addEventListener("click", () => {
  anzahl++;
  btn.innerHTML = `Click me: ${anzahl}`;
});
