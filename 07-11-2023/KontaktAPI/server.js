import express from "express";
import fs, { writeFile } from "fs";

const app = express();
const PORT = 9898;

const contactsPath = new URL("./contacts.json", import.meta.url);
const contacts = fs.readFileSync(contactsPath, { encoding: "utf-8" });
const formatedContacts = JSON.parse(contacts);

app.use(express.json());

//* ========= Stufe 2 / 1 ========= //
// GET /contacts: Rufe alle Kontakte ab und gib sie als JSON-Antwort zurück.
app.get("/contacts", (req, res) => {
  res.send(formatedContacts);
});

//* ========= Stufe 2 / 2 ========= //
// GET /contacts/:id: Rufe einen bestimmten Kontakt anhand seiner ID ab und gib ihn als JSON-Antwort zurück.
function getContactsID(id) {
  app.get(`/contacts/:id`, (req, res) => {
    formatedContacts.map((elm) => {
      if (elm.id === id) {
        return res.send(elm);
      }
    });
  });
}
getContactsID(1);

//* ========= Stufe 2 / 3 ========= //
// POST /contacts: Erstelle einen neuen Kontakt anhand der übergebenen Daten im Anfragekörper und gib den neu erstellten Kontakt als JSON-Antwort zurück.
let id = 1;
function getID() {
  for (let i = 0; i < formatedContacts.length; i++) {
    if (id === formatedContacts[i].id) {
      id += 1;
      return getID();
    }
  }
  return id;
}

app.post("/contacts", (req, res) => {
  const { name, alter } = req.body;
  const newContact = { id: getID(), name: name, alter: alter };
  res.send(newContact);
});

//* ========= Stufe 2 / 4 ========= //
// PUT /contacts/:id: Aktualisiere einen bestimmten Kontakt anhand seiner ID und der übergebenen Daten im Anfragekörper. Gib den aktualisierten Kontakt als JSON-Antwort zurück.
app.put("/contacts", (req, res) => {
  const { id, name, alter } = req.body;
  const updatedContact = formatedContacts.find((elm) => elm.id === id);
  if (updatedContact) {
    updatedContact.name = name;
    updatedContact.alter = alter;
    res.send(updatedContact);
  } else {
    res.status(404).send("Kontakt nicht gefunden");
  }
});

//* ========= Stufe 2 / 5 ========= //
// DELETE /contacts/:id: Lösche einen bestimmten Kontakt anhand seiner ID und gib eine JSON-Antwort zurück, die den Erfolg der Operation angibt.
app.delete("/contacts/", async (req, res) => {
  const reqDeleteId = req.body;

  const findContact = formatedContacts.findIndex(
    (contact) => reqDeleteId.id === contact.id
  );
  if (findContact !== -1) {
    res.send("Kontakt wurde gefunden und gelöscht");
    formatedContacts.splice(findContact, 1);
    const updatedContacts = JSON.stringify(formatedContacts, null, 2);
    console.log(updatedContacts);
    fs.writeFile(contactsPath, updatedContacts, { encoding: "utf-8" });
  } else {
    res.send("Kontakt wurde nicht gefunden");
  }
});

app.listen(PORT, () => console.log("Server ist online auf dem PORT ", PORT));
