import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { toggleSideBar } from "../../actions"

import './SideBar.css'


export default function SideBar(){

    const dispatch = useDispatch();
    const toggleMenu = () => dispatch(toggleSideBar(false));

    const { openSideBar } = useSelector(state => state);
   
    return(
        <div className= {openSideBar?"sideBar__open": "sideBar__closed"}>
            <button onClick={toggleMenu}>x</button>
        </div>
    )
}