import React from 'react';
import './Card.css';


export default function Card({product, handleClick}) {
    
    return (
       
        product.on_sale ?
        <li  className="catalogo__produto" data-testid="produto" onClick={() => handleClick(product)} >
            <span className="catalogo__produto__desconto">{product.discount_percentage}</span>
            <figure>
                <img src={product.image} alt={product.name} />
            </figure>
            <div className="catalogo__footer">
                <span>{product.name}</span>
                <div className="catalogo__footer__desconto">
                    <span className="catalogo__preco__desconto">{product.regular_price}</span>
                    <span>{product.actual_price}</span>
                </div>
            </div>
        </li>
        :
        <li  className="catalogo__produto" data-testid="produto" onClick={() => handleClick(product)}>
            <figure>
                <img src={product.image} alt={product.name} />
            </figure>
            <div className="catalogo__footer">
                <span>{product.name}</span>
                <div className="catalogo__footer__desconto">
                    <span>{product.actual_price}</span>
                </div>
            </div>
        </li>

    )
}