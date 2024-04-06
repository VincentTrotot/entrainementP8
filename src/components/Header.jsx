import logoKyra from "/images/LogoKyra.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <img src={logoKyra} alt="Logo Kyra" />
      <nav>
        <ul>
          <NavLink to="/" className={({isActive}) => (isActive ? "underline" : "")}>
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/about" className={({isActive}) => (isActive ? "underline" : "")}>
            <li>A propos</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
