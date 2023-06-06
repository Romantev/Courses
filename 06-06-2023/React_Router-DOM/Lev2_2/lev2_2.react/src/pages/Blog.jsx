import "./Blog.css";
import Nav from "../components/Nav";
import Data from "../components/Data";
import Article from "../components/Article";

const Blog = () => {
  return (
    <>
      <Nav />
      <section>
        {Data.map((elm, index) => (
          <Article item={elm} key={index} />
        ))}
      </section>
    </>
  );
};

export default Blog;
