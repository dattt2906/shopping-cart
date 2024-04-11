import "./product.css"
import { TProduct } from "../../typeProduct/type"
import { Products } from "../Data/data"
import { useReducer } from "react"
import { error } from "console"


interface ProductProps {
    product: TProduct,
    addToModalCart: (product: TProduct) => void;
}
//1 initStage



export const Product = ({ product,addToModalCart }: ProductProps) => {
  
    return (
        <>
            <div className="product">
                <div className="model-photo"><img src={product.src}></img></div>

                <div className="name-product"><b>{product.title}</b></div>
                <hr className="line-tag"></hr>
                <div className="price-product">$<b>{product.price}</b></div>
                <div className="btn-cart"><button className="btn-add-cart" onClick={()=>addToModalCart(product)}>Add To Cart</button></div>

            </div>

        </>
    )
}