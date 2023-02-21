import React from 'react';
import { useQuery } from 'react-query';
import PeopleDesign from '../components/PeopleDesign';

const People = () => {
    const fetchPlanets = async () => {
        const res = await fetch('https://swapi.dev/api/people/');
        return res.json();
    }
    const { data, status } = useQuery('people', fetchPlanets);
    console.log(data);
    console.log(status);
    return (
        <div>
            <h2>People</h2>
            {status === 'loding' && (
               <div>
                   <p>Loding..</p>
               </div>
           )}
           {status === 'success' && (
               <div>
                   {data.results.map(people => <PeopleDesign key={people.name} people={people} /> )}
               </div>
           )}

        </div>
    );
}

export default People;

