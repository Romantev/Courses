//! ===== Lev1_1 =====
console.log("%c Lev1_1", "color:yellow");

for (i = 0; i <= 10; i++) {
  console.log(`Hello World ${i}`);
}

//! ===== Lev1_2 =====
console.log("");
console.log("%c Lev1_2", "color:yellow");

let numArray = [];
for (i = 0; i <= 10; i++) {
  numArray.push(i);
}
console.log(numArray);

//! ===== Lev1_4 =====
console.log("");
console.log("%c Lev1_4", "color:yellow");

let names = [
  "Freddy",
  "Steffen",
  "Finn",
  "Julia",
  "Farid",
  "Christian",
  "Sergio",
];
for (let i of names) {
  console.log(i);
}

//! ===== Lev2_1 =====
console.log("");
console.log("%c Lev2_1", "color:yellow");

imagearray = () => {
  let returnArray = [];
  for (i = 1; i <= 100; i++) {
    if (i < 10) {
      returnArray.push(`image_00${i}.jpg`);
    } else if (i < 100) {
      returnArray.push(`image_0${i}.jpg`);
    } else {
      returnArray.push(`image_${i}.jpg`);
    }
  }
  console.log(returnArray);
};
imagearray();

//! ===== Lev2_2 =====
console.log("");
console.log("%c Lev2_2", "color:yellow");

loopMe1 = () => {
  const inputNum1 = document.querySelector("#input1").value;
  const output1 = document.querySelector("#output1");
  const inputArray1 = [];

  inputArray1.push("L");
  for (i = 0; i < inputNum1; i++) {
    inputArray1.push("o");
  }
  inputArray1.push("p");
  const inputArrayEdit = inputArray1.join("");
  output1.innerHTML = inputArrayEdit;
};

//! ===== Lev3_2 =====
console.log("");
console.log("%c Lev3_2", "color:yellow");

let numArr = [5, 22, 15, 100, 55];
for (i = 0; i < numArr.length; i++) {
  for (j = 2; j < numArr[i]; j++) {
    if (numArr[i] % j == 0) {
      let result = numArr[i] / j;
      document.write(
        `${numArr[i]} lässt sich durch ${j} teilen. Das Ergebnis lautet ${result}. <br>`
      );
    }
  }
}

//! ===== Lev3_3 =====
console.log("");
console.log("%c Lev3_3", "color:yellow");

loopMe2 = () => {
  const inputNum2 = document.querySelector("#input2").value;
  const output2 = document.querySelector("#output2");
  let inputArray2 = [];

  if (inputNum2 > 0 && inputNum2 % 2 == 0) {
    inputArray2.push("L");
    for (i = 0; i < inputNum2; i++) {
      inputArray2.push("o");
    }
    inputArray2.push("p");
    const outputString = inputArray2.join("");
    output2.innerHTML = outputString;
  } else if (inputNum2 % 2 != 0) {
    inputArray2.push("L");
    for (i = 0; i < inputNum2; i++) {
      i % 2 ? inputArray2.push("0") : inputArray2.push("o");
    }
    inputArray2.push("p");
    const outputString = inputArray2.join("");
    output2.innerHTML = outputString;
  } else {
    output2.innerHTML = "ERROR";
  }
};
