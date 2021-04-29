import React, {useContext, useState} from "react";
import { CartContext } from "../CartContext";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./Cart.css";
import Checkout from "./Checkout";


const Cart = (props)=>{

    let {items} = useContext(CartContext);
    let [itemsInCart, setItemsInCart] = items;
    let [active, setActive] = useState(false)
    let [visible, setVisible] = useState("visible");

    const changeVisible = ()=>{
        visible ="visible";
        setVisible(visible);
    }

    const changeActive = ()=>{
        active = !active;
        setActive(active);
    }

    const handleCart = (event)=>{
        visible = "hidden"
        setVisible(visible);
        active = !active
        setActive(active)
    }

    return(
        <div className="checkout-cart-container">
            {visible === "visible" &&
            <div className="cart-container" onClick={handleCart}>
                <div><ShoppingCartIcon style={{fontSize:"40px",color:"whitesmoke"}}/></div>
                <div className="items"><span>{itemsInCart}</span></div>
            </div>}
            <div>
            {active && <Checkout changeVisible={changeVisible} changeActive={changeActive} />}
            </div>
        </div>
        
        
    );
}

export default Cart;
