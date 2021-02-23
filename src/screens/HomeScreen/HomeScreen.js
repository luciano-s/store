import { NavLink, Route, Switch } from "react-router-dom";

import React, { useEffect, useState } from "react";

import { AlignedDropdown, BookContainer, BookListContainer, DescriptionContainer, Header } from  "./style.js";
import { Button, Dimmer, Dropdown,  Image,  Loader, Popup } from "semantic-ui-react";
import { Products } from "../../products.json";
import { Orders } from "../Orders";

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
    
    const handleChange = product => {
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

    return (
        <>
            <NavBar/>
            <Switch>
                <Route exact path="/"  render={()=><ProductList onChange={handleChange} selectedProducts={ selectedProducts }/>} />
                <Route exact path="/orders"  render={()=><Orders orders={selectedProducts}/>}/>
                <Route exact path="/user" render={()=><div>user</div>} />
            </Switch>
        </>
    );
}

export const ProductList = (props) => {

    const [selectedCategories, setselectedCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [buttonEnabled, setButtonEnabled] = useState(true);
    const [selectedButtons, setSelectedButtons] = useState([]);
    
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
            <AlignedDropdown>
                <Dropdown
                    placeholder='Busca por Categorias' 
                    onChange={ (e, { value }) =>{
                        setselectedCategories([...selectedCategories, e.target.textContent]);
                    }}
                    fluid 
                    multiple 
                    selection 
                    options={options} 
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
                                        active={buttonEnabled}
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
