import "./Home.css";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <h1>Welcome to my simple Blog</h1>
        <Link className="link-blog" to="/blog">
          Go to Blog
        </Link>
      </main>
    </>
  );
};

export default Home;
