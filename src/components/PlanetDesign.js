import React from 'react';

const PlanetDesign = ({ planet }) => {

    return (
        <div>
            <h2>{planet.name}</h2>
            <p>Population : {planet.population}</p>
            <p>Terrain - {planet.terrain}</p>
        </div>
    );
}

export default PlanetDesign;