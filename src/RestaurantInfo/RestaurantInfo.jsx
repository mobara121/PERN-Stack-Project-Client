import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import RestaurantCreate from './RestaurantCreate';
import RestaurantTable from './RestaurantTable';
import RestaurantEdit from './RestaurantEdit';
import APIURL from '../helpers/environment';

const Restaurants = (props) => {

    const [restaurants, setRestaurants] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [restaurantToUpdate, setRestaurantToUpdate] = useState({});

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
            console.log(logData)
        })
    }

    useEffect(() => {
        fetchRestaurants();
    }, [])

    const editUpdateRestaurant = (restaurant) => {
        setRestaurantToUpdate(restaurant);
        console.log(restaurant);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    return(
        <Container>
            {/* <Row>
                <Col md="3"> */}
                    <RestaurantCreate fetchRestaurants={fetchRestaurants} token={props.token} />
                {/* </Col>
                <Col md="9"> */}
                    <RestaurantTable restaurants={restaurants} editUpdateRestaurant={editUpdateRestaurant} updateOn={updateOn} fetchRestaurants={fetchRestaurants} token={props.token}/>
                {/* </Col>
            </Row> */}
                {updateActive ? <RestaurantEdit restaurantToUpdate={restaurantToUpdate} updateOff={updateOff} token={props.token} fetchRestaurants={fetchRestaurants}/> : <></>}
        </Container>
    )
}

export default Restaurants;