import "./header.css"
import { ProductDetails } from "./productDetails";
import { useContext } from "react";
import Context from "../../store/Context";
import { Product } from "../product/product";
export const Header = () => {

    const [state,dispatch] = useContext(Context)
    console.log("state at header:", state)

    const showCartModal = () => {
        var content = document.querySelector(".Show-Modal-Cart") as  HTMLElement;
        if (content) {
            content.style.display = "block";
        }
    }

    const cancelModal=()=>{
        var content = document.querySelector(".Show-Modal-Cart") as  HTMLElement;
        if (content) {
            content.style.display = "none";
        }
    

    }

    return (


        <>
            <div className="header">
                <div className="logo">
                    <img alt="Anh loi" src="Group2.png"></img>

                </div>
                <div className="cart" onClick={showCartModal}>
                    <img src="cart.png" alt="Anh loi"></img>
                </div>
            </div>
            <div className="Show-Modal-Cart">
            <div className="cancel-Modal" onClick={cancelModal}>
                <text>x</text>


            </div>
            <div className="Modal-cart">
                <div className="header-modal">
                    <div className="header-photo-modal"><img src="cart.png"></img></div>
                    <div className="header-text-modal"><b>Cart</b></div>
                </div>
                <div className="content-modal-cart">
                    <div className="list-product-detail">
                        
                        
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

            </div>


        </>
    )


}