import { BrowserRouter, NavLink, Route, Router, Switch } from "react-router-dom";

import React, { useState } from "react";

import { Header, DescriptionContainer } from  "./style.js";
import { Image, Grid, GridColumn, GridRow, Button, Popup } from "semantic-ui-react";
import {Products} from "../../products.json";

// TODO: setar imagens e redirecionamentos

export const NavBar = () => { 
    return (
        <Header>
            <NavLink to="/" activeClassName="is-active">
                Home
            </NavLink>
            <NavLink to="/orders" activeClassName="is-active">
                Meus Pedidos
            </NavLink>
            <NavLink to="/user"  activeClassName="is-active">
                Minha Página
            </NavLink>
        </Header>
    )
}

export const HomeScreen = () => {
    const products = Products;
    const [activeRoute, setActiveRoute] = useState(null);
    
    return (
        <>
            <NavBar/>
            <Switch key={1}>
                <Route exact path="/"  render={()=><div>home</div>} />
                <Route exact path="/orders"  render={()=><ProductList products={products}/>}/>
                <Route exact path="/user" render={()=><div>user</div>} />
            </Switch>
        </>
    );
}

export const ProductList = ({ products }) => {

    const handleItem = (item)=>{
        return(
            console.log(item)   
        );
    }
    return(
        <Grid style={{padding: "2rem"}} columns={3} centered={true}>
            {products.map(
                product =>
                <GridRow centered >
                    <GridColumn width={2} verticalAlign="middle">
                        <Image 
                            style={{cursor: "pointer", width: "13em", height: "15em"}} 
                            src={product.img} 
                            onClick={() => handleItem(product)} 
                        />     
                        <DescriptionContainer>  
                            <strong>{product.name}</strong>{" "}
                            {product.price}
                            <Popup content='Adicionar ao carrinho' trigger={<Button icon='add'/>} />
                        </DescriptionContainer>
                    </GridColumn>
                    <GridColumn width={8} centered style={{display:"flex", alignItems:"center"}}>
                        <span style={{textAlign:"justify"}}>{product.description}</span>
                    </GridColumn>
                </GridRow>
                )
            }
        </Grid>
    );
}
