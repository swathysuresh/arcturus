import * as actionTypes from '../constants/productConstants';

export const productReducer = (state = { products:[]},action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCTS_REQ:
            return{
                loading:true,
                products:[],

            }
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return{
                loading:false,
                products:action.payload,
            }
        case actionTypes.GET_PRODUCTS_FAIL:
            return{
                loading:false,
                error:action.payload,
            }
        default:
            return state;
    }
}