import express from "express";
import fs from "fs";

const app = express();
const PORT = 9898;

const contactsPath = new URL("./contacts.json", import.meta.url);
const contacts = fs.readFileSync(contactsPath, { encoding: "utf-8" });
const formatedContacts = JSON.parse(contacts);

app.use(express.json());

// Stufe 2 / 1
app.get("/contacts", (req, res) => {
  res.send(formatedContacts);
});

// Stufe 2 / 2
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

// Stufe 2 / 3
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

// Stufe 2 / 4
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

// Stufe 2 / 5

app.listen(PORT, () => console.log("Server ist online auf dem PORT ", PORT));
