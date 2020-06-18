// const { useState } = require("react")

import React, {useState} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import styled from 'styled-components';
import Icon from '../assets/icon (1).png';
import APIURL from '../helpers/environment';

const RestaurantCreate = (props) => {
    const [zipcode, setZipcode] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [topping, setTopping] = useState('');
    const [soup, setSoup] = useState(''); 

    const handleSubmit = (e) => {
        console.log({info: {zipcode: zipcode, name: name, price: price, topping: topping, soup: soup}})
        e.preventDefault();
        fetch(`${APIURL}/info/create`, {
            method: 'POST',
            body: JSON.stringify({info: {zipcode: zipcode, name: name, price: price, topping: topping, soup: soup}}),
            headers: new Headers({
                'Content-type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            setZipcode('');
            setName('');
            setPrice('');
            setTopping('');
            setSoup('')
            props.fetchRestaurants();
        })
        .catch(err => console.log(err))
    }

    const Title = styled.p`
        text-align: left;
        font-size: 30px;
        font-weight:700;
        font-family: 'Gloria Hallelujah', cursive;
        margin: 30px auto; 
    `;

    const Image = styled.img`
        width: 50px;
    `;

    const Addbtn = styled.div`
        height: 40px;
        width: 80px;
        text-align: center;
        font-family: 'Gloria Hallelujah', cursive;
        font-weight: 700;
    `;
    
    return(
        <>
        <Title><span><Image src={Icon} alt='icon'></Image></span> Register your restaurant</Title>
        <Form onSubmit={handleSubmit}>
            <Row form>
                <Col md={1}>
                    <FormGroup>
                        <Label htmlFor="zipcode">Zip</Label>
                        <Input type="text" name="zip" value={zipcode} onChange={(e)=> setZipcode(e.target.value)}/>
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label htmlFor="name">Restaurant Name</Label>
                        <Input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)}/>
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                        <Label htmlFor="price">Price ($: choose one)</Label>
                        <Input type="select" name="price" value={price} onChange={(e)=> setPrice(e.target.value)}>
                        <option value="under 10">under $10</option>
                        <option value="10 - 15">$10 - 15</option>
                        <option value="15 - 20">$15 - 20</option>
                        <option value="over 20">over $20</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label htmlFor="topping">Topping</Label>
                        <Input type="text" name="topping" value={topping} onChange={(e)=> setTopping(e.target.value)}/>
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label htmlFor="soup">Soup type (choose one)</Label>
                        <Input type="select" name="soup" value={soup} onChange={(e)=> setSoup(e.target.value)}>
                        <option value="salt">Salt (塩 Shio)</option>
                        <option value="soy sauce">Soy sauce (醤油 Shoyu)</option>
                        <option value="miso">Miso (味噌 Bean paste)</option>
                        <option value="Tonkotsu">Tonkotsu (豚骨 Pork born)</option>
                        </Input>
                    </FormGroup>
                </Col>
            <Addbtn><Button>Add</Button></Addbtn>
            </Row>
        </Form>
        </>
    );
}

export default RestaurantCreate;

