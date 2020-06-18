import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Icon from '../assets/icon (1).png';
import SearchResult from './SearchResult';
// import {Table} from 'reactstrap';

const Search = () => {

    // const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    // const [filteredResults, setFilteredResults] = useState([]);

    useEffect(() => {
        getRestaurants();
    }, []);

    const getRestaurants = async () => {
        fetch("https://tripadvisor1.p.rapidapi.com/restaurants/list?restaurant_tagcategory_standalone=10591&lunit=km&restaurant_tagcategory=10591&limit=30&combined_food=11722&currency=USD&lang=en_US&location_id=35805", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                "x-rapidapi-key": "805775adabmsh789a61b46d2735ap1c0616jsn75274529ed86"
            }
        })
        .then((res)=> res.json())
        .then((logData) => {
            setResults(logData.data)
            console.log(logData.data)
        })
        .catch(err => {
            console.log(err);
        });
    }

    const Title = styled.p`
        text-align: left;
        font-size: 30px;
        font-weight:700;
        font-family: 'Gloria Hallelujah', cursive;
        margin-top: 100px; 
    `;

    const Image = styled.img`
        width: 50px;
    `;

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     getRestaurants();
    // }

    // useEffect(() => {
    //     console.log(typeof search)
    //     console.log(search)

    //    let filtered = results.filter(result => {
    //        console.log(result.price_level)
    //        let priceLevel = result.price_level;
    //         // if(priceLevel && search === '$'){
    //         //     return result;
    //         // } else if (priceLevel && search === '$$ - $$$'){
    //         //     return result;
    //         // } else {
    //         //     console.log('no price')
    //         // }
    //    })

    //    setFilteredResults(filtered);
    //    console.log(filteredResults);
    // }, [search])

    


    return(
        <div>
            
            <Title><span><Image src={Icon} alt='icon'></Image></span> Ramen Restaurants, Chicago</Title>
            <hr/>  
            <SearchResult results={results} />
        </div>
    )
}

export default Search;
