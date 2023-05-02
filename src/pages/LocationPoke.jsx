import { useSelector } from 'react-redux'
import usefetch from '../hooks/useFetch'
import { useEffect } from 'react'
import Pikachus from '../components/Pikachus'
const LocationPoke = () => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0.`
   const [getallapy, pokemon] = usefetch(url)
   useEffect(() => {
    getallapy()
   },[])
    console.log(pokemon)
   const { nameuser } = useSelector(state => state)
  return (
    <div>
      <h1>bienvenido{nameuser}</h1>
      {
        pokemon?.results.map(pikachu => (
        <Pikachus key={pikachu.url} url={pikachu.url}/>
        ))
      }
   
    </div>
  )
}

export default LocationPoke
