import data from './dataMock/catalog.json'

const INITIAL_STATE = {
    products: data,
    productSelected: {},
    productAdded: {},
    sizeIndex: false,
    productsListBag: [],
    productsListSearch: [],
    openSideBar: false,
    openSearch: false,
    totalPrice: 0,
    totalItems: 0

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
                productAdded: {
                    product: action.payload.product,
                    size: action.payload.size,
                    quantity: 1
                }
            };
        case "SET_REMOVE_PRODUCT":
            return {
                ...state,
                productsListBag: state.productsListBag.map((product) => {
                    if (product.size === action.payload.size && product.quantity > 1) {
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
                productsListBag: state.productsListBag.filter((product) => product.size !== action.payload.size)
            };

        case "GET_SIZE":
            return {
                ...state,
                sizeIndex: action.payload.sku,


            };
        case "SET_BAG":

            if (state.productsListBag.length === 0) {
                return {
                    ...state,
                    productsListBag: [...state.productsListBag, state.productAdded]
                }
            } else {

                var exist = true;

                var listTemp = state.productsListBag.map((product) => {

                    if (product.size === state.productAdded.size) {
                        exist = false
                        product.quantity++;

                    }
                    return product
                });
                if (exist) {
                    listTemp.push(state.productAdded)
                }

                return {
                    ...state,
                    productsListBag: listTemp

                };


            }


        case "TOGGLE_SIDEBAR":
          
            return {
                ...state,
                openSideBar: action.payload.openSideBar,
                openSearch: action.payload.openSearch
            }

        case "GET_TOTAL_ITEMS":
            return {
                ...state,
                totalItems: state.productsListBag.reduce((total, product) => {
                    return total + product.quantity
                },0)
            }

        case "GET_TOTAL_PRICE":
            return {
                ...state,
                totalPrice: state.productsListBag.reduce((total, product) =>{
                    return total + parseFloat(action.payload.actual_price.slice(3,-1).replace(',','.'))*product.quantity
                },0) 
            }

            case "GET_PRODUCTS":
            return {
                ...state,
                productsListSearch:  state.products.filter((product) => product.name.toLowerCase().includes(action.payload.toLowerCase()))
                  
                
            }

        default:
            return state;
    }

}

export default reducer;