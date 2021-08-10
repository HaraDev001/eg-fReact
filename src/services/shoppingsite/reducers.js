import { ADD_PRODUCT, REMOVE_PRODUCT } from "./types"

const initialState = {
    cart: [],
    total: 0
}

function cartReducer(state = initialState, action){
    var item = action.payload;
    if(action.type === ADD_PRODUCT){
        return{
            cart:[...state.cart, item.id],
            total: Math.ceil(state.total + item.price)
        }

    }
    else if(action.type === REMOVE_PRODUCT){

        let index = state.cart.indexOf(item.id);
        return {
            cart: [
                ...state.cart.slice(0, index),
                ...state.cart.slice(index + 1)
            ],
            total: Math.ceil(state.total - item.price)
        };
    }
    return state;
}

export default cartReducer;