import { useState } from "react";
import { Link } from "react-router-dom";

const MenuBurger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setOpen(!open)}>
        Menu
      </button>
      {open && (
        <div>
          <Link to="/contact">Connexion / inscription</Link>
          <Link to="/login">Acceder aux offres</Link>
          <Link to="/blog">Acceder à nos articles</Link>
          <Link to="/AboutPage">Contactez-nous</Link>
        </div>
      )}
    </div>
  );
};
export default MenuBurger;
