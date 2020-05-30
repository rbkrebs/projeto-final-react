import React from 'react';

import Brand from '../Brand';
import './TopBar.scss';

const TopBar = () => (
    <header className = "topbar" data-testid = "topbar">
        <div className = "container">
        <a href="/" className="topbar__logo">
						<Brand className="header__brand" />
					</a>
            </div>
            </header>
)

export default TopBar;