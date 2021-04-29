import React, { createContext, useState} from 'react';
import productsData from "./data.json";

export const CartContext = createContext();

export const CartProvider = (props)=>{
    let information = productsData.products;
    let [data, setData] = useState(productsData.products);
    let [itemsInCart, setItemsInCart] = useState(0);

    let [checkoutItems, setCheckoutItems] = useState([])

    let tempArr = {
        0:0,
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0,
        7:0,
        8:0,
        9:0,
        10:0,
        11:0,
        12:0,
        13:0,
        14:0,
        15:0,
        16:0,
    }

    let [itemsQuantity, setItemsQuantity] = useState(tempArr);
    let finalAmount = 0;

    for(let i =0; i < checkoutItems.length;i++){
        let eleId = checkoutItems[i].id
        let elePrice = checkoutItems[i].price
        finalAmount = finalAmount + itemsQuantity[eleId] * elePrice;
    }

    finalAmount = finalAmount.toFixed(2)


    return(
        <CartContext.Provider value={{actualData: [data, setData], items:[itemsInCart,setItemsInCart], information:information, finalAmount:finalAmount,checkoutData:[checkoutItems, setCheckoutItems], setQuantity:[itemsQuantity, setItemsQuantity]}}>
            {props.children}
        </CartContext.Provider>
    );
}


