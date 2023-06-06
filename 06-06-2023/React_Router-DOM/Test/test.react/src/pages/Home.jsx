import Nav from "../components/Nav";

const Home = (props) => {
  return (
    <>
      <Nav />
      <h1>Home</h1>
      <p>{props.elm}</p>
    </>
  );
};

export default Home;
