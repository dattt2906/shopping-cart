import "./product.css"
export const Product=()=>{

    return(
        <>
        <div className="product">
            <div><img src="model.png" className="model-photo"></img></div>
            <div>  <b>Product Name</b></div>
             <div> <b>$26</b></div>
                <div className="btn-cart"><button className="btn-add-cart">Add To Cart</button></div>
            
        </div>
        
        </>
    )
}