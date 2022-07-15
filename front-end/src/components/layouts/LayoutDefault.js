import Navbar from "../Navbar";
import '../../css/Layout.css'
import { Outlet } from "react-router-dom";

function LayoutDefault() {
  return(
    <div className='background'>
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

export default LayoutDefault;