import React from 'react';
import logo from "./logo.svg";
import {useGlobalContext} from "./Context";
import {FaTimes} from "react-icons/fa";
import {social, links} from "./data";

function Sidebar() {
    const {isSidebarOpen, closeSidebar} = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
        <div className="sidebar-header">
            <img src={logo} className="logo" alt='codding addict'/>
            <h3>Veysel's Sidebar Project</h3>
            <button className='close-btn' onClick={closeSidebar}>
                <FaTimes/>
            </button> 
        </div>

        <ul className='links'>
            {links.map((item)=>{
                const{id, url, text, icon} = item;
                return(
                    <li key={id} >
                        
                        <a href={url} >{icon} {text}</a>
                    </li>
                )
            })}
        </ul>
        <ul className='social-icons'>
            {social.map((item)=>{
                const{id, url, icon} = item;
                return(
                    <li key={id}>
                        <a href={url}>{icon}</a>
                    </li>
                )
            })}
        </ul>

    </aside>
  )
}

export default Sidebar