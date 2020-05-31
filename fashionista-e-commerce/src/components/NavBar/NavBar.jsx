import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import './NavBar.scss';

const NavBar = () => (
    <nav className = "navbar" data-testid = "navbar">       
       <FontAwesomeIcon icon={faSearch} /> 
       <FontAwesomeIcon icon={faShoppingBag} />  
            </nav>
)

export default NavBar;