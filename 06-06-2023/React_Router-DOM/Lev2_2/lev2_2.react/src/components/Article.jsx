import { Link } from "react-router-dom";
import "./Article.css";

const Article = (props) => {
  return (
    <article>
      <img src={props.item.img_url} alt={props.item.title} />
      <h2>{props.item.title}</h2>
      <Link className="article-link" to={"/details/" + props.item.id}>
        Read more
      </Link>
    </article>
  );
};

export default Article;
