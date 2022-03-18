import React, {Fragment} from "react";
import Title from "../comp/UI/Title";
import ButtonShop from "../comp/UI/ButtonShop";
/*import {} from "@vkontakte/icons"*/

const Shop = props => {
    return(
        <Fragment>
            <Title
                title="Магазин"
            />
            <div className="two_button-shop">
                <ButtonShop
                    url='1'
                    name='Яблочко'
                    plus={1}
                />
                <ButtonShop
                    url='2'
                    name='Яблочко'
                    plus={2}
                />
            </div>
            <div className="two_button-shop">
                <ButtonShop
                    url='3'
                    name='Яблочко'
                    plus={3}
                />
                <ButtonShop
                    url='4'
                    name='Яблочко'
                    plus={4}
                />
            </div>
            <div className="two_button-shop">
                <ButtonShop
                    url='5'
                    name='Яблочко'
                    plus={5}
                />
                <ButtonShop
                    url='6'
                    name='Яблочко'
                    plus={6}
                />
            </div>
            <div className="two_button-shop">
                <ButtonShop
                    url='7'
                    name='Яблочко'
                    plus={7}
                />
                <ButtonShop
                    url='8'
                    name='Яблочко'
                    plus={8}
                />
            </div>
        </Fragment>
    )
}
export default Shop;