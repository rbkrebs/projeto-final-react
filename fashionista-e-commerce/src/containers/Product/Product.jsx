import React from 'react';
import { useParams } from 'react-router-dom';

import "./Product.css";



import { useSelector } from 'react-redux';


export default function Product() {


    const store = useSelector(state => state);
    const { name } = useParams();
    const valor = store.products.filter((product) => { return product.code_color === name })[0]
    console.log(valor);


    return (

        <div className="product" data-testid="product">
            <div className="product__figure">
                <figure>
                    <img src={valor.image} alt="" />
                </figure>
            </div>
            <div className="product__infos">
                <span>{valor.name}</span>
                <div className="product__price">
                    <span>{valor.actual_price}</span>
                    <span>em até {valor.installments}</span>
                </div>
            
                <p>Escolha o tamanho</p>
                <ul>
                    {valor.sizes.map((size) => {
                        if(size.available){
                        return (
                            <li className="product__size__selected">{size.size}</li>
                        )}
                    })}
                </ul>
                
                <button className="product__button">Adicionar à Sacola</button>
            </div>
        </div>


    )
};