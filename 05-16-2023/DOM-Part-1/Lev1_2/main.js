const myFunction = () => {
  const example = document.getElementsByClassName("example");
  for (let i of example) {
    if (i.style.backgroundColor == "black") {
      i.style.backgroundColor = "";
    } else {
      i.style.backgroundColor = "black";
    }
  }
};
