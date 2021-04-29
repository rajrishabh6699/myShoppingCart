import React, {useContext} from "react";
import { CartContext } from "../CartContext";
import "./CartItem.css";

const CartItem = (props)=>{

    let {items, checkoutData, setQuantity} = useContext(CartContext);
    let [checkoutItems, setCheckoutItems] = checkoutData;
    let [itemsInCart, setItemsInCart] = items;
    let [itemsQuantity, setItemsQuantity] = setQuantity;

    let loc = `${props.sku}_1.jpg`;
    let url =  process.env.PUBLIC_URL + "/images/" + loc;

    const updateItemsInCart = ()=>{
        itemsInCart++;
        setItemsInCart(itemsInCart);

        if (itemsQuantity[props.id] === 0){
            checkoutItems.push(props);
            itemsQuantity[props.id]++
            setItemsQuantity(itemsQuantity);
        } else{
            itemsQuantity[props.id]++
            setItemsQuantity(itemsQuantity);
        }


        // checkoutItems.push(props);
        // setCheckoutItems(checkoutItems);
    }

    return(
        <div className="card-container">
            <div style={props.isFreeShipping?{backgroundColor:"black"}:{backgroundColor:"white"}} className="shipping">{props.isFreeShipping && <p>Free Shipping</p>}</div>
            <div className="image-container">
                <img src={url} alt={props.title} />
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