import fs from "node:fs/promises";

try {
  const filePath = new URL("./data.json", import.meta.url);
  const content = await fs.readFile(filePath, { encoding: "utf8" });

  //* ========= konventiert JSON in ein JS Object =========
  const jsonData = JSON.parse(content);

  //* ========= erstellt den Content nach der bestimmten Vorlage =========
  const formattedContent = jsonData
    .map((item) => `${item.id} - ${item.title}\n${item.description}`)
    .join("\n\n");

  //* ========= erstellt die Datei mit dem Content =========
  await fs.writeFile("./data.txt", formattedContent, { encoding: "utf-8" });
  console.log("Die Datei Hello.txt wurde erstellt");
} catch (err) {
  console.log(err.message);
}
