import './NavBar.scss';
import home from '../../assets/icons/earth.svg';
import ship from '../../assets/icons/spaceship.svg';
import astronaut from '../../assets/icons/astronaut.svg';

import { useNavigate } from 'react-router';

function NavBar() {
    const navigate = useNavigate();

    function handleHome() {
        navigate('/');
    }
    
    return (
        <section className='nav-bar'>
            <div className='nav-bar__icons'>
                <div onClick={handleHome} className='nav-bar__icons-container'>
                    <img src={home}></img>
                    <p>Home</p>
                </div>
                <div className='nav-bar__icons-container'>
                    <img src={ship}></img>
                    <p>My Trips</p>
                </div>
                <div className='nav-bar__icons-container'>
                    <img src={astronaut}></img>
                    <p>Profile</p>
                </div>
            </div>
        </section>
    )
}

export default NavBar;