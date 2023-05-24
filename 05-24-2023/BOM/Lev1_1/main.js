// const zeigMirWas = () => {
//   console.log("Hier bin ich!");
// };
// setTimeout(zeigMirWas, 2000);

let numb = 10;
const countDown = setInterval(() => {
  console.log(numb);
  numb--;
  if (numb === -1) {
    console.log("Endlich Feierabend!");
    clearInterval(countDown);
  }
}, 1000);
