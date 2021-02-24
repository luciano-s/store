import {BookCartContainer, DescriptionContainer, MyOrders} from "../screens/HomeScreen/style";
import { EmptyCartContainer } from "../screens/HomeScreen/style";
import {Button, Image, Popup} from "semantic-ui-react";
import React from "react";
import {NavLink} from "react-router-dom";


export const Orders = ({ orders }) => {
    console.log(orders);
    const reducer = (accumulator, currentValue) => parseFloat(accumulator + parseFloat(currentValue.price));

    const total = () =>{
        return orders.reduce(reducer, 0)
    }
    if(orders.length === 0) return <EmptyCart/>;

    return(
        <MyOrders>
            <h1>Produtos Adicionados ao carrinho:</h1>
            {orders.map(
                order =>
                    <BookCartContainer>
                        <Image
                            style={{cursor: "pointer", width: "13em", height: "15em"}}
                            src={order.img}
                        />
                        <DescriptionContainer>
                            <h2>{order.name}</h2>{" "}
                            <h3>Preço: R${order.price}</h3>
                        </DescriptionContainer>

                    </BookCartContainer>
            )
            }
            <div style={{textAlign:"right", marginBottom: "10px", marginRight:"40px"}}>
                <h3>Subtotal: <strong>R${total().toFixed(2)}</strong></h3>
            </div>
            <div style={{textAlign:"right", marginBottom: "10px", marginRight:"40px"}}>
                <Button as={NavLink} to={"/buy"}>
                Confirmar Compra
            </Button>
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