import React, { createContext, useState} from 'react';
import productsData from "./data.json";

export const CartContext = createContext();

export const CartProvider = (props)=>{
    let [data, setData] = useState(productsData.products);
    let [itemsInCart, setItemsInCart] = useState(0);

    return(
        <CartContext.Provider value={{actualData: [data, setData], items:[itemsInCart,setItemsInCart] }}>
            {props.children}
        </CartContext.Provider>
    );
}
