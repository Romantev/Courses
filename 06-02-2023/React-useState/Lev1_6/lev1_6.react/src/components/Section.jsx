import { useState } from "react";

const Section = () => {
  const [name, setName] = useState("");
  const [nachname, setNachname] = useState("");
  const [email, setEmail] = useState("");

  return (
    <main>
      <section>
        <div>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <input
            onChange={(e) => setNachname(e.target.value)}
            type="text"
            placeholder="Nachname"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
        </div>
        <p>Vorname: {name}</p>
        <p>Nachname: {nachname}</p>
        <p>Email: {email}</p>
      </section>
    </main>
  );
};

export default Section;
