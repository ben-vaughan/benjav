import "../css/Header.css"
import logo from "../assets/bLogo.svg"

function Header() {
  return(
    <header className='header-outer'>
      <div className='logo'> 
        <img src={logo}/> 
      </div>
      <div className='navbar'>
        <ul className='navbar-list'>
          <li className='navbar-list-element'> home </li>
          <li className='navbar-list-element'> essays </li>
          <li className='navbar-list-element'> design </li>
          <li className='navbar-list-element'> contact </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;