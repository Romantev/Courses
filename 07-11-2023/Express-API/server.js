import express from "express";
import fs from "fs";

const app = express();
const PORT = 9898;

// Level 1
app.get("/status", (req, res) => {
  res.send("OK");
});

// Level 2
app.get("/posts", (req, res) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data) => res.send(res.json(data)))
    .catch((err) => console.log("Fehler: ", err));
});

// Level 3
function postID(id) {
  app.get(`/posts/${id}`, (req, res) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((data) => res.send(res.json(data)))
      .catch((err) => console.log("Fehler: ", err));
  });
}
postID(1);

// Level 4
function putPostID(id) {
  app.put(`/posts/${id}`, (req, res) => {
    const filePath = new URL("/data.json", import.meta.url);
    const readData = fs.readFileSync(filePath, { encoding: "utf8" });
    console.log(readData);
    const convertedData = JSON.parse(readData);
    res.send(convertedData);
  });
}
putPostID(1);

// Level 5
function postPostID(input) {
  const filePath = new URL("/post.json", import.meta.url);
  fs.appendFileSync(filePath, input, { encoding: "utf-8" });

  app.post("/post", (req, res) => {
    const content = req.body;
    res.send(content);
  });
}
postPostID(content);

// Level 6
let id = 0;
function getID(elm) {
  id += 1;
  elm.id = id;
}
app.post("/post", (req, res) => {});

app.listen(PORT, () => console.log("Server ist online beim Port " + PORT));
