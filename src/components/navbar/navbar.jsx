import React, { useContext, useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';



const Navbar = ({ setShowLogin }) => {
    const{getTotalCartAmount} = useContext(StoreContext);
    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>
            <Link to='/'>
                <img src={assets.logo} alt="logo" className='logo' />
            </Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setMenu("home")} className={menu === 'home' ? 'active' : ''}>Home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === 'menu' ? 'active' : ''}>Menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === 'mobile-app' ? 'active' : ''}>Mobile app</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === 'contact-us' ? 'active' : ''}>Contact us</a>
            </ul>

            <div className="navbar-right">
                <img src={assets.search_icon} alt="search-icon" className='search-icon' />
                <div className="navbar-search-icon">
                    <Link to='/cart'>
                        <img src={assets.basket_icon} alt="" />
                    </Link>
                    {
                        getTotalCartAmount()>0?<div className="dot"></div>:<></>
                    }
                </div>
                <button onClick={() => setShowLogin(true)}>sign in</button>
            </div>
        </div>
    )
}

export default Navbar
