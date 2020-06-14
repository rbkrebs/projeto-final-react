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

export function removeProduct(product, sizeIndex){   

    return{

        type: "SET_REMOVE_PRODUCT",
        payload:{
            product: product,
            size: sizeIndex
        }
    }
}
export function deleteProduct(product, sizeIndex){   

    return{

        type: "SET_DELETE_PRODUCT",
        payload:{
            product: product,
            size: sizeIndex
        }
    }
}

export function toggleSideBar(boolean){    
  

    return{

        type: "TOGGLE_SIDEBAR",
        payload: boolean
        
    }
}
    

