//! ===== Lev1_1 =====
console.log("%c Lev1_1", "color: yellow");

let getraenke = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

myDrinks = () => {
  getraenke.sort();
  getraenke.forEach((drink) => {
    console.log(drink);
    document.write(`<p>${drink}</p>`);
  });
};
myDrinks();

//! ===== Lev1_5 =====
console.log("");
console.log("%c Lev1_5", "color: yellow");

let checkNumber = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

checking = () => {
  checkNumber.map((numb) => {
    if (numb % 3 == 0) {
      numb += 100;
    }
    console.log(numb);
  });
};
checking();

//! ===== Lev1_6 =====
console.log("");
console.log("%c Lev1_6", "color: yellow");

let album = [
  "holidays.jpg",
  "Restaurant.jpg",
  "desktop",
  "rooms.GIF",
  "DOGATBEACH.jpg",
];

const albumEdit = album.map((elm) =>
  elm.indexOf(".") == -1
    ? (elm = "invalid")
    : elm.slice(0, elm.indexOf(".")).toLowerCase()
);
console.log(albumEdit);
