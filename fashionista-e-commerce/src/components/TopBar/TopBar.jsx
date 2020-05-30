import React from 'react';

import Brand from '../Brand';
import NavBar from '../NavBar';
import './TopBar.scss';

const TopBar = () => (
    <header className = "topbar" data-testid = "topbar">
        <div className = "container">
        <a href="/" className="topbar__logo">
						<Brand />
                        <NavBar/>
					</a>
            </div>
            </header>
)

export default TopBar;