import "../css/Navbar.css"
import logo from "../assets/bLogo.svg"
import { Link } from "react-router-dom"

function Header() {
  return(
    <header className='navbar'>
      <div className='navbar-logo'> 
        <img src={logo} alt=''/> 
      </div>
      <div className='navbar-list'>
        <Link className='navbar-list-element' to="/"> home </Link>
        <Link className='navbar-list-element' to="/essays"> essays </Link>
        <Link className='navbar-list-element' to="/contact"> contact </Link>
      </div>
    </header>
  )
}

export default Header;