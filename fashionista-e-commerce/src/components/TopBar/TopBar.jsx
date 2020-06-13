import React from 'react';
import {Link} from 'react-router-dom'
import Brand from '../Brand';
import NavBar from '../NavBar';
import './TopBar.css';



export default function TopBar (){

    return(
    <header className="topbar" data-testid="topbar">
        <div className="container">
            <Link to="/" className="topbar__logo">
                <Brand />
            </Link>
            <div className="topbar__navbar">
                <NavBar />
            </div>
        </div>
    </header>
    )
}

