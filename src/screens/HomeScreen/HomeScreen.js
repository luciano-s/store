import { BrowserRouter, NavLink, Route, Router, Switch } from "react-router-dom";

import React, { useState } from "react";

import { BookContainer, BookListContainer, DescriptionContainer, Header } from  "./style.js";
import { Dropdown, Image, Button, Popup } from "semantic-ui-react";
import {Products} from "../../products.json";


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

    return (
        <>
            <NavBar/>
            <Switch>
                <Route exact path="/"  render={()=><ProductList products={products}/>} />
                <Route exact path="/orders"  render={()=><div>Meus pedidos</div>}/>
                <Route exact path="/user" render={()=><div>user</div>} />
            </Switch>
        </>
    );
}

export const ProductList = ({ products }) => {

    const [selectedProducts, setSelectedProducts] = useState([]);
    const [selectedCategories, setselectedCategories] = useState([]);

    const handleItem = (item)=>{
        return(
            console.log(selectedProducts)   
        );
    }
    
    const options = [
        { key: 'angular', text: 'Angular', value: 'angular' },
        { key: 'css', text: 'CSS', value: 'css' },
        { key: 'design', text: 'Graphic Design', value: 'design' },
        { key: 'ember', text: 'Ember', value: 'ember' },
        { key: 'html', text: 'HTML', value: 'html' },
        { key: 'ia', text: 'Information Architecture', value: 'ia' },
        { key: 'javascript', text: 'Javascript', value: 'javascript' },
        { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
        { key: 'meteor', text: 'Meteor', value: 'meteor' },
        { key: 'node', text: 'NodeJS', value: 'node' },
        { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
        { key: 'python', text: 'Python', value: 'python' },
        { key: 'rails', text: 'Rails', value: 'rails' },
        { key: 'react', text: 'React', value: 'react' },
        { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
        { key: 'ruby', text: 'Ruby', value: 'ruby' },
        { key: 'ui', text: 'UI Design', value: 'ui' },
        { key: 'ux', text: 'User Experience', value: 'ux' },
      ]

    return(
        <>
            <Dropdown placeholder='Busca por Categorias' fluid multiple selection options={options} />
            <BookListContainer>
                {products.map(
                    product =>
                    <BookContainer>    
                            <Image 
                                style={{cursor: "pointer", width: "13em", height: "15em"}} 
                                src={product.img} 
                                onClick={() => handleItem(product)} 
                            />     
                            <DescriptionContainer>  
                                <strong>{product.name}</strong>{" "}
                                {product.price}
                                <span style={{color:"gray"}}>{product.author}</span>
                                <Popup 
                                    content='Adicionar ao carrinho'
                                    trigger={
                                    <Button
                                        style={{width:"50%"}}
                                        onClick={()=>{
                                            setSelectedProducts([product.id, ...selectedProducts]);
                                        }}
                                        icon='cart'
                                    />} 
                                />
                            </DescriptionContainer>
                    </BookContainer>
            )
        }
        </BookListContainer>
    </>
    );
}
