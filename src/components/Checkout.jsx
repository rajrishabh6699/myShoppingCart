import React, {useContext} from "react";
import CloseIcon from '@material-ui/icons/Close';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./Checkout.css";
import CheckoutCard from "./CheckoutCard";
import { CartContext } from "../CartContext";

const Checkout = (props)=>{

    let {checkoutData, items, finalAmount} = useContext(CartContext);
    let [itemsInCart,setItemsInCart] = items;
    let [checkoutItems, setCheckoutItems] = checkoutData;
 
    const handleClose = (event)=>{
        props.changeVisible();
        props.changeActive();
    }

    return(
        <div className="checkout-container">
            <div className="icon-container">
                <div className="close" onClick={handleClose}>
                    <CloseIcon style={{fontSize:"40px",color:"whitesmoke"}} />
                </div>
                <div className="cart-container">
                    <div><ShoppingCartIcon style={{fontSize:"40px",color:"whitesmoke"}}/></div>
                    <div className="items"><span>{itemsInCart}</span></div>
                </div>
            </div>

            <div className="checkout-content">
                <div className="summary">
                    <h1>Cart</h1>
                    {checkoutItems.length === 0 
                    ?
                    <div style={{textAlign: "center",
                    fontSize: "15px"}}>
                        <p>Add Some Products in the cart</p>
                        <p>:)</p>
                    </div>
                    :
                    checkoutItems.map((item)=> <CheckoutCard key={item.id} {...item} />)
                    }
                </div>
                <div className="subtotal">
                    <div className="amount">
                        <div style={{color:"#696969", fontSize:"15px", marginTop:"15px"}}><p>SUBTOTAL</p></div>
                        <div style={{color:"#e6bd08", fontSize:"22px"}}><p>$ {finalAmount} </p></div>
                    </div>
                    <div className="checkout-button">
                        <button>CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;