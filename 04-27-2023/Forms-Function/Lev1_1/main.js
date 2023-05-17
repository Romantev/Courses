function verdoppeln() {
  const output = document.querySelector(".ergebnis");

  let zahl = Number(document.querySelector(".numb").value);

  output.innerHTML = zahl * 2;
}
