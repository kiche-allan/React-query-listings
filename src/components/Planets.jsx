import React from 'react'
import { useQuery } from 'react-query';

const fetchPlanets = async () => {
    const res = await fetch('http://swapi.dev/api/planets/');
    return res.json();
}

export default function Planets() {

    const { data, status} = useQuery('planets', fetchPlanets);
    
  return (
    <div><h2>Planets</h2>
    {/* <p>{status}</p> */}

    {status === 'loading' && (
        <div>Loading data</div>
    )}
    {status === 'error' && (
        <div>Error fetching data</div>
    )}
    </div>
  )
}
