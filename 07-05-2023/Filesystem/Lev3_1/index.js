import fs from "node:fs";

if (fs.existsSync("./assets")) {
  console.log("assets Ordner exisitiert bereits");
} else {
  console.log("assets Ordner exisitiert nicht");

  //* ========= erstellt neuen Ordner =========
  fs.mkdirSync("./assets");
  console.log("assets Ordner wurde erstellt");
}

function functionMe(content) {
  if (fs.existsSync("./assets/text.txt")) {
    console.log("text.txt Datei exisitiert bereits");

    //* ========= fügt der vorhandenen Datei den neuen Inhalt hinzu =========
    fs.appendFileSync("./assets/text.txt", `\n${content}`);
    console.log("text.txt Datei wurde mit dem neuem content bearbeitet");
  } else {
    console.log("text.txt Datei exisitiert nicht");

    //* ========= rstellt die neue Datei mit dem Inhalt =========
    fs.writeFileSync("./assets/text.txt", content);
    console.log("text.txt Datei wurde mit dem content erstellt");
  }
}

functionMe("Neue Zeile");

// async function addText(content) {
//   try {
//     //* erstellt neuen Ordner
//     const projectFolder = new URL("./assets", import.meta.url);
//     await fs.mkdir(projectFolder, { recursive: true });
//     console.log("Der Ordner assets wurde angelegt");

//     //* prüft, ob Datei bereits vorhanden ist
//     const projectFile = new URL("./assets/text.txt", import.meta.url).pathname;
//     const fileExists = await fs.access(projectFile).then(
//       () => true,
//       () => false
//     );

//     if (fileExists) {
//       //* liest den vorhandenen Inhalt der Datei
//       const existingContent = await fs.readFile(projectFile, {
//         encoding: "utf8",
//       });

//       //* fügt den neuen Inhalt zum vorhandenen Inhalt hinzu
//       const newContent = `${existingContent}\n${content}`;
//       await fs.writeFile(projectFile, newContent, { encoding: "utf8" });

//       console.log(`Der Datei wurde die Zeile "${content}" hinzugefügt`);
//     } else {
//       //* erstellt neue Datei mit dem Inhalt
//       await fs.writeFile(projectFile, content, { encoding: "utf8" });
//       console.log("Die Datei text.txt wurde angelegt");
//     }
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// const newContent = "Das hier ist die Test-Zeile";
// addText(newContent);
