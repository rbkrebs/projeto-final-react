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
    const toggleMenu = (openSideBar, openSearch) => dispatch(toggleSideBar(openSideBar, openSearch));
    return(
    <div className = "navbar__buttons" data-testid="navbar" >
        <button className="navbar__button" onClick={() => toggleMenu(true, true)}>
            <FontAwesomeIcon icon={faSearch} />
        </button>
        <button className= "navbar__button navbar_button_shop" onClick={() => toggleMenu(true, false)}>
            <FontAwesomeIcon icon={faShoppingBag} />
            <Items/>
        </button>
        
    </div>
    )
}
