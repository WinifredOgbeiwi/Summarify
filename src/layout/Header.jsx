import React, { useState } from 'react'
import Button from '../components/Button'
import '../assets/styles/homepage.css'
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { MOBILE_WINDOW_SIZE, useWindowWidth } from '../utils';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isNavShown, setNavShown] = useState(false);
    const windowWidth = useWindowWidth();
    const location = useLocation();
    const pathRoute = (route) => {
        if (route === location.hash || route === location.pathname) return true;
    };
    return (
        <nav className='nav-container flex'>
            <header><Link to={''}>Summarify</Link> </header>
            {windowWidth > MOBILE_WINDOW_SIZE && (
                <>
                    <ul className='flex navlist-container'>
                        <Link to={'/'} className={pathRoute('/') && 'path-design'}>Home</Link>
                        <Link to={'#about'} className={pathRoute('#about') && 'path-design'}>About</Link>
                        <Link to={'#feature'} className={pathRoute('#feature') && 'path-design'}>Feature</Link>
                        <Link to={'/contact'} className={pathRoute('/contact') && 'path-design'}>Contact</Link>

                    </ul>
                    <div className='nav_buttons '>
                        <Button text='Login' specific='nav_button_plain' to='' />
                        <Button text='Register' specific='nav_button_full' to='' />
                    </div>

                </>
            )}
            {isNavShown ? <RxCross2 className="nav-menu" onClick={() => setNavShown(!isNavShown)} /> : <AiOutlineMenu className="nav-menu" onClick={() => setNavShown(!isNavShown)} />}


            {isNavShown && (
                <div className="mobile-nav">
                    <ul className='flex navlist-container'>
                        <Link to={''} className={pathRoute('') && 'path-design'}>Home</Link>
                        <Link to={'#about'} className={pathRoute('#about') && 'path-design'}>About</Link>
                        <Link to={'#feature'} className={pathRoute('#feature') && 'path-design'}>Feature</Link>
                        <Link to={'#contact'} className={pathRoute('#contact') && 'path-design'}>Contact</Link>

                    </ul>
                    <div className='nav_buttons'>
                        <Button text='Login' specific='nav_button_plain' to='' />
                        <Button text='Register' specific='nav_button_full' to='' />
                    </div>
                </div>

            )}

        </nav>
    )
}

export default Header
