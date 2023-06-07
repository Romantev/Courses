import "./Home.css";
import Nav from "../components/Nav";
import Cars from "../data/cars.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Nav />
      <main>
        {Cars.map((elm, index) => (
          <div key={index}>
            <h2>{elm.CarMake}</h2>
            <Link to={`/details/${elm.id}`}>Read more</Link>
          </div>
        ))}
      </main>
    </>
  );
};

export default Home;
