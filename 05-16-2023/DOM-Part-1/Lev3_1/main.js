const changeBackground = (color) => {
  document.body.style.backgroundColor = color;
};

const changeHandle = () => {
  let red = document.querySelector("#rot").value;
  let green = document.querySelector("#grun").value;
  let blue = document.querySelector("#blau").value;
  let colorRgb = "rgb(" + red + ", " + green + ", " + blue + ")";
  document.body.style.backgroundColor = colorRgb;
};
