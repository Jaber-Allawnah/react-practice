import React from "react";
import './Label.css';
const Label=(props)=>{
    return(
        <label className="label " >{props.myXValue}</label>
    );
}
export default Label;