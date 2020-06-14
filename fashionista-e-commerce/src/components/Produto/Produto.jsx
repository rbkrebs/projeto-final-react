import React from 'react';
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { viewProduct } from "../../actions"

import Card from "../Card"

import './Produto.css';




export default function Produto() {

    const {products, productSelected} = useSelector(state => state);
    const dispatch = useDispatch();
    const selectProduct = product => dispatch(viewProduct(product));   


    return (
        <ul className="catalogo__produtos">
            {products.map((product, index) => {
                if (product.image) {
                   
                    return (
                        
                        <Link className = "text-link" key={index} to={`/product/${product.code_color}`} >
                            <Card product={ product } handleClick = {selectProduct}/>                            
                        </Link>
                    )
                }

            }

            )}
        </ul>)
};