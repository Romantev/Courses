let monate = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

let wochenTag = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

let date1 = new Date();
console.log({ date1 });

let dateYear = new Date().getFullYear();
console.log(dateYear);

let dateMonth = new Date().getMonth();
console.log(dateMonth);

let dateDate = new Date().getDate();
console.log(dateDate + " Tag");

let dateHour = new Date().getHours();
console.log(dateHour + " Stunde");

let dateMinute = new Date().getMinutes();
console.log(dateMinute + " Minute");

let dateDay = wochenTag[new Date().getDay()];
console.log(dateDay);

let dateMonthString = monate[new Date().getMonth()];
console.log(dateMonthString);

let dateDisplayDay = new Date().toLocaleString("default", { weekday: "short" });

// * andere Methode für das selbe Ergebnis
// let dateDay = new Date().toLocaleString("default", { weekday: "long" });
// console.log(dateDay);

// let dateMonthString = new Date().toLocaleString("default", { month: "long" });
// console.log(dateMonthString);

document.querySelector(".day").innerHTML = dateDisplayDay;
document.querySelector(".hour").innerHTML = dateHour;
document.querySelector(".minute").innerHTML = dateMinute;
document.querySelector(".second").innerHTML = new Date().getSeconds();
