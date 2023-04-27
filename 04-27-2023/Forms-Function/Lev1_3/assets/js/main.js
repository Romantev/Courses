function berechne() {
  const output = document.querySelector(".result");

  let name1 = document.querySelector(".name1").value;
  let name2 = document.querySelector(".name2").value;
  let zahl1 = Number(document.querySelector(".numb1").value);
  let zahl2 = Number(document.querySelector(".numb2").value);
  let diff = zahl1 - zahl2;

  output.innerHTML = name1 + " ist " + diff + " älter als " + name2 + ".";
}
