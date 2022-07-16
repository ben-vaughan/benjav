import Navbar from "./Navbar";
import '../../css/Layout.css'
import { Outlet } from "react-router-dom";

function LayoutDefault() {
  return(
    <div className='background dark-mode'>
      <div className='layout'>
        <div className='navbar-layout'>
          <Navbar />
        </div>
        <div className = 'content-layout'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

function toggleMode() {
  var element = document.body
  element.classList.toggle("dark-mode");
}

export default LayoutDefault;