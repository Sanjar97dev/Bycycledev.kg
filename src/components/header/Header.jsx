import React, { useState } from 'react';
import '../../styles/header.css';
import blackLogo from '../../assets/logo/Logo.svg';
import whiteLogo from '../../assets/logo/Logo-white.svg'

const Header = () => {
    const [isOpen, setOpen] = useState(false);

    const toggleNavbar = () => {
        setOpen(!isOpen);
    };

    return (
        <header className={`header ${isOpen ? "open" : ""}`}>
            <div className="header-container">
                <div className={`header__logo ${isOpen ? 'open' : ""}`} style={{ backgroundImage: `url(${isOpen ? whiteLogo : blackLogo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} />
                <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
                    {
                        isOpen ? (
                            <div className="close-button" onClick={() => setOpen(false)}> <i className="bi bi-x"></i></div>
                        ) : (
                            <>
                                <div className={'bar'} />
                                <div className={'bar-2'} />
                                <div className={'bar'} />
                            </>
                        )
                    }
                </div>

                <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    <li>Company</li>
                    <li>Services</li>
                    <li>Industries</li>
                    <li>Partners</li>
                    <li>Careers</li>
                    <li>Insights</li>
                    <li>Calendar</li>
                    <li>Employees</li>
                    <li>Contacts</li>
                    <li>EN</li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
