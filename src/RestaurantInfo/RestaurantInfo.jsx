import React, {useState, useEffect} from 'react';
import {Container} from 'reactstrap';
import styled from 'styled-components';
import RestaurantCreate from './RestaurantCreate';
import RestaurantTable from './RestaurantTable';
import RestaurantEdit from './RestaurantEdit';
import RestaurantSearch from './RestaurantSearch';
import APIURL from '../helpers/environment';

const Restaurants = (props) => {

    const [restaurants, setRestaurants] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [restaurantToUpdate, setRestaurantToUpdate] = useState({});


    const fetchRestaurants = () => {
        console.log(props)
        fetch(`${APIURL}/info/get`, {
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

    const Div = styled.div`
        margin-top: 60px;
    `;

    return(
        <Container>
                <Div>
                    <RestaurantCreate fetchRestaurants={fetchRestaurants} token={props.token} />

                    <RestaurantTable restaurants={restaurants} editUpdateRestaurant={editUpdateRestaurant} updateOn={updateOn} fetchRestaurants={fetchRestaurants} token={props.token}/>

                    {updateActive ? <RestaurantEdit restaurantToUpdate={restaurantToUpdate} updateOff={updateOff} token={props.token} fetchRestaurants={fetchRestaurants}/> : <></>}
                </Div>
                <Div>
                    <RestaurantSearch />
                </Div>
        </Container>
    )
}

export default Restaurants;