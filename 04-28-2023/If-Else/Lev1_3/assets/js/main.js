function greaterThan() {
    const output = document.querySelector("p")

    if (document.getElementById(‘input’).value >= 18) {
        output.innerHTML = "Du kannst Shisha rauchen!";
      } else {
        output.innerHTML = "Du darfst noch nicht Shisha rauchen!";
      }
}
