function alter() {
  const jahrealt = document.querySelector(".alter");

  let zahl = Number(document.querySelector(".numb").value);
  let actualDate = new Date().getFullYear();

  jahrealt.innerHTML = actualDate - zahl;
}
