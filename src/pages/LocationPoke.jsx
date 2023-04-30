import React from 'react'
import { useSelector } from 'react-redux'

const LocationPoke = () => {
   const { pokeApy } = useSelector(state => state)
  return (
    <div>
      <h1>Bienvenido {pokeApy}, aqui podrás encontrar tu Pokemon favórito</h1>
    </div>
  )
}

export default LocationPoke
