import React from "react";

const ButtonShop = props => {
    let url = 'https://assainofthemist.tk/mineclick.wsgi/img/upgrade-'+props.url+'.svg'
    return(
        <div className="button-shop">
            <div className="icon_img-shop">
                <img src={url} alt=''/>
            </div>
            <div className="desc-shop">
                <p>{props.name}</p>
                <div className="plus-shop">
                    <p>+{props.plus}</p>
                </div>
            </div>
            <div className="buy_button-shop"></div>
        </div>
    )
}
export default ButtonShop;