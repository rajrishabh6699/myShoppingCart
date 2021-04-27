import React, {useState,useContext} from "react";
import { CartContext } from "../CartContext";

const SizeFilter = ()=>{

    let [size, setSize] = useState("")
    let {actualData, items} = useContext(CartContext);
    let [data, setData] = actualData;
    let newData;

    const handleSizes = (event)=>{
        size = event.target.name;
        setSize(size);
        setSize(size);
        if (size === ""){
            setData(data)
        }else{
            newData = data.filter((product)=> product.availableSizes.indexOf(size)>=0);
            setData(newData);
        }
    }
    return(
        <div>
            <div>Sizes:</div>
            <button onClick={handleSizes} name="S">S</button>
            <button onClick={handleSizes} name="XS">XS</button>
            <button onClick={handleSizes} name="M">M</button>
            <button onClick={handleSizes} name="L">L</button>
            <button onClick={handleSizes} name="XL">XL</button>
            <button onClick={handleSizes} name="XXL">XXL</button>
            <button onClick={handleSizes} name="ML">ML</button>
        </div>
            
        
    )
}

export default SizeFilter;



//  <select value={size} onChange={handleSizes}>
//             <option value="">ALL</option>
//             <option value="S">S</option>
//             <option value="XS">XS</option>
//             <option value="M">M</option>
//             <option value="L">L</option>
//             <option value="XL">XL</option>
//             <option value="XXL">XXL</option>
//             <option value="ML">ML</option>
//             </select>