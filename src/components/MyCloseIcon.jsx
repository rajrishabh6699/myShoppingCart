import React, {useContext} from "react";
import CloseIcon from '@material-ui/icons/Close';
import { CartContext } from "../CartContext";

const MyCloseIcon = (props)=>{

    let {setQuantity, checkoutData, items} = useContext(CartContext);
    let [itemsQuantity, setItemsQuantity] = setQuantity;
    let [checkoutItems, setCheckoutItems] = checkoutData;
    let [itemsInCart, setItemsInCart] = items;

    const handleCrossClick = ()=>{

        itemsInCart = itemsInCart - itemsQuantity[props.id];
        setItemsInCart(itemsInCart)
        
        itemsQuantity[props.id] = 0;
        setItemsQuantity(itemsQuantity)
        
        checkoutItems = checkoutItems.filter((product)=> product.id !== props.id);
        setCheckoutItems(checkoutItems);
    }
    return(
        <CloseIcon onClick={handleCrossClick} />
    );
}

export default MyCloseIcon;
