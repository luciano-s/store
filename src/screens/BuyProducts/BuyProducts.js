import React, { useState } from "react";

import { BuyProductsContainer } from "./style";
import { NavLink } from "react-router-dom";

import {Button, Modal} from "semantic-ui-react";
import {StyledFooter} from "../HomeScreen/style";


export const BuyProducts = ({ products, cost }) => {
    const randomValue = () => {
      return (50*Math.random()).toFixed(2)
    }
    const calculateTotal = () => {
      if (frete.value!==null) return cost + parseFloat(frete.value);
      return cost;
    }
    const [frete, setFrete] = useState( {shouldShow:false, value:null})
    const modalMessage =  "Sua compra no valor de R$"+calculateTotal()+" foi realizada com sucesso!";
    return (
    <>
        <BuyProductsContainer>
            <div style={{background: "white"}}>
              <h1 style={{background:"white"}}>Endereço de entrega: </h1>
              <h2 style={{background:"white"}}>Pepe B da Silva</h2>
              <h2 style={{background:"white"}}>Pepe Pereira 7</h2>
              <h2 style={{background:"white"}}>Jd. dos Sapos</h2>
              <h2 style={{background:"white"}}>Basedopólis</h2>
              <h2 style={{background:"white"}}>11110000</h2>
              <h2 style={{background:"white"}}>Telefone: 123456789</h2>
            </div>
            <NavLink to={"/user"}>
              Deseja alterar alguma informação? Clique aqui!
            </NavLink>
            <div style={{background:"white"}}>
              <div style={{background:"white"}}>
                <strong>Digite o CEP</strong>
                <input style={{margin:"0 0.5em 0 0.5em", background: "white"}}/>
                <Button onClick={()=>setFrete({shouldShow: true, value: randomValue()})}>Calcular</Button>
              </div>
              { frete.shouldShow && (
                <div style={{paddingTop:"1em", background:"white"}}>
                  <strong style={{background:"white"}}>Frete: R${frete.value}</strong>
                </div>
              )
              }
            </div>
        </BuyProductsContainer>
      <div style={{textAlign:"right", marginBottom: "10px", marginRight:"40px"}}>
        <h3>Total da Compra: <strong>R${calculateTotal()}</strong></h3>
      </div>
        <div style={{textAlign:"right", marginBottom: "10px", marginRight:"40px"}}>
          <Modal
            trigger={<Button>Confirmar Compra</Button>}
            header='Compra realizada com sucesso!'
            content={modalMessage}
            actions={[{ key: 'done', content: 'Ok', positive: true }]}
          />
        </div>
      <StyledFooter>
        Trabalho de WEB 2021 - Jediael Morais de Souza & Luciano Carlos Simeão Junior
      </StyledFooter>
    </>

    );
}