import React from 'react';
import {Table, Button} from 'reactstrap';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import APIURL from '../helpers/environment';

const RestaurantTable = (props)=> {

    const deleteRestaurant = (restaurant) => {
        fetch(`${APIURL}/info/delete/${restaurant.id}`, {
            method: 'DELETE',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then(()=> props.fetchRestaurants())
    }

    const restaurantMapper = () => {
        console.log(props)
        return props.restaurants.map((restaurant, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{restaurant.id}</th>
                    <td>{restaurant.zipcode}</td>
                    <td>{restaurant.name}</td>
                    <td>{restaurant.price}</td>
                    <td>{restaurant.topping}</td>
                    <td>{restaurant.soup}</td>
                    <td>
                        <Button onClick={() => {props.editUpdateRestaurant(restaurant); props.updateOn()}}>
                            <EditIcon />
                        </Button><span>  </span>
                        <Button onClick={() => {deleteRestaurant(restaurant)}}>
                            <DeleteIcon />
                        </Button>
                    </td>
                </tr>
            )
        })
    }

    return(
        <>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Zipcode</th>
                    <th>restaurant Name</th>
                    <th>Price range</th>
                    <th>Topping</th>
                    <th>Soup Type</th>
                </tr>
            </thead>
            <tbody>
                {restaurantMapper()}
            </tbody>
        </Table>
        </>
    )
}
    

export default RestaurantTable;