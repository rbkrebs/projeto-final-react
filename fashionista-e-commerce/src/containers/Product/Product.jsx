import React from 'react';
import { useParams } from 'react-router-dom';

import "./Product.css";
import Size from "../../components/Size"
import { getSize } from "../../actions"
import { useSelector, useDispatch } from 'react-redux';


export default function Product() {


    const { products, sizeIndex, productSelected } = useSelector(state => state);
   
    const dispatch = useDispatch();
    const { name } = useParams();
    const valor = products.filter((product) => { return product.code_color === name })[0]
    const selectSize = size => {
        console.log(sizeIndex)
        dispatch(getSize(size))};
   
  


    return (

        <div className="product" data-testid="product">
            <div className="product__figure">
                <figure>
                    <img src={productSelected.image} alt="" />
                </figure>
            </div>
            <div className="product__infos">
                <span>{productSelected.name}</span>
                <div className="product__price">
                    <span>{productSelected.actual_price}</span>
                    <span>em até {productSelected.installments}</span>
                </div>
            
                <p>Escolha o tamanho</p>
                <ul>
                    {productSelected.sizes.map((size, index) => {
                        if(size.available){
                        return (
                            <Size key={index}                           
                            index = { index }
                            handleClick = {selectSize}
                            size = {size}/>
                        )}
                    })}
                </ul>
                
                <button className="product__button">Adicionar à Sacola</button>
            </div>
        </div>


    )
};