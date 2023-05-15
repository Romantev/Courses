const color = document.querySelector("#farbeAuswahlen");
const btn = document.querySelector("#button");

btn.addEventListener("click", () => {
  event.preventDefault();
  color.remove(color.selectedIndex);
});
