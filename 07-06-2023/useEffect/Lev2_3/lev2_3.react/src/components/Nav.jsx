import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h1>Super Carlist</h1>
      <Link className="link-home" to="/">
        {" "}
        Home{" "}
      </Link>
    </nav>
  );
};

export default Nav;
