import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

import ShopCar from './emptyShoppingCart.png';
import { addItemBag, addProduct } from "../../actions"


import './SideBarListShop.css'


export default function SideBarListShop(){
    
    const { productsListBag } = useSelector(state => state);
    const dispatch = useDispatch();

    const handleAddItem = (product,sizeIndex) =>{  
      
         
        dispatch(addProduct(product, sizeIndex))  
        dispatch(addItemBag(product, sizeIndex))     
       
    }

    const handleRemoveItem = (product,sizeIndex) =>{  
      
         
        dispatch(addProduct(product, sizeIndex))  
        dispatch(addItemBag(product, sizeIndex))     
       
    }
    const handleDelete = (product) =>{  
      
         
        
       
    }
    
   
        
  


    return (<div className="sideBarListShop">
         <button><FontAwesomeIcon icon={faWindowClose} /></button>
        <div>Quantidades de itens na sacola</div>
        {productsListBag.length===0?
        <figure>
            <img src={ShopCar}></img>
        </figure>
        :
        productsListBag.map((item) => {
            return(
                <div key={item.size}>
                    <span>{item.product.name}</span>
                    <figure>
                    <img src={item.product.image} alt="" />
                </figure>
                <span>{item.product.actual_price}</span>
                    <span>{item.product.installments}</span>
               
                <button><FontAwesomeIcon icon={faTrash} onClick = {() => handleDelete(item.product)}/></button>
                <button><FontAwesomeIcon icon={faMinusSquare} onClick = {() => handleRemoveItem(item.product, item.size)}/></button>
            <span>{item.quantity}</span>
                <button><FontAwesomeIcon icon={faPlusSquare} onClick = {() => handleAddItem(item.product, item.size)}/></button>
                
                </div>
            )
        })}
        <button><FontAwesomeIcon icon={faMoneyBill} /></button>
                <div>Total: R$</div>
        
    </div>)
}