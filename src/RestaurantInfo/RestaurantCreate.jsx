// const { useState } = require("react")

import React, {useState, useEffect} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';

const RestaurantCreate = (props) => {
    const [zipcode, setZipcode] = useState('');
    const [pricerange, setPricerange] = useState('');
    const [souptype, setSouptype] = useState('');
    
    return(
        <>
        <h3>Restaurant Search</h3>
        <Form>
            <Row form>
                <Col md={4}>
                    <FormGroup>
                        <Label htmlFor="zipcode">Zip</Label>
                        <Input type="text" name="zip" value={zipcode}/>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label htmlFor="pricerange">Price</Label>
                        <Input type="select" name="pricerange" value={pricerange}>
                        <option value="under 10">1: under 10 USD</option>
                        <option value="10 - 15">2: 10 - 15 USD</option>
                        <option value="15 - 20">3: 15 - 20 USD</option>
                        <option value="over 20">4: over 20 USD</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label htmlFor="souptype">Soup type</Label>
                        <Input type="select" name="souptype" value={souptype}>
                        <option value="salt">Salt(Shio)</option>
                        <option value="soy sauce">Soy sauce(Shoyu)</option>
                        <option value="miso">Miso(Bean paste)</option>
                        <option value="Tonkotsu">Tonkotsu(Pork born)</option>
                        </Input>
                    </FormGroup>
                </Col>
            <Button>Search</Button>
            </Row>
        </Form>
        </>
    );
}

export default RestaurantCreate;

