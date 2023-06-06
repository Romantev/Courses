import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h2>My Life</h2>
      <div>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/blog">
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
