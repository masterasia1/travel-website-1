import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import { Button } from "./Button";
import './Navbar.css'


function Navbar() {
    const [click, setclick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setclick(!click);
    const closeMobileMenu = () => setclick(false)


    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton (false)
        } else {
            setButton(true)
        }
    }

    useEffect(()=> {
        showButton ();
    }, []);


    window.addEventListener('resize', showButton);



    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                   Van Life  <i className='fab fa-typo3' />
                </Link>
                <div className="menu-icon" onClick={handleClick}> 
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />

                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/van-life' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/locations' className="nav-links" onClick={closeMobileMenu}>
                            Locations
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/tips' className="nav-links" onClick={closeMobileMenu}>
                            Tips
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/sign-up' className="nav-links-mobile" onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'> Sign up</Button>}

            </div>
        </nav>
        
        </>
    )
}

export default Navbar