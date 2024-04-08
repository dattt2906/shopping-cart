// import "./productDetails.css"
export const ProductDetails=()=>{

    return(
<div className="product-detail">
                        
<div className="photo-detail">
    
<img src="photomodal.png"/>
</div>
<div className="content-detail">
    <div className="product-name"> <text>ProductName</text> </div>
   
    <div className="size-product">
        <text>Size | Style</text>
        <text className="price"> $10.00</text>
    </div>
    <div className="quantity">
        <text>Quantity</text>
        <div className="btn-quantity"><button>-</button>
            <button>+</button></div>

    </div>
    </div>

</div>
    )
}