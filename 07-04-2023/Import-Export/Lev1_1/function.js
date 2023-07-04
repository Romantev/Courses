import { dataNumber } from "./data.js";
import { dataCars } from "./data.js";

export const sortFunctionNumber = () => {
  console.log(dataNumber().sort());
};

export const sortFunctionCars = () => {
  console.log(dataCars().sort());
};
