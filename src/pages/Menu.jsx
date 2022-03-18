import React, {Fragment, useState} from 'react';
import Title from "../comp/UI/Title";
import Clickbutton from "../comp/UI/Clickbutton";
import ButtonMain from "../comp/UI/ButtonMain";
import Img from "../comp/UI/Img"
import Shop from "./Shop";
import {
	Icon28Users3Outline,
	Icon28ShoppingCartOutline,
	Icon28GiftOutline,
	Icon28MoneyTransferOutline,
	Icon28CubeBoxOutline
} from '@vkontakte/icons';

const Menu = props => {
	const [cf, money, balance_, click_speed] = props.data;
	const [balance, SetBalance] = useState(balance_);
	return (
    	<Fragment>
    	    <Title
				title = 'Главная'
			/>
			<div className="balance">
				<div className="coin">
					<Img
						bezbab="coin.png"
						width={25}
						height={25}
					/>
					<p className="bal">{money}</p>
				</div>
				<div className="coin">
					<Img
						bezbab="dirt.png"
						width={25}
						height={25}
					/>
					<p className="bal">{balance}</p>
				</div>
			</div>
			<Clickbutton
				onClick={() => SetBalance(balance+click_speed)}
				cf = {cf}
			/>
			<div className="button">
				<ButtonMain
					component ={<Shop/>}
					name = 'Рейтинг'
					icon = {<Icon28Users3Outline width={25} height={25}/>}
				/>
				<ButtonMain
					component ={<Shop/>}
					name = 'Магазин'
					icon = {<Icon28ShoppingCartOutline width={25} height={25}/>}
				/>
			</div>
			<div className="button">
				<ButtonMain
					component ={<Shop/>}
					name = 'Бонус'
					icon = {<Icon28GiftOutline width={25} height={25}/>}
				/>
				<ButtonMain
					component ={<Shop/>}
					name = 'Перевод'
					icon = {<Icon28MoneyTransferOutline width={25} height={25}/>}
				/>
			</div>
			<div className="button">
				<ButtonMain
					component ={<Shop/>}
					name = 'Инвентарь'
					icon = {<Icon28CubeBoxOutline width={25} height={25}/>}
				/>
			</div>
    	</Fragment>
    );
}

export default Menu;
