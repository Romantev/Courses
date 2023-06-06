import Nav from "../components/Nav";

const About = (props) => {
  return (
    <>
      <Nav />
      <h1>About</h1>
      <p>{props.elm}</p>
    </>
  );
};

export default About;
