import React from "react";
import './Button.css';
const Button=(props)=>{
    return(
        <button type="button" className="btn" onClick={props.increaseMyXValue} >{props.name}</button>
    );
    }
export default Button;