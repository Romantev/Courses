function calcValue() {
  const numb = document.querySelector("#number").value;
  let resultNumb = Number(numb - 27);

  if (resultNumb >= 27) {
    console.log("Multiplicator", resultNumb * 2);
  }
}
