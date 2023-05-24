let numb = 100;
document.querySelector("#btn").addEventListener("click", () => {
  const countDown = setInterval(() => {
    numb--;
    document.querySelector(".zeit").innerHTML = `${numb}%`;
    if (numb === 0) {
      clearInterval(countDown);
      document.querySelector(".zeit").innerHTML = "0%";
    }
  }, 100);
});
