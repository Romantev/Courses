import fs from "node:fs/promises";

try {
  const filePath = new URL("./data.json", import.meta.url);
  const content = await fs.readFile(filePath, { encoding: "utf8" });

  const jsonData = JSON.parse(content);

  const formattedContent = jsonData
    .map((item) => `${item.id} - ${item.title}\n${item.description}`)
    .join("\n\n");

  await fs.writeFile("./data.txt", formattedContent, { encoding: "utf-8" });
  console.log("Die Dateil Hello.txt wurde erstellt");
} catch (err) {
  console.log(err.message);
}
