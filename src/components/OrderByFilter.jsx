import React, {useContext, useState} from "react";
import "./OrderByFilter.css";
import {CartContext} from '../CartContext';

const OrderByFilter = ()=>{
    
    let {actualData, items} = useContext(CartContext);
    let [data, setData] = actualData;
    let [sort, setSort] = useState("");

    const handleOrderBy = (event)=>{
        sort = event.target.value;
        setSort(sort)

        data = data.slice().sort((a,b) => (
            sort === "highest"?
            ((a.price < b.price) ? 1 : -1):
            sort === "lowest"?
            ((a.price > b.price) ? 1 : -1):
            ((a.id < b.id) ? 1 : -1)
        ))

        setData(data);
    }

    return(
        <div className="order-by-container">
            <div> {data.length} product(s) found</div>
            <div>Order By: 
                <select value={sort} onChange={handleOrderBy}>
                    <option value="">Select</option>
                    <option value="lowest">Lowet to Highest</option>
                    <option value="highest">Highest to Lowest</option>
                </select>
            </div>
        </div>
    );
}

export default OrderByFilter;