import "./ItemList.css";

const ItemList = (props) => {
  return (
    <div>
      <img src={props.article.bild} alt={props.article.name} />
      <h2>{props.article.name}</h2>
      <h3>{props.article.preis}$</h3>
      <button>BUY NOW</button>
    </div>
  );
};

export default ItemList;
