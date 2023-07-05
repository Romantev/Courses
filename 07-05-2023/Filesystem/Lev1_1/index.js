import fs from "node:fs/promises";

//* liest die Datei "block1.txt" und ändert den Inhalt von dieser
const filePath = new URL("./block1.txt", import.meta.url);
let contents = await fs.readFile(filePath, { encoding: "utf8" });
contents = "Ich bin ein Webdeveloper";

try {
  //* URL Object
  const projectFolder = new URL("./assets", import.meta.url);
  //* URl Path
  const projectFolderPath = projectFolder.pathname;
  console.log("projectFolder: ", projectFolder);
  console.log("projectFolderPath: ", projectFolderPath);

  try {
    //* prüft ob es den "assets" Ordner existiert
    await fs.access(projectFolderPath);

    //* wenn ja, dann lösche diesen
    await fs.rmdir(projectFolderPath);
    console.log("Der assets-Ordner wurde gelöscht.");
  } catch (err) {
    //* wenn nein, dann erstelle diesen
    await fs.mkdir(projectFolder, { recursive: true });
    console.log(`Der assets-Ordner wurde erstellt.`);
  }
} catch (err) {
  console.error(err.message);
}

try {
  const projectFile = new URL("./delete.txt", import.meta.url);
  const projectFilePath = projectFile.pathname;

  try {
    //* prüft ob es die "delete.txt" Datei existiert,
    await fs.access(projectFilePath);
    //* wenn ja, dann lösche diese
    await fs.rm(projectFilePath);
    console.log("Die delete.txt Datei wurde gelöscht");
  } catch (err) {
    //* wenn nein, dann erstelle diese
    await fs.appendFile(projectFilePath, "");
    console.log("Die delete.txt Datei wurde erstellt");
  }
} catch (err) {
  console.log(err.message);
}

//* erstellt die Datei "Hello.txt" mit content
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
