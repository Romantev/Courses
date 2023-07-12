import express from "express";
import axios from "axios";
import fs from "node:fs/promises";

import { getPosts, getPostByID } from "./postService.js";

const app = express();
const PORT = 9898;

app.use(express.json());

//* ======= Level 1 ======= //
// Erstelle einen GET  Endpunkt /status mit dem response-code: 200 der den text zurück gibt OK
app.get("/status", (req, res) => {
  res.status(200).send("OK");
});

//* ======= Level 2 ======= //
// Erstelle einen GET  Endpunkt /posts der alle posts der Placeholder API zurück gibt. (benutze fetch bei jedem request / livedaten)
//* Function mit fetch
app.get("/posts", (req, res) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => res.send(data));
});

//* function mit axios package
app.get("/posts-axios", (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((placeholderRes) => {
      console.log(placeholderRes.data);
      res.send(placeholderRes.data);
    });
});

//* function als promise mit async & await
app.get("/posts-async", async (req, res) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  res.json(data);
});

// //* ======= Level 3 ======= //
// Erstelle einen GET Endpunkt der /posts/<id> der nur den post aus mit der id <id>  zurück gibt.
app.get(`/posts/:id`, async (req, res) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${req.params.id}`
  );
  res.send(data);
});

// //* ======= Level 4 ======= //
// Ändere alle /post… Endpunkte so das die Daten nicht aus der Placeholder API kommen sondern aus einer Lokalen JSON Datei (speicher alle Todos als json). Also /post  und /post/<id> benutzen das FS module.
app.get("/posts", async (req, res) => {
  const posts = await getPosts();
  const data = await getPostByID(id);
  res.json(posts);
});

//* ======= Level 5 ======= //
// Füge folgenden Endpunkt: POST /post  hinzu, Daten die übergeben werden sollen. Verwende Postman um Post Requests zu senden. Speichere den post in der post.json
app.post("/posts", async (req, res) => {
  const dataPath = new URL("./post.json", import.meta.url);
  const postData = JSON.parse(
    await fs.readFile(dataPath, { encoding: "utf-8" })
  );
  const newId = postData.length + 1;
  const newPost = req.body;
  //* ======= Level 6 ======= //
  // Wenn der Post nicht im richtigen format ist. (titel, body etc.) soll der Request abgelehnt werden. Ids werden vom server erstellt und müssen unique sein.
  if (typeof newPost === "object" && newPost.title && newPost.body) {
    newPost.id = newId;
    newPost.userId =
      newId > 100 ? 11 : newId > 110 ? 12 : newId > 120 ? 13 : null;
    postData.push(newPost);
    const updatedData = JSON.stringify(postData, null, 2);
    await fs.writeFile(dataPath, updatedData, { encoding: "utf-8" });
    res.send(updatedData);
  } else {
    res
      .status(400)
      .send(
        `Das angegebene Request besitzt kein gültiges Format. Bitte verwende nur ein Object mit dem Properties "title" und "body" mit den gewünschten Werten!`
      );
  }
});

app.listen(PORT, () => console.log("Server is running on port " + PORT));
