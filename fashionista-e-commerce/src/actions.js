export function getSize(index){
    
    return{

        type: "GET_SIZE",
        payload: index
    }
    
}

export function viewProduct(product){

    return{

        type: "VIEW_PRODUCT",
        payload: product
    }
}

export function addItemBag(product, sizeIndex){   

    
    return{

        type: "SET_BAG",
        
    }
}

export function addProduct(product, sizeIndex){ 
    

    return{

        type: "SET_ADD_PRODUCT",
        payload:{
            product: product,
            size: sizeIndex
        }
    }
}

export function removeProduct(sizeIndex){   

    return{

        type: "SET_REMOVE_PRODUCT",
        payload:{            
            size: sizeIndex
        }
    }
}
export function deleteProduct(sizeIndex){   

    return{

        type: "SET_DELETE_PRODUCT",
        payload:{
           
            size: sizeIndex
        }
    }
}

export function toggleSideBar(openSideBar,openSearch){    
  

    return{

        type: "TOGGLE_SIDEBAR",
        payload:{
            openSideBar:openSideBar,
            openSearch:openSearch
        } 
        
    }
}

export function getTotalItems(){    
  

    return{

        type: "GET_TOTAL_ITEMS"        
        
    }
}

export function getTotalPrice(productSelected){    
  

    return{

        type: "GET_TOTAL_PRICE",
        payload: productSelected        
        
    }
}
    

