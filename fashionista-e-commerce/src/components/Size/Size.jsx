import React from 'react';
import './Size.css';

import { useSelector } from 'react-redux'

export default function Size({index, size, handleClick}) {

    const {sizeIndex} = useSelector(state => state);
    return(

    
    <li className={
        sizeIndex === size.sku ? "product__size__selected" : "product__size"
    } onClick= {() => handleClick(size)}>{size.size}</li>
   
    )
}