import { useParams } from "react-router-dom";
import Data from "../data/cars.json";

const Cars = () => {
  const idParam = useParams();

  const detailCar = Data.filter((elm) => {
    return elm.id.toString() === idParam.id;
  });

  console.log(detailCar);
  return (
    <section>
      <h1>{detailCar[0].CarMake}</h1>
      <h2>{detailCar[0].carModel}</h2>
      <h3>{detailCar[0].CarYear}</h3>
    </section>
  );
};

export default Cars;
