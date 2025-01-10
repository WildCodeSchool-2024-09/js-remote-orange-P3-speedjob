import logoblackwhite from "../../assets/images/logoblackwhite.png";
import MenuBurger from "./menuBurger";

function Header() {
  return (
    <div className="flex flex-row items-between justify-center">
      <div className="w-8 h-8">
        <img src={logoblackwhite} alt="logo" />
      </div>
      <div>
        <MenuBurger />
      </div>
    </div>
  );
}

export default Header;
