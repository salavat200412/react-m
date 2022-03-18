import React from "react";

const Img = props => {
    let url = "https://assainofthemist.tk/mineclick.wsgi/img/"+props.bezbab
    return(
        <img src={url} width={props.width} height={props.height} alt=''/>
    )
}
export default Img;