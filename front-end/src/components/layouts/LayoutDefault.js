import Navbar from "./Navbar";
import '../../css/Layout.css'
import { Outlet } from "react-router-dom";

function LayoutDefault() {
  return (
    <>
      <div className='background-container'>
        <svg className='background-image' viewBox="0 0 796.6 824.4" >
          <path id="Path_1" class="colour-1" d="M796.5,0H-0.1l627.5,185h169.1V0z"/>
          <path id="Path_3" class="colour-4" d="M711,0h85.6v338L711,0z"/>
          <path id="Path_4" class="colour-5" d="M277.8,0H711l85.5,338L277.8,0z"/>
          <path id="Path_5" class="colour-2" d="M796.5,453.9l-469.5-38l469.5,85V453.9z"/>
          <path id="Path_6" class="colour-1" d="M796.5,584.3v-83.5l-469.5-85L796.5,584.3z"/>
          <path id="Path_7" class="colour-1" d="M338,643.6l412.3-74.4l-85.6-101.5L338,643.6z"/>
          <path id="Path_8" class="colour-2" d="M338,643.6L796.6,624l-46.3-54.8L338,643.6z"/>
          <path id="Path_9" class="colour-3" d="M327,741.7L796.5,185v248.6L327,741.7z"/>
          <path id="Path_11" class="colour-4" d="M796.5,699.7L653.1,0H284l512.5,761.5V699.7z"/>
          <path id="Path_12" class="colour-3" d="M796.5,761.5L326.1,0H211.2L796.5,761.5z"/>
          <path id="Path_10" class="colour-4" d="M796.5,90.1V185L327,741.7L796.5,90.1z"/>
          <path id="Path_13" class="colour-5 colour-5-light" d="M512,824.4L796.5,363v352.9L512,824.4z"/>
          <path id="Path_14" class="colour-4" d="M796.5,715.9V774l-284.6,50.3L796.5,715.9z"/>
        </svg>
      </div>
      <div className='layout'>
        <div className='navbar-layout'>
          <Navbar />
        </div>
        <div className = 'content-layout'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default LayoutDefault;