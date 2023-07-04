export const firstOutput = (array) => {
  const firstElm = array[0];
  console.log(firstElm);
};

export const secondOutput = (array) => {
  const newArray = array;
  newArray.pop();
  console.log(newArray);
};

export const thirdOutput = (array) => {
  console.log(array.pop());
};

export const fourthOutput = (array) => {
  const newArray = array;
  newArray.splice(0, 1);
  console.log(newArray);
};

export const fithOutput = () => {
  const input = ["remove", "stay", "stay5", 22, true, "remove"];
  const output = input.filter((elm) => elm !== "remove");
  console.log(output);
};

export const sixthOutput = (array) => {
  let output = [...new Set(array)];
  console.log(output);
};

export const seventhOutput = (array) => {
  let summe = 0;
  array.map((elm) => {
    summe += elm;
  });
  console.log(summe);
};

export const randomNumber = (number1, number2) => {
  console.log(Math.floor(Math.random() * number1) + number2);
};

export const firstLetter = (word) => {
  console.log(word.charAt().toUpperCase() + word.slice(1, undefined));
};

export const allLetter = (word) => {
  console.log(word.toUpperCase());
};

export const checkPara = (word, char) => {
  console.log(word.toLowerCase().charAt(word.length).includes(char));
};
