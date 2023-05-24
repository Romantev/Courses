const countDown = () => {
  let numb = 10;
  setInterval(() => {
    numb--;
    document.querySelector("#count").innerHTML = numb;
    if (numb === 0) {
      document.querySelector(".message").style.opacity = 0;
    }
  }, 1000);
};

countDown();
