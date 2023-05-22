import React,{useState} from "react";

function Items(props){
    return(
        <li onClick={()=>{
            props.onChecked(props.id)
        }} >{props.value}</li>
    )
}
export default Items;