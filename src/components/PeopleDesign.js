import React from 'react';

const PeopleDesign = ({ people }) => {

    return (
        <div>
            <h2>{people.name}</h2>
            <p>Height : {people.height}</p>
            <p>Eye color - {people.eye_color}</p>
        </div>
    );
}

export default PeopleDesign;