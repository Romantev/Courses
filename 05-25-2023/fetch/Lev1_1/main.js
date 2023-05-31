// ! per Dateipfad
fetch("./fakeData.json")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Fehler", error));

//! per URL
fetch("https://picsum.photos/v2/list")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Fehler", error));
