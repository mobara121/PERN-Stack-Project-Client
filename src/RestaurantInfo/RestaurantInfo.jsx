import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
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
          <Row>
                <Col md="3">
                    
                </Col>
                <Col md="9">
                    <h2>Restaurant info table</h2> 
                </Col>
          </Row>
      </Container>
    )
}

export default Restaurants;