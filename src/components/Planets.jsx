import React from 'react'
import { useQuery } from 'react-query';

const fetchPlanets = async () => {
    const res = await fetch('http://swapi.dev/api/planets/');
}

export default function Planets() {

    const {} = useQuery('planets', fetchPlanets);
  return (
    <div><h2>Planets</h2></div>
  )
}
