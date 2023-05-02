import axios from "axios"
import { useState } from "react"
const usefetch = url => {
    const [pokemon, setpokemones] = useState()
  const getApy = () => {
    axios.get(url)
    .then(res => setpokemones(res.data))
    .catch(err => console.log(err))
  }
  return [getApy, pokemon]
}
export default usefetch