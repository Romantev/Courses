const roundTo = (Zahl, Genauigkeit) => {
  return Zahl.toFixed(Genauigkeit);
};
console.log(roundTo(3.1415926535, 5));
