import React from 'react';
import {Table, Button} from 'reactstrap';

const RestaurantTable = (props)=> {
    return(
        <>
        <h3>Ramen Restaurant record</h3>
        <hr/>
        <Table dark>
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
                
            </tbody>
        </Table>
        </>
    )
}
    

export default RestaurantTable;