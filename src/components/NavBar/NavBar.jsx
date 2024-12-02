import CartWidget from "./CartWidget"
import { BsBox } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./navbar.css"

const NavBar = () => {
  return (
    <nav className="navbar">

      <ul className="categories">
        <li className="category">
          <Link to="/category/Accesorios" className="text-link">Accesorios</Link>
        </li>
        <li className="category">
          <Link to="/category/Funcional" className="text-link" >Funcional</Link>
        </li>
        <li className="category">
          <Link to="/category/Yoga y Pilates" className="text-link">Yoga y Pilates</Link>
        </li>
      </ul>

      <Link to="/" className="brand primary-font-color">
      <div className="icon-brand">
      <img src="/src/assets/logo-codegym.png" alt="Brand Icon" className="image-icon" />
      </div>
        <p className="title-brand ">STORE</p>
      </Link>

      <CartWidget />
    </nav>
  )
}
export default NavBar