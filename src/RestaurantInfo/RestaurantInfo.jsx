import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import RestaurantCreate from './RestaurantCreate';
import RestaurantTable from './RestaurantTable';
import APIURL from '../helpers/environment';

const Restaurants = (props) => {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetch(`${APIURL}/info`)
        .then(response => response.json())
        .then(json => setRestaurants(json) )
      }, []) 

    const fetchRestaurants = () => {
        fetch(`${APIURL}/info`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res)=> res.json())
        .then((logData) => {
            setRestaurants(logData)
        })
    }
    useEffect(() => {
        fetchRestaurants();
    }, [])

    return(
        <Container>
            {/* <Row>
                <Col md="3"> */}
                    <RestaurantCreate fetchRestaurants={fetchRestaurants} token={props.token} />
                {/* </Col>
                <Col md="9"> */}
                    <RestaurantTable restaurants={restaurants} fetchRestaurants={fetchRestaurants} token={props.token}/>
                {/* </Col>
            </Row> */}
        </Container>
    )
}

export default Restaurants;