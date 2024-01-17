import React, { useState } from 'react'
import "./Sidebar.scss"
import logo from "../../assets/logo.png"
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { BsGraphUpArrow } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
import { BiMessage } from "react-icons/bi";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { FaRegSave } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
const Sidebar = ({ shownav, setShowNav }) => {

  const [active, setActive] = useState(3);
  return (
    <aside style={shownav ? { left: "0%" } : { left: "-100%" }}>
      <div className="logo">
        <img src={logo} alt="" />
        <p className='center'>logo</p>
      </div>
      <div className="menus">
        <HiOutlineSquares2X2 className={active == 1 ? "active" : ""} onClick={() => {setActive(1);setShowNav(false)}} />
        <BsGraphUpArrow className={active == 2 ? "active" : ""} onClick={() => {setActive(2);setShowNav(false)}} />
        <BiMessage className={active == 3 ? "active" : ""} onClick={() => {setActive(3);setShowNav(false)}} />
        <GrGallery className={active == 4 ? "active" : ""} onClick={() => {setActive(4);setShowNav(false)}} />
        <IoMusicalNotesOutline className={active == 5 ? "active" : ""} onClick={() => {setActive(5);setShowNav(false)}} />
        <FaRegSave className={active == 6 ? "active" : ""} onClick={() => {setActive(6);setShowNav(false)}} />
        <IoExitOutline className={active == 7 ? "active" : ""} onClick={() => {setActive(7);setShowNav(false)}}/>
      </div>
    </aside>
  )
}

export default Sidebar
