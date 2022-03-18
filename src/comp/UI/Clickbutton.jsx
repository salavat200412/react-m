import React from "react";

const Clickbutton = props => {
    let url = "https://assainofthemist.tk/mineclick.wsgi/img/click-"+props.cf+".png"
    return(
        <div className="btn-click">
            <div id='click_button'>
                <div onClick={props.onClick}>
                    <img id='click_icon' src={url} width="160" height="160" alt=''/>
                </div>
            </div>
        </div>)
}

export default Clickbutton;