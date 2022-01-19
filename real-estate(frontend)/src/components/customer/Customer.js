import React from 'react';
import Properties from 'D:/react_projects/realestateapp/src/components/Properties.js';

const Customer = (props) => {

    let {id,name,properties} = props.customer;
    return (
        <div>
            <h2>id: {id}</h2>
            <h2>Name: {name}</h2>
            <Properties prop_id = {properties.id} street={properties.street} city={properties.city} />
        </div>
    )
}

export default Customer;