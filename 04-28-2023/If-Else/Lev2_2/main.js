const output1 = document.querySelector(".output1");
const output2 = document.querySelector(".output2");
const outputVal = document.querySelector(".outputVal");
const changeColor = document.querySelector("main");

function changeVal() {
  let weatherVal = document.querySelector("#range").value;

  if (weatherVal <= 50) {
    output1.innerHTML = "Good";
    output2.innerHTML = "Little or no risk";
    outputVal.innerHTML = weatherVal;
    changeColor.style.backgroundColor = "green";
  } else if (weatherVal > 50 && weatherVal <= 100) {
    output1.innerHTML = "Morderate";
    output2.innerHTML = "Acceptable quality";
    outputVal.innerHTML = weatherVal;
    changeColor.style.backgroundColor = "yellow";
  } else {
    output1.innerHTML = "Unhealthy for sensitive groups";
    output2.innerHTML = "Generable publics not likely affected";
    outputVal.innerHTML = weatherVal;
    changeColor.style.backgroundColor = "red";
  }
}
