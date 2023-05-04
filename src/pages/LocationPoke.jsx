import usefetch from '../hooks/useFetch'
import { useEffect, useState } from 'react'
import Pikachus from '../components/Pikachus'
import { useSelector } from 'react-redux'
import './styles/location.css'
import Frompokes from '../components/Frompokes'
const LocationPoke = () => {

const [FromUrl, setFromUrl] = useState()
 const [gea, poke] = usefetch(FromUrl)
 useEffect(()=>{
  gea()
 },[FromUrl])

  const url = `https://pokeapi.co/api/v2/pokemon?limit=50&offset=0.`
   const [getallapy, pokemon] = usefetch(url)
   useEffect(() => {
    getallapy()
   },[])
  const { nameuser } = useSelector(state => state)
  return (
    <div className='pokess'>
        <h1 className="pokemones_tittle">Bienvenido<span className='name'>{nameuser}</span>, Aqui podras encontrar tu Pokemon favorito</h1>
        <Frompokes setFromUrl={setFromUrl}/>
      <section className='pokes'>
          {
        pokemon?.results.map(pikachu => (
        <Pikachus key={pikachu.url} url={pikachu.url}/>
        ))
      }
      {
        poke?.pokemon.map(pokes => (
          <Pikachus key={pokes.pokemon.url} url={pokes.pokemon.url}/>
        ))
      }
      </section>
    
   
    </div>
  )
}

export default LocationPoke
