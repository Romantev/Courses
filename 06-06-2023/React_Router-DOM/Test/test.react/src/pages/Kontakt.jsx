import Nav from "../components/Nav";

const Kontakt = (props) => {
  return (
    <>
      <Nav />
      <h1>Kontakt</h1>
      <p>{props.elm}</p>
    </>
  );
};

export default Kontakt;
