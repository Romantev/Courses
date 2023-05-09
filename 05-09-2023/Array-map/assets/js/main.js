//! ===== Lev1_2 =====
console.log("%c Lev1_2", "color: yellow");

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

drinks = () => {
  let upperDrinks = getraenke.map((drink) => drink.toUpperCase());
  console.log(upperDrinks);
};
drinks();

//! ===== Lev1_3 =====
console.log("");
console.log("%c Lev1_3", "color: yellow");

let array = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

multiply = () => {
  array.sort((a, b) => a - b);
  let array2 = array.map((numb) => numb * 2);
  console.log(array2);
};

multiply();

//! ===== Lev1_4 =====
console.log("");
console.log("%c Lev1_4", "color: yellow");

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

umrechnen = () => {
  let celsius = fahrenheit.map((elm) => {
    return Math.round((elm - 32) / 1.8);
  });
  console.log(celsius);
};

umrechnen();
