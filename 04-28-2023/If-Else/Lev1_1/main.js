function checkAge() {
  const output = document.querySelector(".result");
  const age = document.querySelector("#age").value;

  if (age >= 18) {
    output.innerHTML = "Du darfst passieren!";
  } else {
    output.innerHTML = "Du kommst hier nicht vorbei!";
  }
}
