import data from './dataMock/catalog.json'

const INITIAL_STATE = {
    products: data
}

function reducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case "GET_PRODUCTS":
            return state;
        default:
            return state;
    }

}

export default reducer;