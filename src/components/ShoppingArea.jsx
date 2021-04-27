import React, {useContext} from "react";
import CartItem from "./CartItem"
import "./ShoppingArea.css";
import {CartContext} from '../CartContext';


const ShoppingArea = (props)=>{
    let {actualData, items} = useContext(CartContext);
    let [data, setData] = actualData;
    return(
        <div>
            <div className="flex-container">
                {data.map((product)=> <CartItem key={product.id} {...product} />)}
            </div>
        </div>
        
    );

}

export default ShoppingArea;
