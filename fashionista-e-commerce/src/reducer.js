import data from './dataMock/catalog.json'

const INITIAL_STATE = {
    products: data,
    productSelected: {},
    productAdded: {},
    sizeIndex: false,
    productsListBag: [],
    openSideBar: false,
    totalPrice : 0,
    totalItems : 0




}

function reducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case "VIEW_PRODUCT":
            return {
                ...state,
                productSelected: action.payload
            };

        case "SET_ADD_PRODUCT":
            return {
                ...state,
                productAdded:{
                product: action.payload.product,
                size: action.payload.size,
                quantity: 1 
                }
            };
        case "SET_REMOVE_PRODUCT":
            return {
                ...state,
                productsListBag: state.productsListBag.map((product) => {
                    console.log(product)
                    if (product.size === action.payload.size && product.quantity>1) {
                        product.quantity--;
                        state.totalItems--;
                        
                        return product;
                    }
                    return product;
                })
            };
        case "SET_DELETE_PRODUCT":
            return {
                ...state,
                productsListBag: state.productsListBag.map((product) => {
                    if (product.size === action.payload.size) {
                        product.quantity++;
                    }
                    return (null)
                })
            };

        case "GET_SIZE":
            return {
                ...state,
                sizeIndex: action.payload.sku,


            };
        case "SET_BAG":
            console.log(parseFloat(state.productAdded.product.actual_price.slice(3,-1).replace(',','.')))
            if(state.productsListBag.length===0){
                return {
                    ...state,                                
                productsListBag:[...state.productsListBag, state.productAdded]
                }
            }else{

                var exist = true;

                var listTemp = state.productsListBag.map((product) => {
                    
                    if (product.size === state.productAdded.size) {                        
                        exist = false
                        product.quantity++;
                        
                    }
                    return product
                });
                if(exist){
                    listTemp.push(state.productAdded)
                }

                return {
                    ...state,
                    productsListBag: listTemp                          
                    
                };


            }
                
            //totalPrice: parseFloat(state.productAdded.product.actual_price.slice(3,-1).replace(',','.')),      
            

        case "TOGGLE_SIDEBAR":
            return {
                ...state,
                openSideBar: action.payload
            }

        default:
            return state;
    }

}

export default reducer;