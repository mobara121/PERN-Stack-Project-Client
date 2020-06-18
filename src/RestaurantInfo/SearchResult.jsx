import React from 'react';
import {Table} from 'reactstrap';

const SearchResult = (props) => {
    console.log(props)

    const searchMapper = () => {
        console.log(props)
        return props.results.map(result => {
            return(
                <tr key={result._id}>
                    <th scope="row">{result.name}</th>
                        <td><a href={result.website}>{result.website}</a></td>
                        <td>{result.price_level}</td>
                </tr>
            )
        })
    }

    return(
        <>
        <Table striped>
            <thead>
                <tr>
                    
                    <th>restaurant Name</th>
                    <th>website</th>
                    <th>Price level</th>
                </tr>
            </thead>
            <tbody>
                {searchMapper()}
            </tbody>
        </Table>
        </>
    )
};

export default SearchResult;