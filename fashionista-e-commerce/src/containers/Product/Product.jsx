import React from 'react';
import { useParams } from 'react-router-dom';

import "./Product.css";
import Size from "../../components/Size"
import { getSize, addItemBag } from "../../actions"
import { useSelector, useDispatch } from 'react-redux';


export default function Product() {


    const { sizeIndex, productSelected } = useSelector(state => state);
   
    const dispatch = useDispatch();
    //const { name } = useParams();    
    const selectSize = size => dispatch(getSize(size));

    const handleSubmit = event =>{
        event.preventDefault();
        console.log(sizeIndex)  
        dispatch(getSize(0));   
        dispatch(addItemBag(productSelected, sizeIndex))
      
       
    }
   
  


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
                <form onSubmit={ handleSubmit }>
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
                
                <button type= "submit" disabled={sizeIndex === undefined? true: false} className="product__button">Adicionar à Sacola</button>
                 </form>
            </div>
        </div>
       


    )
}