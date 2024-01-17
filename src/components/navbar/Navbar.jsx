import React from 'react'
import "./Navbar.scss"
import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import user from "../../assets/user.png"
const Navbar = ({shownav,setShowNav}) => {

    
    return (
        <nav>
            <div className='container'>
                <FaBarsStaggered className='menuicon' onClick={()=>setShowNav(!shownav)} />
                <div className="top">
                    <div className="search-box">
                        <input type="text" placeholder='search anything..' spellCheck="false" />
                        <IoSearchOutline className='search-icon' />
                    </div>
                </div>
                <div className="user">
                    <IoNotificationsOutline className='notification' />
                    <img src={user} alt="" />
                    <FaChevronDown />
                </div>
            </div>
            <div></div>
        </nav>
    )
}

export default Navbar
