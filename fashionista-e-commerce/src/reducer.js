import data from './dataMock/catalog.json'

const INITIAL_STATE = {
    products: data,
    productSelected:{},
    sizeIndex:0
    
   
    
}

function reducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case "GET_PRODUCTS":
            return state;
        case "GET_PRODUCT":
            return {
                ...state,
                productSelected: action.payload};

        case "GET_SIZE":
            return {
                ...state,               
                sizeIndex: action.payload.sku
            };

        default:
            return state;
    }

}

export default reducer;