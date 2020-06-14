import React from 'react';

import { useSelector } from 'react-redux'

import './Items.css';




export default function Items() {
    const { productsListBag, totalItems } = useSelector(state => state);
  
    return(
        productsListBag.length > 0 ?
    <div className = "navbar__shop" data-testid = "items"> 
   {totalItems}
            </div>
            :null
    )
}

