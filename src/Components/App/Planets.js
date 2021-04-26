import React from 'react';
import {useQuery, QueryClient} from 'react-query';


const fetchPlanets = async () => {
    const res = await fetch('https://swapi.dev/api/planets/');
    return res.json();
}

const Planets = () => {
    const {data, status} = useQuery('planets', fetchPlanets);

    console.log(data);
    return ( <div>
        <h2>Planets</h2>
        <p>{ status }</p>
{/* 
           {data.results[0] && <div>{data.results.map((planetData, pIndex)=>(
               <div key={pIndex}>Name {planetData.name}</div>
           ))}</div>}  */}

    </div> );
}
 
export default Planets;