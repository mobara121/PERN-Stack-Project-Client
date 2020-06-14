// const { useState } = require("react")

import React, {useState, useEffect} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import APIURL from '../helpers/environment';

const RestaurantCreate = (props) => {
    const [zipcode, setZipcode] = useState('');
    const [price, setPrice] = useState('');
    const [topping, setTopping] = useState('');
    const [soup, setSoup] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/info/create`, {
            method: 'POST',
            body: JSON.stringify({info: {zipcode: zipcode, price: price, topping: topping, soup: soup}}),
            headers: new Headers({
                'Content-type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            setZipcode('');
            setPrice('');
            setTopping('');
            setSoup('')
            props.fetchRestaurants();
        })
    }
    
    return(
        <>
        <h3>Restaurant Search</h3>
        <Form onSubmit={handleSubmit}>
            <Row form>
                <Col md={3}>
                    <FormGroup>
                        <Label htmlFor="zipcode">Zip</Label>
                        <Input type="text" name="zip" value={zipcode} onChange={(e)=> setZipcode(e.target.value)}/>
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label htmlFor="price">Price(choose one)</Label>
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
                        <Label htmlFor="soup">Soup type(choose one)</Label>
                        <Input type="select" name="soup" value={soup} onChange={(e)=> setSoup(e.target.value)}>
                        <option value="salt">Salt (塩 Shio)</option>
                        <option value="soy sauce">Soy sauce (醤油 Shoyu)</option>
                        <option value="miso">Miso (味噌 Bean paste)</option>
                        <option value="Tonkotsu">Tonkotsu (豚骨 Pork born)</option>
                        </Input>
                    </FormGroup>
                </Col>
            <Button>Submit</Button>
            </Row>
        </Form>
        </>
    );
}

export default RestaurantCreate;

