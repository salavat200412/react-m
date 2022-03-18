import React from 'react';
import change_page from "../func/change_page";
import Menu from "../../pages/Menu";

const Title = props => {
    if (props.title === 'Главная') {
        return (
            <div className='headers'>
                <p>{props.title}</p>
            </div>
        )
    } else {
        return(
            <div className="headers">
                <div onClick={() => change_page(props.component)}>
                    <img src="https://assainofthemist.tk/mineclick.wsgi/img/back.svg"/>
                </div>
                <p>{props.title}</p>
            </div>
        )
    }
}
export default Title;