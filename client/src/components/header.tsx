import { Link } from "react-router-dom";
import logocolor from "../assets/images/logocolor.png";
function Header() {
  return (
    <div className="flex flex-row items-between justify-center">
      <div className="w-40 h-40 scale-50">
        <img src={logocolor} alt="logo" />
      </div>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
      <Link to="/legal">Legal</Link>
      <Link to="/signin">Sign In</Link>
    </div>
  );
}

export default Header;
