import Nav from "../components/Nav";
import { useParams } from "react-router-dom";
import Data from "../components/Data";

const Details = () => {
  const params = useParams();
  const pizza = params.pizza;

  return (
    <>
      <Nav />
      <section>
        <img src={Data[pizza].img_url} alt={Data[pizza].title} />
        <h1>{Data[pizza].title}</h1>
      </section>
    </>
  );
};

export default Details;
