import "./Details.css";
import Nav from "../components/Nav";
import { useParams } from "react-router-dom";
import Data from "../components/Data";

const Details = () => {
  const params = useParams();
  const burger = params.pizza;

  return (
    <>
      <Nav />
      <section>
        <img src={Data[burger].img_url} alt={Data[burger].title} />
        <h1>{Data[burger].title}</h1>
      </section>
    </>
  );
};

export default Details;
