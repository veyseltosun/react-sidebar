import React from 'react';
import logo from "./logo.svg";
import {FaTimes} from "react-icons/fa";
import {social, links} from "./data";

function Sidebar() {
  return (
    <aside className={`sidebar show-sidebar`}>
        <div className="sidebar-header">
            <img src={logo} className="logo" alt='codding addict'/>
            <button className='close-btn' >
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