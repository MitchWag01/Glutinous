import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBarData';
import './SideBar.css'
import { IconContext } from 'react-icons';
//installed react-router and react-router-dom and react icons
function SideBar() {
    const [sidebar,setSidebar]= useState(false)

    const showSideBar = () => setSidebar(!sidebar)

  return (
    <>
    <IconContext.Provider value={{color: '#000000'}}>
      <div className='navbar'>
        <Link to="#" className='menu-bars' onClick={showSideBar}>
            <FaIcons.FaBars/>
        </Link>
      </div>
      < nav className={sidebar ? 'side-bar_active': 'side-hidden'}>
        <ul className='side-menu-items'onClick={showSideBar}>
            <li className='sidebar-toggle'>
                <Link to='#' className='menu-bars'>
                    <AiIcons.AiOutlineClose/>
                </Link>
            </li>
            {SidebarData.map((item,index) => {
            return(
              <li key={index} className={item.ClassName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
            })}
        </ul>
      </nav>
      </IconContext.Provider>
    </>
  );
}

export default SideBar
