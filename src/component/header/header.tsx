import "./header.css"
export const Header = () => {

    return (


        <>
            <div className="header">
                <div className="logo">
                    <img alt="Anh loi" src="Group2.png"></img>

                </div>
                <div className="cart">
                    <img src="Frame2.png" alt="Anh loi"></img>
                </div>
            </div>
            <div className="Modal-cart">
                <div className="header-modal">
                    <div className="header-photo-modal"><img src="Frame2.png"></img></div>
                    <div className="header-text-modal"><b>Cart</b></div>
                </div>
                <div className="content-modal-cart">
                    <div className="list-product-detail">
                        <div className="product-detail"><div className="photo-detail"><img src="photomodal.png"></img></div>
                            <div className="content-detail">
                                <text>ProductName</text>
                                <div className="size">
                                    <text>Size|Style</text>
                                    <text className="price"> $10.00</text>
                                </div>
                                <div className="quantity">
                                    <text>Quantity</text>
                                    <div className="btn-quantity"><button>-</button>
                                        <button>+</button></div>

                                </div>
                            </div>



                        </div>
                    </div>
                </div>


                <div className="subtotal-modal">
                    <div className="subtotal-price">
                        <b>Subtotal</b>
                        <text>$0.00</text>
                    </div>

                    <button className="btn-checkout">Checkout</button>

                </div>
                <div></div>
            </div>


        </>
    )


}