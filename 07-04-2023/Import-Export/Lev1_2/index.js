import { names, numbers } from "./data.js";

import {
  firstOutput,
  secondOutput,
  thirdOutput,
  fourthOutput,
  fithOutput,
  sixthOutput,
  seventhOutput,
  randomNumber,
  firstLetter,
  allLetter,
  checkPara,
} from "./function.js";

firstOutput(names());
firstOutput(numbers());
secondOutput(names());
secondOutput(numbers());
thirdOutput(names());
thirdOutput(numbers());
fourthOutput(names());
fourthOutput(numbers());
fithOutput();
sixthOutput(numbers());
seventhOutput(numbers());
randomNumber(3, 33);
firstLetter("hello");
allLetter("hello");
checkPara("hello", "l");
