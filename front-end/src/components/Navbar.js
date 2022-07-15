import "../css/Navbar.css"
import logo from "../assets/bLogo.svg"
import { Link } from "react-router-dom"

function Header() {
  return(
    <header className='navbar'>
      <div> 
        <img className='navbar-logo' src={logo} alt=''/> 
      </div>
      <div className='navbar-list'>
        <Link className='navbar-list-element' to="/"> site </Link>
        <Link className='navbar-list-element' to="/essays"> essays </Link>
        <Link className='navbar-list-element' to="/contact"> contact </Link>
      </div>
    </header>
  )
}

export default Header;