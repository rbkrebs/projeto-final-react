export function getSize(index){
    
    return{

        type: "GET_SIZE",
        payload: index
    }
    
}

export function getProduct(product){

    return{

        type: "GET_PRODUCT",
        payload: product
    }
}

export function addItemBag(productSelected, sizeIndex){   

    return{

        type: "ADD_ITEM_BAG",
        payload:{
            product: productSelected,
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
    

