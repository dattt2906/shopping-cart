import { TProduct } from "../typeProduct/type"
import { ADD_PRODUCT } from "./Contant"
interface ProductProps {
    product: TProduct
}

export const initState = {
    products: [] as TProduct[]
}
function reducer(state: { products: TProduct[] }, action: { type: string, payload?: TProduct }){

    switch (action.type) {
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload!]
            }

        default:
            return state

    }
        
    }

export default reducer