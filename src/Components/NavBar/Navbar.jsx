import React, { useState,useRef } from 'react'
import logo from '../../assets/img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import "./Navbar.css"

const Navbar = () => {
  const [menu,setMenu] = useState("home");
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right='0';
  }
  const closeMenu = () => {
    menuRef.current.style.right='-350px';
  }
  return (
    <div className='Portfolio-Navbar'>
      <img className="Portfolio-image"src={logo} alt="" />
      <i class="fa-solid fa-bars nav-mob-open" onClick={openMenu}></i>
      <ul className="portfolio-nav-menu" ref={menuRef}>
      <i className="fa-solid fa-xmark nav-mob-close" onClick={closeMenu}></i>
      <li className={menu === 'home' ? 'active' : ''}><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
        <li className={menu === 'about' ? 'active' : ''}><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink></li>
        <li className={menu === 'projects' ? 'active' : ''}><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu("projects")}>My Projects</p></AnchorLink></li>
        <li className={menu === 'service' ? 'active' : ''}><AnchorLink className='anchor-link' offset={50} href='service'><p onClick={()=>setMenu("service")}>Service</p></AnchorLink></li>
        <li className={menu === 'contact' ? 'active' : ''}><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink></li>
      </ul>
      <div className="portfolio-nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
