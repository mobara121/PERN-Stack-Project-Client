const { useState } = require("react")

import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const RestaurantCreate = (props) => {
    const [zipcode, setZipcode] = useState('');
    const [pricerange, setPricerange] = useState('');
    const [souptype, setSouptype] = useState('');

    return(
        <>
        <h3>Restaurant Search</h3>
        <Form>
            <FormGroup>
                <Label for="exampleZip">Zip</Label>
                <Input type="text" name="zip" id="exampleZip"/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Input>
            </FormGroup>
            <Button>Search</Button>
        </Form>
        </>
    );
}

export default RestaurantCreate;

