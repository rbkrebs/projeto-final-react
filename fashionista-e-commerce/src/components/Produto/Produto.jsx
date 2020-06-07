import React from 'react';

import { useSelector } from 'react-redux'

import './Produto.css';




export default function Produto() {

    const store = useSelector(state => state);


    return (
        <ul className="catalogo__produtos">
            {store.products.map((products) => {
                if (products.image) {
                    return (

                        <li className="catalogo__produto" data-testid="produto">
                            {products.discount_percentage ?
                            <span className="catalogo__produto__desconto">{products.discount_percentage}</span>
                : ""}
                            <figure>
                                <img src={products.image} alt={products.name} />
                            </figure>
                            <div className="catalogo__footer">
                                <span>{products.name}</span>
                                <span>{products.actual_price}</span>
                            </div>

                        </li>
                    )
                }

            }

            )}
        </ul>)
};