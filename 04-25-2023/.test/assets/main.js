// let num1 = 1
// num1++
// console.log(num1);

// const firstName = "<h1 style='display: inline;'>Roman</h1>"
// const lastName = " <h1 style='display: inline;'>Parfentev</h1>"
// let fullName = firstName + " " + lastName;
// let name = "<div style='width: 50px; height: 50px; border: 1px black solid; margin-bottom: 100px;'></div>" + fullName

// let email = "<input style='width: 50vw; height: 50vh;' placeholder='Hier kommt dein Name'></input>"
// console.log(email);

// document.write(
//     "<div style='margin-bottom: 10vw;'></div>" + 
//     name  + "<br>" + 
//     email
// )


// let firstName = window.prompt("Trage hier deinen Namen ein");
// let action = window.prompt("Welche Sportart würdest du auf keinen Fall ausüben");
// let food = window.prompt("Was hast du gestern gegessen?")

// document.write(
//     firstName + " hat gestern abend nach einer langen coding Session " + 
//     action + " betrieben. Leider war es zu intensiv und das leckere " +
//     food + " kam heute morgen leider wieder hoch."
// )

// let text = "<p>Hallo du da</p>";

// document.write(text);

// let x = "Klaus";
// x **= 3;
// console.log(x);

let firstName = window.prompt("Gebe hier deinen Vornamen ein!");
let lastName = window.prompt("Und hier deinen Nachnamen!");
let fullName = firstName + " " + lastName;
document.getElementById("name").innerText = fullName;