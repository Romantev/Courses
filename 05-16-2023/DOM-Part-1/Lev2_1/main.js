const btn = document.querySelector("#navChange");
console.log(btn);

btn.addEventListener("click", () => {
  const text = document.querySelector("#navHome");
  if (text.style.transform == "scaleX(-1)") {
    text.style.transform = "scaleX(1)";
    text.style.backgroundColor = "";
  } else {
    text.style.transform = "scaleX(-1)";
    text.style.backgroundColor = "lightgreen";
  }
});
