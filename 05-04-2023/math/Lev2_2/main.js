const game = () => {
  const randomNumb = Math.floor(Math.random() * 10 + 1);
  const userNumb = Number(prompt("Gib hier eine Zahl zwischewn 1 und 10 ein"));

  if (randomNumb === userNumb) {
    console.log("Du hast richtig geraten!");
  } else {
    console.log("Falsch, versuche es nochmal!");
  }
  console.log(randomNumb);
  console.log(userNumb);
};

game();
