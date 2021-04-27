import React, {useContext} from "react";
import { CartContext } from "../CartContext";
import "./CartItem.css";

const CartItem = (props)=>{

    let {actualData, items} = useContext(CartContext);
    let [data, setData] = actualData;
    let [itemsInCart, setItemsInCart] = items;

    let loc = `${props.sku}_1.jpg`;
    let url =  process.env.PUBLIC_URL + "/images/" + loc;

    const updateItemsInCart = ()=>{
        itemsInCart++;
        setItemsInCart(itemsInCart);
    }

    return(
        <div className="card-container">
            <div className="image-container">
                <img src={url} alt="clothing_product"/>
            </div>
            <div className="card-title">
            {props.title}
            </div>
            <div className="card-price">$<span>{props.price}</span> </div>
            <button onClick={updateItemsInCart}>Add To Cart</button>
        </div>
    );
}


export default CartItem;