//* Lev1_1
let person = ["Gustav", "Barsik", "Sturkopf"];
let friends = ["Chakalaka", "Siegfried", "Frikadella"];
let favoriteFood = ["Dönerteller scharf!", "Tomatensuppe", "Curry-Eis"];

console.log({ friends });
console.log({ favoriteFood });

let unshiftFriendsFirstVal = friends.unshift("Karamella");
console.log(unshiftFriendsFirstVal);
console.log({ friends });

let unshiftFavoriteFoodFirstVal = favoriteFood.unshift(
  "Pizza Hawaii ohne Ananas"
);
console.log(unshiftFavoriteFoodFirstVal);
console.log({ favoriteFood });
