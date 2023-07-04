import { data } from "./data.js";

export const moreThan = () => {
  const newArray = data().filter((elm) => {
    return elm.population > 100000;
  });
  console.log(newArray);
};

export const lessThan = () => {
  const newArray = data().filter((elm) => {
    return elm.population < 100000;
  });
  console.log(newArray);
};
