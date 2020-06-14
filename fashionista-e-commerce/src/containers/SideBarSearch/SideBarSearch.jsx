import React from 'react';
import "./SideBarSearch.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


export default function SideBarSearch(){

    return(
        <div>
        <button><FontAwesomeIcon icon={faArrowLeft} /></button>
        <button><FontAwesomeIcon icon={faSearch} /></button>
        </div>
    )
}