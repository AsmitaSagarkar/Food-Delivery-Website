import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("Header renders");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            <Link to="/aboutUs">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              if (btnNameReact === "Login") {
                setbtnNameReact("Logout");
              } else {
                setbtnNameReact("Login");
              }
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;