import styled from "styled-components";

export const BuyProductsContainer = styled.div`
  &&{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 5rem;
    padding: 3rem;
    background: white;
    border: 0.5px solid black;
    -moz-box-shadow: 0.5px 0.5px 0.5px 0.5px #999;
    -webkit-box-shadow: 0.5px 0.5px 0.5px 0.5px #999;
    box-shadow: 0.5px 0.5px 0.5px 0.5px #999;
    h1 {
      font-size: 1.5em;
    }
    h2{
      font-size: 1em;
    }
  }
`;