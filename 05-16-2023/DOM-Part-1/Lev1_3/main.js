const btn = document.querySelectorAll("button");
const output = document.querySelector("output");
const list = document.querySelector("ul");

btn.forEach((elm) => {
  elm.addEventListener("click", () => {
    if (elm.textContent === "# firstElementChild") {
      output.innerHTML = list.firstElementChild.textContent;
    } else if (elm.textContent === "# lastElementChild") {
      output.innerHTML = list.lastElementChild.textContent;
    } else if (elm.textContent === "# firstElementChild nextElementSibling") {
      output.innerHTML = list.firstElementChild.nextElementSibling.textContent;
    } else if (
      elm.textContent === "# lastElementChild previousElementSibling"
    ) {
      output.innerHTML =
        list.lastElementChild.previousElementSibling.textContent;
    }
  });
});

// btn.forEach((elm) => {
//   elm.addEventListener("click", () => {
//     const position1 = elm.textContent.slice(2, 19);
//     console.log(position1);
//     output.innerHTML = list[position1].textContent;

//     if (elm.textContent.length > 20) {
//       const position2 = elm.textContent.slice(20);
//       console.log(position2);
//       const newList2 = list[position1][position2].textContent;
//       console.log(newList2);
//       output.innerHTML = newList2;
//     }
//   });
// });
