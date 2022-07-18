import "../../css/Navbar.css"
import React from "react"
import logo from "../../assets/bLogo.svg"
import { Link } from 'react-router-dom'
import { ThemeContext, themes } from "../../contexts/ThemeContext";

function Header() {
  const [darkMode, setDarkMode] = React.useState(true);

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
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <button
            color="link"
            onClick={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}> Toggle
        </button> )}
      </ThemeContext.Consumer>
    </header>
  )
}

export default Header;