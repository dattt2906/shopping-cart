
import "./content.css"
import { Product } from "../product/product"
export const Content=()=>{

    return(

        <>
        <div className="content">
            <div className="list-product">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
           
            </div>
            <div className="page"></div>
        </div>
        </>
    )
}