import { TProduct } from "../typeProduct/type";
import { ADD_PRODUCT } from "./Contant";

interface ProductProps {
    product: TProduct
}
export const add_product=(product:ProductProps)=>({
    
        type:ADD_PRODUCT,
        payload:product


})