import React from 'react';
import { useParams } from 'react-router-dom';

import "./Product.css";



import { useSelector } from 'react-redux';


export default function Product() {


    const store = useSelector(state => state);
    const { name } = useParams();
    const valor = store.products.filter((product) => {return product.code_color === name})[0]
    console.log(valor);
   

    return (

        <div className="product" data-testid="product">
            <figure>
                <img src={valor.image} alt="" />
            </figure>
    <span>{valor.name}</span>
    <span>{valor.actual_price}</span>
    <span>Em até {valor.installments}</span>
    <p>Escolha o tamanho</p>
            <ul>
                {valor.sizes.map((size)=>{
                    return(
                    <span>{size.size}</span>
                    )
                })}
            </ul>
            <button>Adicionar à Sacola</button>
        </div>


    )
};