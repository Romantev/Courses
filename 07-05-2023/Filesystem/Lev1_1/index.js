import { log } from "node:console";
import fs from "node:fs/promises";

//* Lese die Datei "block1.txt" und ändere den Inhalt von dieser
const filePath = new URL("./block1.txt", import.meta.url);
let contents = await fs.readFile(filePath, { encoding: "utf8" });
contents = "Ich bin ein Webdeveloper";

//* Prüfen ob es den "assets" Ordner existiert,
//* wenn ja, dann lösche diesen
//* wenn nein, dann erstelle diesen
try {
  const projectFolder = new URL("./assets", import.meta.url);
  const projectFolderPath = projectFolder.pathname;

  try {
    await fs.access(projectFolderPath);
    await fs.rmdir(projectFolderPath);
    console.log("Der assets-Ordner wurde gelöscht.");
  } catch (err) {
    await fs.mkdir(projectFolder, { recursive: true });
    console.log(`Der assets-Ordner wurde erstellt.`);
  }
} catch (err) {
  console.error(err.message);
}

//* Prüfen ob es die "delete.txt" Datei existiert,
//* wenn ja, dann lösche diese
//* wenn nein, dann erstelle diese
try {
  const projectFile = new URL("./delete.txt", import.meta.url);
  const projectFilePath = projectFile.pathname;

  try {
    await fs.access(projectFilePath);
    await fs.rm(projectFilePath);
    console.log("Die delete.txt Datei wurde gelöscht");
  } catch (err) {
    await fs.appendFile(projectFilePath, "");
    console.log("Die delete.txt Datei wurde erstellt");
  }
} catch (err) {
  console.log(err.message);
}

//* Erstelle die Datei "Hello.txt" und gib ihr einen beliebigen content
try {
  const projectFileHello = new URL("./Hello.txt", import.meta.url);
  try {
    await fs.appendFile(projectFileHello, "Ich wurde gerade eben erstellt");
    console.log("Die Dateil Hello.txt wurde erstellt");
    await fs.rename(projectFileHello, "./HelloWorld.txt");
  } catch (err) {
    console.log(err.message);
  }
} catch (err) {
  console.log(err.message);
}
