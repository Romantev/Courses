const btn = document.querySelector("#navChange");

btn.addEventListener("click", () => {
  const li = document.getElementsByTagName("li");
  if (li[0].style.backgroundColor == "#f6c89f") {
    li[0].style.backgroundColor = "";
    li[1].style.backgroundColor = "";
    li[2].style.backgroundColor = "";
    li[3].style.backgroundColor = "";
  } else {
    li[0].style.backgroundColor = "#f6c89f";
    li[1].style.backgroundColor = "#ffe7d1";
    li[2].style.backgroundColor = "#4b8e8d";
    li[3].style.backgroundColor = "#396362";
  }
});
