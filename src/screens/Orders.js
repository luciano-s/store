import { useReducer } from "react";

export const Orders = ({ orders }) => {
    console.log(orders);
    const reducer = (accumulator, currentValue) => parseFloat(accumulator + parseFloat(currentValue.price));

    const total = () =>{
        return orders.reduce(reducer, 0)
    }
    return(
        <div>
            Meus produtos:
            {orders.map(selected =>
            (<div>
                {selected.name}
            </div>))}
            <div>
                total: R${total()}
            </div>
        </div>
    )
}