import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import './NavBar.css';
import Items from "../Items/Items"

const NavBar = () => (
    <div className = "navbar__buttons" data-testid="navbar">
        <button className="navbar__button">
            <FontAwesomeIcon icon={faSearch} />
        </button>
        <button className= "navbar__button navbar_button_shop">
            <FontAwesomeIcon icon={faShoppingBag} />
            <Items/>
        </button>
        
    </div>
)

export default NavBar;