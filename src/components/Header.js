import { useContext, useState } from "react";
import resLogo from "../images/resLogo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("Header renders");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="header flex bg-white justify-between shadow-lg ">
      <div className="logo-container ">
        <img className="w-48 h-24 object-cover" src={resLogo} />
      </div>
      <div className="flex items-center ">
        <ul className="flex justify-between">
          <li className="px-4 font-serif text-lg text-light-gray">
            {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4 font-serif text-lg text-light-gray hover:text-pink-tone">
            <Link to="/">Home</Link>{" "}
          </li>
          <li className="px-4 font-serif text-lg text-light-gray hover:text-pink-tone">
            <Link to="/aboutUs">About</Link>
          </li>
          <li className="px-4 font-serif text-lg text-light-gray hover:text-pink-tone">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-serif text-lg text-light-gray hover:text-pink-tone">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-serif text-lg text-light-gray hover:text-pink-tone">
            Cart
          </li>
          <li className="px-4 font-serif text-lg text-light-gray hover:text-pink-tone">
            {loggedInUser}
          </li>
          <button
            className="login px-4 pr-8 font-serif text-lg text-light-gray hover:text-pink-tone"
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
