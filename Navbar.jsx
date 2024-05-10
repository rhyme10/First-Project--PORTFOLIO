import React, { useRef } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'




const Navbar = () => {

    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right='0'
    }

    const closeMenu = () => {
        menuRef.current.style.right='-350px'
    }

    return (
        <div id='home' className='navbar'>
            <img src='https://www.shutterstock.com/shutterstock/photos/2284126663/display_1500/stock-photo-data-science-and-big-data-technology-scientist-computing-analysing-and-visualizing-complex-data-2284126663.jpg' height='80' width='80'></img>
            <img src='https://cdn-icons-png.flaticon.com/128/8727/8727934.png' height='40' width='40' className='nav-mob-open' onClick={openMenu}></img>

            <ul  ref={menuRef} className="nav-menu">
                <img src='https://cdn-icons-png.flaticon.com/128/15059/15059295.png' height='40' width='40' className='nav-mob-close' onClick={closeMenu}></img>
                <li><AnchorLink className='anchor-link' href='#home'>Home</AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'>About</AnchorLink></li>

                <li><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact</AnchorLink></li>
            </ul>
            <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>

        </div>
    )
}
export default Navbar