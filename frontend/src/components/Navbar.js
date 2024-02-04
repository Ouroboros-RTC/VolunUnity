import { Link } from 'react-router-dom'
import React, { useState } from 'react';

const Navbar = () => {
    const [activeButton, setActiveButton] = useState(1);

    const handleButtonClick = (buttonNumber) => {
        setActiveButton(buttonNumber);
    };

    return (
        <nav>
            <ul>
                <button
                    className={activeButton === 1 ? 'active' : ''}
                    onClick={() => handleButtonClick(1)}
                >
                    <li>
                        <Link to="/">Service Tracker</Link>
                    </li>
                </button>
                <button
                    className={activeButton === 2 ? 'active' : ''}
                    onClick={() => handleButtonClick(2)}
                >
                    <li>
                        <Link to="/organizations">Organizations</Link>
                    </li>
                </button>
            </ul>
        </nav>
    );
};

export default Navbar;
