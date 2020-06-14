import React from 'react';
import "./SideBarSearch.css";
import {Link} from 'react-router-dom'
import { getProducts, viewProduct} from "../../actions"
import { useSelector, useDispatch } from 'react-redux'


export default function SideBarSearch(){

   
   
  


    const { productsListSearch} = useSelector(state => state);
    const dispatch = useDispatch();
    const selectProduct = product => {
        
    
        dispatch(viewProduct(product));
    }

    const handleOnChange = event => {
        dispatch(getProducts(event.target.value))
        
    }
   

    
    return(
        <div className="sideBarSearch">
            <form>
                <label className = "sideBarSearch__label">Pesquise por algum produto</label>
                <input className = "sideBarSearch__input" type="text"  onChange={handleOnChange}/>                                     
            </form>
            <div className="sideBarSearch__result">
            {productsListSearch.length === 0 ?
            <span>Nenhum item encontrado</span>
            :
            
            productsListSearch.map((item) => { 
              
                    console.log(item.name)
                    return (
                        <Link className = "text-link" to={`/product/${item.code_color}`} >
                        <div key={item.code_color} className="SideBarListShop__item" onClick = {() => selectProduct(item)}>
    
                            <figure>
                                <img src={item.image} alt="" />
                            </figure>
                            <div className="SideBarListShop__item__info">
                                <span>{item.name}</span>
                                <span>{item.actual_price}</span>
                                <span>{item.installments}</span>                        
                                
                            </div>
    
                        </div>
                        </Link>
                    ) 
               
            })}
            </div>
        
        
        </div>
    )
}