import React from 'react';

import { useDispatch } from 'react-redux'
import { toggleSideBar } from "../../actions"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import './NavBar.css';
import Items from "../Items/Items"

export default function NavBar() {

    const dispatch = useDispatch();
    const toggleMenu = () => dispatch(toggleSideBar(true));
    return(
    <div className = "navbar__buttons" data-testid="navbar" onClick={toggleMenu}>
        <button className="navbar__button">
            <FontAwesomeIcon icon={faSearch} />
        </button>
        <button className= "navbar__button navbar_button_shop" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faShoppingBag} />
            <Items/>
        </button>
        
    </div>
    )
}
