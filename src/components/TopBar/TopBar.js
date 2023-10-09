import './TopBar.scss';
import logo from '../../assets/logo/Logo pngGroup 1 (3).png';
import hamburger  from '../../assets/icons/charm_menu-hamburger.svg';

import { useState, useEffect } from 'react';

function TopBar({home}) {
    const [isHome, setIsHome] = useState(false);

    useEffect( () => {
        home ? setIsHome(true) : setIsHome(false);
    }, []);

    return (
        <>
            <section className='top-bar'>
                <div className={isHome ? 'top-bar__empty-div' : 'off'}></div>
                <img className={isHome ? 'top-bar__logo-home' : 'top-bar__logo-other'} src={logo}></img>
                <img className='top-bar__hamburger' src={hamburger}></img>
            </section>
        </>
    )
}

export default TopBar;