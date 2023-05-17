const btn = document.querySelector("#enter");
const output = document.querySelector("ul");

btn.addEventListener("click", () => {
  const input = document.querySelector("#userinput").value;
  let newItem = document.createElement("li");
  newItem.textContent = input;
  output.appendChild(newItem);
  document.querySelector("#userinput").value = "";
});

btn.addEventListener("keyup", (e) => {
  if (e.key === 13) {
    console.log("Enter pressed");
    const input = document.querySelector("#userinput").value;
    let newItem = document.createElement("li");
    newItem.textContent = input;
    output.appendChild(newItem);
    document.querySelector("#userinput").value = "";
  }
});
