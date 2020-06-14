import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

import ShopCar from './emptyShoppingCart.png';
import { addItemBag, addProduct, removeProduct, deleteProduct, getTotalItems, getTotalPrice } from "../../actions"


import './SideBarListShop.css'


export default function SideBarListShop() {

    const { productsListBag, totalItems, totalPrice } = useSelector(state => state);
    const dispatch = useDispatch();

    const handleAddItem = (product, sizeIndex) => {


        dispatch(addProduct(product, sizeIndex))
        dispatch(addItemBag(product, sizeIndex))
        dispatch(getTotalItems());
        dispatch(getTotalPrice(product));

    }

    const handleRemoveItem = (product, sizeIndex) => {


        dispatch(removeProduct(sizeIndex))
        dispatch(getTotalItems());
        dispatch(getTotalPrice(product));


    }
    const handleDelete = (product, sizeIndex) => {

        dispatch(deleteProduct(sizeIndex))
        dispatch(getTotalItems());
        dispatch(getTotalPrice(product));


    }

    return (<div className="sideBarListShop">

        <span className="SideBarListShop__bagInfo">Quantidades de itens na sacola {totalItems}</span>
        {productsListBag.length === 0 ?
            <figure>
                <img src={ShopCar}></img>
            </figure>
            :
            productsListBag.map((item) => {
                return (
                    <div key={item.size} className="SideBarListShop__item">

                        <figure>
                            <img src={item.product.image} alt="" />
                        </figure>
                        <div className="SideBarListShop__item__info">
                            <span>{item.product.name}</span>
                            <span>{item.product.actual_price}</span>
                            <span>{item.product.installments}</span>
                            <span>Tamanho {item.size.split('_')[3]}</span>
                            <div className="SideBarListShop__item__update">
                                <button onClick={() => handleRemoveItem(item.product, item.size)}><FontAwesomeIcon icon={faMinusSquare}  /></button>
                                <div>{item.quantity}</div>
                                <button onClick={() => handleAddItem(item.product, item.size)}><FontAwesomeIcon icon={faPlusSquare}  /></button>                               
                            </div>
                            <button onClick={() => handleDelete(item.product, item.size)}><FontAwesomeIcon icon={faTrash}  className="SideBarListShop__item__remove"  /> Remover Item</button>                            
                        </div>

                    </div>
                )
            })}

        <span className="SideBarListShop__totalPrice">Total: R$ {totalPrice.toFixed(2)}</span>

    </div>)
}