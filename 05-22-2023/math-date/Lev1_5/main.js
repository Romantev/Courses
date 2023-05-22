let list = [
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

const monatsName = (date) => {
  let newDate = new Date(date);
  let month = newDate.getMonth();
  return list[month];

  //* andere Schreibweise:
  //   let year = Number(date.slice(0, 4));
  //   let month = date.slice(5, 7);
  //   month = Number(month.replaceAll(",", "")) - 1;
  //   let day = date.slice(7);
  //   day = Number(day.replaceAll(",", ""));

  //   let actuallDate = new Date();
  //   actuallDate.setFullYear(year);
  //   actuallDate.setMonth(month);
  //   actuallDate.setDate(day);
  //   console.log(actuallDate.toLocaleString("dafault", { month: "long" }));
};

console.log(monatsName("2001,3,4")); //März
console.log(monatsName("2019,12,24")); //Dezember
console.log(monatsName("1410,07,15")); //Juli
