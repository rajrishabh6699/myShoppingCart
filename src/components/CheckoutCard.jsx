import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import "./CheckoutCard.css";
import CloseIcon from '@material-ui/icons/Close';
import MyCloseIcon from "./MyCloseIcon";

const CheckoutCard = (props) => {
   
    let {setQuantity,} = useContext(CartContext);

    let [itemsQuantity, setItemsQuantity] = setQuantity;


    let loc = `${props.sku}_1.jpg`;
    let url =  process.env.PUBLIC_URL + "/images/" + loc;

    return (
        <div className="summary-card">
            <div className="imageC-container">
                    <img src={url} alt={props.title}/>
            </div>
            <div className="data-container">
                <div className="close-icon-container">
                    <MyCloseIcon id={props.id} />
                </div>
                
                <div className="title-container">{props.title}</div>
                <div className="desc-container">
                    <div>
                        <p>{props.availableSizes[0]}  |  {props.style}</p>
                    </div>
                    <div style={{marginRight:"20px", color:"#e6bd08"}}>
                        ${props.price}
                    </div>
                </div>
                <div className="quantity-container">Quantity: {itemsQuantity[props.id]} </div>
            </div>
        </div>
    )
}

export default CheckoutCard;