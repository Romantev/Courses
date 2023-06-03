import { useState } from "react";
import "./DayNightSection.css";

const DayNightSection = () => {
  const [title, setTitle] = useState("Tag");
  const [background, setBackground] = useState("lightblue");
  const [color, setColor] = useState("black");

  function changeBg() {
    setTitle((prevTitle) => (prevTitle === "Tag" ? "Nacht" : "Tag"));
    setBackground((prevBackground) =>
      prevBackground === "lightblue" ? "darkblue" : "lightblue"
    );
    setColor((prevColor) => (prevColor === "black" ? "white" : "black"));
  }

  return (
    <main style={{ backgroundColor: background }}>
      <section>
        <h1 style={{ color: color }}>Es ist {title}!</h1>
        <button onClick={changeBg}>Wechsel zu </button>
      </section>
    </main>
  );
};

export default DayNightSection;
