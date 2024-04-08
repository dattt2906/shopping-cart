
import "./content.css"
import { Product } from "../product/product"
import { useEffect, useState } from "react"
import { Products } from "../Data/data"
import { TProduct } from "../../typeProduct/type"
export const Content=()=>{
    const[products, setProducts] =  useState<TProduct[]>([]);
    const [totalProducts, setTotalProducts]= useState(0);

    useEffect(()=>{

        setProducts(Products.products)
    },[])

    return(

        <>
        <div className="content">
            <div className="list-product">
            {products && products.length > 0 && products.map((product, index) => {
                            return (
                                <Product
                                    key={product.id}
                                    product={product}

                                   
                                     />
                            )
                        }


                        )

                        }
            </div>
            <div className="page">
                <div className="total-product"><b>{products.length} Products</b></div>
                <div className="number-page">

                        <select>
                        <option value="" disabled selected hidden>10/page</option>
                        </select>
                
                </div>
            </div>
        </div>
        </>
    )
}