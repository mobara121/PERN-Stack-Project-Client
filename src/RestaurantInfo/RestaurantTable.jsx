import React from 'react';
import {Table, Button} from 'reactstrap';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import APIURL from '../helpers/environment';

const RestaurantTable = (props)=> {

    const deleteRestaurants = (restaurant) => {
        fetch(`${APIURL}/info/delete/${restaurant.id}`, {
            method: 'DELETE',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then(()=> props.fetchRestaurants())
    }

    const restaurantsMapper = () => {
        return props.restaurants.map((restaurant, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{restaurant.id}</th>
                    <td>{restaurant.zipcode}</td>
                    <td>{restaurant.pricerange}</td>
                    <td>{restaurant.topping}</td>
                    <td>{restaurant.souptype}</td>
                    <td>
                        <Button>
                            <EditIcon style={{ color: "green"}}/>
                        </Button>
                        <Button onClick={() => {deleteRestaurants(restaurant)}}>
                            <DeleteIcon color="secondary"/>
                        </Button>
                    </td>
                </tr>
            )
        })
    }

    return(
        <>
        <h3>Ramen Restaurant record</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Zipcode</th>
                    <th>Pricerange</th>
                    <th>Topping</th>
                    <th>Souptype</th>
                </tr>
            </thead>
            <tbody>
                {restaurantsMapper()}
            </tbody>
        </Table>
        </>
    )
}
    

export default RestaurantTable;