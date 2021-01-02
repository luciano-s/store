import { Link, Route, Router } from "react-router-dom";

import React from "react";
import { createBrowserHistory } from "history";
import { Header } from  "./style.js";
import { Image, Grid, GridColumn, GridRow } from "semantic-ui-react";

// TODO: setar imagens e redirecionamentos

export const HomeScreen = () => {
    const history = createBrowserHistory();
    const products = [
        {
            "id": "1",
            "name":"Produto",
            "price":"12",
            "img":"link-to-img"
        },
        {
            "id": "2",
            "name":"Produto 2",
            "price":"13",
            "img":"link-to-img"
        },
        {
            "id": "3",
            "name":"Produto 3",
            "price":"13",
            "img":"link-to-img"
        },
        {
            "id": "4",
            "name":"Produto 4",
            "price":"13",
            "img":"link-to-img"
        },
        {
            "id": "5",
            "name":"Produto 5",
            "price":"13",
            "img":"link-to-img"
        },
        {
            "id": "6",
            "name":"Produto 6",
            "price":"13",
            "img":"link-to-img"
        },
        {
            "id": "7",
            "name":"Produto 7",
            "price":"13",
            "img":"link-to-img"
        },
        {
            "id": "8",
            "name":"Produto 8",
            "price":"13",
            "img":"link-to-img"
        },
        {
            "id": "9",
            "name":"Produto 9",
            "price":"13",
            "img":"link-to-img"
        },
        {
            "id": "10",
            "name":"Produto 10",
            "price":"13",
            "img":"link-to-img"
        },
        {
            "id": "11",
            "name":"Produto 10",
            "price":"13",
            "img":"link-to-img"
        },
        {
            "id": "12",
            "name":"Produto 10",
            "price":"13",
            "img":"link-to-img"
        }
    ]
    return(
        <>       
            <Router history={history}>
            <Header>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.o2RveuoedKMcvRAIQXNkRQHaFV%26pid%3DApi&f=1" alt="Logo"></img>
                <Link to="/" className="link">
                    Home
                </Link>
                
                <Link to="/orders/" className="link">
                    Meus Pedidos
                </Link>
                <Link to="/user/" className="link">
                    Página do Usuário
                </Link>
            </Header>
            <Route path="/" component="HomeScreen"/>
            <Route path="/orders/" component="DivTeste"/>
            <Route path="/user/" componenent="DivTeste"/> 
            </Router>
            <ProductList  products={ products }/>
            <footer style={{display:"flex", color:"#ccc", justifyContent:"center", alignItems: "center", marginTop: "2rem", position: "relative", bottom: 0, background: "#444",width:"100vw", height:"15vh"}}>
                © 2021 Luciano Simeão
            </footer>
        </>
    );
}

const ProductList = ({ products }) => {

    const handleItem = (item)=>{
        return(
            console.log(item)
        );
    }
    return(
        <Grid style={{padding: "2rem"}} columns={3} centered={true} celled>
            {products.map(
                product =>
                <GridRow style={{cursor: "pointer"}} onClick={() => handleItem(product)}>
                    <GridColumn>{product.name}</GridColumn>
                    <GridColumn>{product.price}</GridColumn>
                    <GridColumn><Image src={product.img}/></GridColumn>
                </GridRow>
                )
            }
        </Grid>
    );
}

