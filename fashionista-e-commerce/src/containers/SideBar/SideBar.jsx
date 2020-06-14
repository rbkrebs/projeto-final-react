import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { toggleSideBar } from "../../actions"
import SideBarSearch from "../SideBarSearch"
import SideBarListShop from "../SideBarListShop"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";


import './SideBar.css'


export default function SideBar(){

    const dispatch = useDispatch();
    const toggleMenu = () => dispatch(toggleSideBar(false));

    const { openSideBar } = useSelector(state => state);
   
    return(
        <div className= {openSideBar?"sideBar__open": "sideBar__closed"}>
            <button><FontAwesomeIcon icon={faWindowClose} onClick={toggleMenu}/></button>
            
            <SideBarListShop/>
        </div>
    )
}