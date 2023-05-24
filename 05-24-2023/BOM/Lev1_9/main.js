const startTime = () => {
  let date = new Date();
  let dateStd = date.getHours();
  let dateMin = date.getMinutes();
  let dateSec = date.getSeconds();
  let dateheute = date.toLocaleDateString();

  document.querySelector(
    "#txt"
  ).innerHTML = `<h1>${dateStd} : ${dateMin} : ${dateSec}</h1>
                                                <h2>${dateheute}</h2>`;
};

setInterval(startTime, 1000);
