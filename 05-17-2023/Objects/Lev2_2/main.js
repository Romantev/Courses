let edelMetallPreise = [
  { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
  { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
  { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
  { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
  { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
  { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
  { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
  { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
  { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" },
];

const newArrayName = [];
edelMetallPreise.forEach((elm) => {
  return newArrayName.push(elm.name);
});
console.log(newArrayName);

edelMetallPreise.map((elm) => {
  console.log(elm.name);
});

let newArrayPreise = [];
edelMetallPreise.forEach((elm) => {
  return newArrayPreise.push(elm.preiseGramEuro);
});
console.log(newArrayPreise);

edelMetallPreise.map((elm) => {
  console.log(elm.preiseGramEuro);
});

const newArrayVeraenderung = [];
edelMetallPreise.forEach((elm) => {
  return newArrayVeraenderung.push(elm.veraenderung);
});
console.log(newArrayVeraenderung);

edelMetallPreise.map((elm) => {
  console.log(elm.veraenderung);
});

const priceOver50 = newArrayPreise.filter(checkPrice);
function checkPrice(price) {
  return price > 50;
}
console.log(priceOver50);

const createTable = () => {
  let table = document.createElement("table");
  let content = `<tr><th>${Object.keys(edelMetallPreise[0])[0]}</th><th>${
    Object.keys(edelMetallPreise[0])[1]
  }</th><th>${Object.keys(edelMetallPreise[0])[2]}</th></tr>`;

  for (var i = 0; i < edelMetallPreise.length; i++) {
    content += `<tr><td>${edelMetallPreise[i].name}</td><td>${edelMetallPreise[i].preiseGramEuro}</td><td>${edelMetallPreise[i].veraenderung}</td></tr>`;
  }
  table.innerHTML = content;

  document.body.appendChild(table);
};
createTable();
