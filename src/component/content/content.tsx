
import "./content.css"
import { Product } from "../product/product"
import { useEffect, useState, useReducer, useContext } from "react"
import { Products } from "../Data/data"
import { TProduct } from "../../typeProduct/type"
import Context from "../../store/Context"
import { add_product } from "../../store/Action"


interface ProductProps {
    product: TProduct
}
// //1 initStage
// const initState = {
//     products: [] as TProduct[]
// }
// //2 Action
// const ADD_PRODUCT = "add-product"







//3 Reducer

export const Content = () => {
    const [state,dispatch] = useContext(Context)
    console.log("state:", state)
    const [products, setProducts] = useState<TProduct[]>([]);


    useEffect(() => {

        setProducts(Products.products)
    }, [])

   

    const addToModalCart = (product: TProduct) => {
        dispatch(add_product({product}))


    }
    return (

        <>
            <div className="content">
                <div className="list-product">
                    {products && products.length > 0 && products.map((product, index) => {
                        return (
                            <Product
                                key={product.id}
                                product={product}
                                addToModalCart={() => addToModalCart(product)}

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