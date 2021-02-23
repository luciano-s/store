import {BookContainer, MyOrders} from "../screens/HomeScreen/style";
import { EmptyCartContainer } from "../screens/HomeScreen/style";
import {Image} from "semantic-ui-react";
import React from "react";


export const Orders = ({ orders }) => {
    console.log(orders);
    const reducer = (accumulator, currentValue) => parseFloat(accumulator + parseFloat(currentValue.price));

    const total = () =>{
        return orders.reduce(reducer, 0)
    }
    if(orders.length === 0) return <EmptyCart/>;

    return(
        <MyOrders>
            Meus produtos:
            {orders.map(selected =>
            (<div>
                {selected.name}
            </div>))}
            <div>
                total: R${total()}
            </div>
        </MyOrders>
    )
}
const imageLocation = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fzero51carnes.com.br%2Fpub%2Fstatic%2Fversion1602093652%2Ffrontend%2FCiano%2FZero51Carnes%2Fpt_BR%2Fimages%2Fempty-shopping-cart-icon.png&f=1&nofb=1";
export const EmptyCart = () => {
    return (
        <EmptyCartContainer>
            <Image
                style={{alignContent:"center", cursor: "pointer", width: "40em", height: "20em"}}
                src={imageLocation}
            />
            <h1>
                Parece que o seu carrinho está vazio! Adicione um item  e tente novamente.
            </h1>
        </EmptyCartContainer>
        )
}