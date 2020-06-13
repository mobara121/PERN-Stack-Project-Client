// const { useState } = require("react")

import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const RestaurantCreate = (props) => {
    const [zipcode, setZipcode] = useState('');
    const [pricerange, setPricerange] = useState('');
    const [souptype, setSouptype] = useState('');
    
    return(
        <p>RestaurantCreate Component</p>
    );
}

export default RestaurantCreate;

