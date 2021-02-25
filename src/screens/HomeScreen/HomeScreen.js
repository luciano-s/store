import { NavLink, Route, Switch } from "react-router-dom";

import React, { useEffect, useState } from "react";

import { Button, Dimmer, Dropdown,  Image,  Loader, Popup } from "semantic-ui-react";

import { Orders } from "../Orders";
import { BuyProducts } from "../BuyProducts/BuyProducts";

import {
    AlignedDropdown,
    BookContainer,
    BookListContainer,
    DescriptionContainer,
    Header,
    HomeScreenContainer
} from "./style.js";

import { Products } from "../../products.json";
import { Categories } from "../../categories.json";

export const NavBar = () => { 
    return (
        <Header>
            <NavLink to="/">
                <h1 style={{color:"gray"}}>BookStore</h1>
            </NavLink>
            <NavLink to="/orders" className="link">
                Meus Pedidos
            </NavLink>
            <NavLink to="/user"  className="link">
                Minha Página
            </NavLink>
        </Header>
    );
}

export const HomeScreen = () => {
    const products = Products;
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [total, setTotal] = useState(0);

    const handleChange = (product) => {
        if(selectedProducts.length > 0){
            setSelectedProducts(
                [
                    ...selectedProducts.filter(
                        selected => selected.id !== product.id
                    ), product
                ]
            );
        }
        else {
            setSelectedProducts([product]);
        }
    }

    const handleTotalShopPrice = (price) => {

      if (price !== undefined) setTotal(total + parseFloat(price));
      console.log(total);
    }

    return (
        <>
            <HomeScreenContainer>
                <NavBar/>
                <Switch>
                    <Route exact path="/"
                      render={()=><ProductList onChange={handleChange}
                      selectedProducts={ selectedProducts }/>}
                    />
                    <Route exact path="/orders"
                      render={()=><Orders orders={selectedProducts}
                      handlePrice={handleTotalShopPrice}/>}
                    />
                    <Route exact path="/user"
                      render={()=><div>user</div>}
                    />
                    <Route exact path="/buy"
                      render={()=><BuyProducts products={selectedProducts} cost={total}/>}
                    />
                </Switch>
            </HomeScreenContainer>
        </>
    );
}

export const ProductList = (props) => {

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const categories = Categories;

    useEffect(() => {
        const retrieveProducts = () =>  {
            (selectedCategories && selectedCategories.length !== 0) ?
                setProducts(
                    Products.filter(
                        product => selectedCategories.includes(product.category)
                    )
                ):
                setProducts(Products)
        };

        retrieveProducts();
    }, [selectedCategories])

    return(
        <>
            <AlignedDropdown>
                <Dropdown
                    placeholder='Busca por Categorias' 
                    onChange={ (e, { value }) =>{
                        const withoutDuplicate = [...new Set([...selectedCategories, value])];
                        setSelectedCategories(...withoutDuplicate);
                    }}
                    fluid
                    multiple
                    selection
                    options={categories}
                />
            </AlignedDropdown>
            <BookListContainer>
                {products ? products.map(
                    product =>
                    <BookContainer>    
                            <Image 
                                style={{cursor: "pointer", width: "13em", height: "15em"}} 
                                src={product.img} 
                            />     
                            <DescriptionContainer>  
                                <strong>{product.name}</strong>{" "}
                                R${product.price}
                                <span style={{color:"gray"}}>{product.author}</span>
                                <Popup 
                                    content='Adicionar ao carrinho'
                                    trigger={
                                    <Button 
                                        key={product.id}
                                        style={{width:"50%"}}
                                        onClick={ () =>{
                                            props.onChange(
                                                product
                                            );
                                        }
                                        }
                                        icon='cart'
                                    />} 
                                />
                            </DescriptionContainer>
                    </BookContainer>
            ):(
                <Dimmer active>
                    <Loader />
                </Dimmer>
            )
        }
        </BookListContainer>
    </>
    );
}
