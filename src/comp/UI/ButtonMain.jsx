import React from "react";
import change_page from "../func/change_page";

const ButtonMain = props => {
    return(
        <div className="balbes" onClick={()=>change_page(props.component)}>
            {props.icon}
            <p>{props.name}</p>
        </div>
    )
}
export default ButtonMain;