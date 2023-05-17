//! ====== Lev1_1 ======
console.log("%c Lev1_1", "color: yellow;");
let languages = [
  "JavaScript",
  "Python",
  "Java",
  "Ruby",
  "PHP",
  "C++",
  "CSS",
  "C#",
  "Go",
  "C",
  "TypeScript",
  "Swift",
];

sortierung = () => {
  languages.sort();
};
sortierung();
console.log(languages);

//! ===== Lev1_2 ======
console.log("");
console.log("%c Lev1_2", "color: yellow;");

sortierung2 = () => {
  languages.sort();
  languages.reverse();
};
sortierung2();
console.log(languages);

//! ====== Lev1_3 ======
console.log("");
console.log("%c Lev1_3", "color: yellow;");

var numArray1 = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];
numArray1.sort((a, b) => a - b);
console.log(numArray1);

//! ====== Lev2_2 ======
console.log("");
console.log("%c Lev2_2", "color: yellow;");

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];
numArray2.sort((a, b) => a - b);
console.log(numArray2);
