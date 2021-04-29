import React, {useState,useContext} from "react";
import { CartContext } from "../CartContext";
import "./SizeFilter.css";

const SizeFilter = ()=>{
    let{actualData, information} = useContext(CartContext);
    let [data, setData] = actualData
    let tempArr;

    let [activeStatus, setActiveStatus] = useState({
        S:false,
        XS:false,
        M:false,
        L:false,
        XL:false,
        XXl:false,
        ML:false,
    })

    let [sizeArray, setSizeArray] = useState([])

    const handleClick = (event)=>{
        let name = event.target.textContent
        activeStatus[name] = !(activeStatus[name])
        setActiveStatus(activeStatus);


        if(activeStatus[name]){
            sizeArray.push(name)
            setSizeArray(sizeArray)
        } else {
            let index = sizeArray.indexOf(name)
            let arr1 = sizeArray.slice(0,index)
            let arr2 = sizeArray.slice(index+1,)
            sizeArray = arr1.concat(arr2)
            setSizeArray(sizeArray)
        }

        if(sizeArray.length === 0){
            data = information;
            return setData(data)
        } else {
            data = []
            sizeArray.map((ele)=>{
                    tempArr = information.filter((product)=> product.availableSizes.indexOf(ele)>=0)
                    return data = [...data,...tempArr]
            })

            data = data.filter((value, index, self)=> {
                            return self.indexOf(value) === index;
                          })
            return setData(data)
        }

    }

    return(
        <div className="size-filter-container">
            <div className="size-title">Sizes:</div>
            <div className="select-container">
                <div className="select-size" style={activeStatus.S ? {border:"1px solid black"}: {border:"none"}}>
                    <p className="check-p" onClick={handleClick}>S</p>
                </div>
                <div className="select-size" style={activeStatus.XS ? {border:"1px solid black"}: {border:"none"}}>
                    <p className="check-p" onClick={handleClick}>XS</p>
                    </div>
                <div className="select-size" style={activeStatus.M ? {border:"1px solid black"}: {border:"none"}}>
                    <p className="check-p" onClick={handleClick}>M</p>
                    </div>
                <div className="select-size" style={activeStatus.L ? {border:"1px solid black"}: {border:"none"}} >
                    <p className="check-p" onClick={handleClick}>L</p>
                    </div>
                <div className="select-size" style={activeStatus.XL ? {border:"1px solid black"}: {border:"none"}}>
                    <p className="check-p" onClick={handleClick}>XL</p>
                    </div>
                <div className="select-size" style={activeStatus.XXL ? {border:"1px solid black"}: {border:"none"}}>
                    <p className="check-p" onClick={handleClick} >XXL</p>
                    </div>
                <div className="select-size" style={activeStatus.ML ? {border:"1px solid black"}: {border:"none"}}>
                    <p className="check-p" onClick={handleClick}>ML</p>
                    </div>   
            </div>
        </div>  
    )
}
    

export default SizeFilter;
