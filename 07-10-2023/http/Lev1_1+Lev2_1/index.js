import http from "http";
import fs from "fs";

const requestHandler = (req, res) => {
  // wenn der pfad "/" dann gib index.html aus
  if (req.url === "/") {
    sendFile("./index.html", res);

    // wenn der pfad nicht "/", dann gib dementsprechend die Datei aus
  } else {
    sendFile("." + req.url, res);
  }
};

const sendFile = (path, res) => {
  // die Datei wird gelesen nach utf-8
  fs.readFile(path, "utf-8", (err, data) => {
    // wenn es einen Error gibt, gebe den StatusCode 500 zurück
    if (err) {
      res.writeHead(500);
      res.end();
      return;
    }
    // die Datei wird geschrieben und zurückgegeben
    res.write(data);
    res.end();
  });
};

// es wird ein server erstellt, wo die function ausgeführt wird
const server = http.createServer(requestHandler);

// der server wird gestartet und ein port wird erstellt
server.listen(1234, () => console.log("Server ist online"));
