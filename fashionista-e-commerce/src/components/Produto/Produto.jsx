import React from 'react';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

import './Produto.css';




export default function Produto() {

    const store = useSelector(state => state);


    return (
        <ul className="catalogo__produtos">
            {store.products.map((products) => {
                if (products.image) {
                    return (
                        products.on_sale ?
                        <Link to={`/product/${products.code_color}`}>
                            <li className="catalogo__produto" data-testid="produto">
                                <span className="catalogo__produto__desconto">{products.discount_percentage}</span>
                                <figure>
                                    <img src={products.image} alt={products.name} />
                                </figure>
                                <div className="catalogo__footer">
                                    <span>{products.name}</span>
                                    <div className="catalogo__footer__desconto">
                                        <span className="catalogo__preco__desconto">{products.regular_price}</span>
                                        <span>{products.actual_price}</span>
                                    </div>
                                </div>
                            </li>
                            </Link>
                            :
                            <Link to={`/product/${products.code_color}`}>
                             <li className="catalogo__produto" data-testid="produto">                                
                                <figure>
                                    <img src={products.image} alt={products.name} />
                                </figure>
                                <div className="catalogo__footer">
                                    <span>{products.name}</span>
                                    <div className="catalogo__footer__desconto">  
                                        <span>{products.actual_price}</span>
                                    </div>
                                </div>
                            </li>
                            </Link>
                    )
                }

            }

            )}
        </ul>)
};