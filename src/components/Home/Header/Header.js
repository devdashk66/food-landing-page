import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header container">
      <nav>
        <div className="logo">
          <NavLink to="/">
            <HiBars3 />
            <h1>Foodie</h1>
          </NavLink>
        </div>
        <div className="navLinks">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/packages">Packages</NavLink>
            </li>
            <li>
              <NavLink to="/about">About us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact us</NavLink>
            </li>
          </ul>
          <AiOutlineShoppingCart />
          <Button title="Booking Now" />
        </div>
      </nav>
    </div>
  );
}

export default Header;
