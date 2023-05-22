const aktuellesDatum = () => {
  const output = document.querySelector(".output");
  let date = new Date();

  output.innerHTML = date.getDate() + " / ";
  output.innerHTML += date.getMonth() + " / ";
  output.innerHTML += date.getFullYear();
};

aktuellesDatum();
