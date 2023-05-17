function checkWeather() {
  const output = document.querySelector(".result");
  const weatherValue = document.querySelector("#weather").value;

  if (weatherValue >= 8) {
    output.innerHTML = "super";
  } else if (weatherValue == 6 && weatherValue == 7) {
    output.innerHTML = "gut";
  } else if (weatherValue >= 3 && weatherValue <= 5) {
    output.innerHTML = "okay";
  } else {
    weatherValue >= 0 && weatherValue <= 2;
    output.innerHTML = "schlecht";
  }
}
