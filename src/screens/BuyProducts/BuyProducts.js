import React, { useState } from "react";

import { BuyProductsContainer } from "./style";
import { NavLink } from "react-router-dom";

import { Button } from "semantic-ui-react";
import {MyOrders} from "../HomeScreen/style";

export const BuyProducts = ({ products }) => {
    const randomValue = () => {
      return (50*Math.random()).toFixed(2)
    }
    const calculateTotal = () => {
      if (frete.value!==null) return 45 + frete.value;
      return 45;
    }
    const [frete, setFrete] = useState( {shouldShow:false, value:null})
    console.log(frete);
    return (
    <>
        <BuyProductsContainer>
            <div>
              <h1>Endereço de entrega: </h1>
              <h2>Pepe B da Silva</h2>
              <h2>Pepe Pereira 7</h2>
              <h2>Jd. dos Sapos</h2>
              <h2>Basedopólis</h2>
              <h2>11110000</h2>
              <h2>Telefone: 123456789</h2>
            </div>
            <NavLink to={"/user"}>
              Deseja alterar alguma informação? Clique aqui!
            </NavLink>
            <div>
              <div>
                <strong>Digite o CEP</strong>
                <input style={{margin:"0 0.5em 0 0.5em"}}/>
                <Button onClick={()=>setFrete({shouldShow: true, value: randomValue()})}>Calcular</Button>
              </div>
              { frete.shouldShow && (
                <div style={{paddingTop:"1em"}}>
                  <strong>Frete: R${frete.value}</strong>
                </div>
              )
              }
            </div>
        </BuyProductsContainer>
      <div style={{textAlign:"right", marginBottom: "10px", marginRight:"40px"}}>
        <h3>Total da Compra: <strong>R${calculateTotal()}</strong></h3>
      </div>
        <div style={{textAlign:"right", marginBottom: "10px", marginRight:"40px"}}>
          <Button as={NavLink} to={"/buy"}>
            Confirmar Compra
          </Button>
        </div>
    </>

    );
}