import "./product.css"
import { TProduct } from "../../typeProduct/type"
import { Products } from "../Data/data"


interface ProductProps{
    product:TProduct
}
export const Product=({product}:ProductProps)=>{
    const addToModalCart=()=>{


        
    }
    
    return(
        <>
        <div className="product">
            <div  className="model-photo"><img src={product.src}></img></div>
            
            <div className="name-product"><b>{product.title}</b></div>
            <hr className="line-tag"></hr>
             <div className="price-product">$<b>{product.price}</b></div>
                <div className="btn-cart"><button className="btn-add-cart" onClick={addToModalCart}>Add To Cart</button></div>
            
        </div>
        
        </>
    )
}