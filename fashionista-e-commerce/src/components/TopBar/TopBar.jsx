import React from 'react';

import Brand from '../Brand';
import NavBar from '../NavBar';
import './TopBar.css';

const TopBar = () => (
    <header className="topbar" data-testid="topbar">
        <div className="container">
            <a href="/" className="topbar__logo">
                <Brand />
            </a>
            <div className="topbar__navbar">
                <NavBar />
            </div>
        </div>
    </header>
)

export default TopBar;