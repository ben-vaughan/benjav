import "../../css/Navbar.css"
import React from "react"
import { Link } from 'react-router-dom'
import { ThemeContext, themes } from "../../contexts/ThemeContext";

function Header() {
  const [darkMode, setDarkMode] = React.useState(true);

  return(
    <header className='navbar'>
      <div>
        <svg className="navbar-logo" viewBox="0 0 499.4 1024">
            <path class="logo-colour-0" d="M384,498.4c-19.9-4.6-39.2,1.9-69.9,13.6c112-112.5,185.1-201.8,176.9-224.4c-15.9-30.4-41.5-48.8-76.3-56.1
              c-25.1-4.2-98.7,39.1-206.5,128.2C225.1,323,296.2,190,356.5,240c7.2-0.9,10.9-3.9,7.4-11.7c-7.7-20.6-77.5-75.8-101.8-59.3
              c-71.3,61.9-125.3,165.7-151,274.4v-0.1C51,492.9,72.4,477,0.6,549.3c-6.3,7.9,41.6,37.6,50,31.1l45.9-46.7v-0.1
              C84.9,669,122,796.3,229.4,843.7c119.4-51.2,232.3-214.3,227.1-261.5C453.5,547.5,432.7,515.2,384,498.4z M163.8,472.5
              c144.6-118,256.6-199.7,282.1-177.4c-7.8,37.5-166.3,177.2-292.2,295.4C150.4,556,155.1,515.7,163.8,472.5z M396.7,604.6
              c-30.4,77.6-107.8,145.5-175,192.4c-37.5-31.3-59.5-77-64.9-140.8l13.3,5.5c61.6-54,118.9-93,171.1-114.1
              C411.9,534.1,413.9,563.3,396.7,604.6z"/>
            <path class="logo-colour-1" d="M96.5,533.5c23.1-22.8,45.5-43,67.4-61l-6.5,36.9c-19.3,12.4-40.4,31-62.6,53.5L96.5,533.5z"/>
        </svg>
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