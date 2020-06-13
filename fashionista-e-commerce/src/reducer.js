import data from './dataMock/catalog.json'

const INITIAL_STATE = {
    products: data,
    productSelected: {},
    sizeIndex: 0,    
    productsListBag: [],
    openSideBar: false,
   
   


}

function reducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case "GET_PRODUCT":
            return {
                ...state,
                productSelected: action.payload
            };

        case "GET_SIZE":
            return {
                ...state,
                sizeIndex: action.payload.sku,
              
               

            };
        case "ADD_ITEM_BAG":
            return {
                ...state,
                productsListBag: [...state.productsListBag, {
                    product: action.payload.product,
                    size: action.payload.size
                }]
            };

        case "TOGGLE_SIDEBAR":
            return {...state,
                openSideBar:action.payload
            }

        default:
            return state;
    }

}

export default reducer;