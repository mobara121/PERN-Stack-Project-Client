import React, {useState, useEffect} from 'react';
import APIURL from '../helpers/environment';

const RestaurantInfo = (props) => {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetch(`${APIURL}/info`)
        .then(response => response.json())
        .then(json => setRestaurants(json) )
      }, []) 

    return(
        <div>
            Restaurant Info
        </div>
    )
}

export default RestaurantInfo;