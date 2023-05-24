let outputNumb = document.querySelector("#time");
let inputVal = Number(document.querySelector("#minutes").value);
let countDown;
let secVal = 1;

function startMinCountdown() {
  inputVal = Number(document.querySelector("#minutes").value);
  countDown = setInterval(() => {
    secVal--;
    if (secVal < 0) {
      secVal = 59;
      inputVal--;
    }
    let sec = secVal < 10 ? "0" + secVal : secVal;
    outputNumb.innerHTML = `${inputVal}:${sec}`;
    if (inputVal === 0 && secVal == 0) {
      clearTimeout(countDown);
    }
  }, 1000);
}

function pauseMinCountdown() {
  clearTimeout(countDown);
}

function restartMinCountdown() {
  countDown = setInterval(() => {
    secVal--;
    if (secVal < 0) {
      secVal = 59;
      inputVal--;
    }
    let sec = secVal < 10 ? "0" + secVal : secVal;
    outputNumb.innerHTML = `${inputVal}:${sec}`;
    if (inputVal === 0 && secVal == 0) {
      clearTimeout(countDown);
    }
  }, 1000);
}

function resetMe() {
  outputNumb.innerHTML = "00:00";
  inputVal = 0;
  secVal = 1;
  clearTimeout(countDown);
}
