import React, {useContext} from "react";
import { CartContext } from "../CartContext";

const Cart = (props)=>{

    let {actualData, items} = useContext(CartContext);
    let [itemsInCart, setItemsInCart] = items;

    return(
        <h2>{itemsInCart}</h2>
    );
}

export default Cart;