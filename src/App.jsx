import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LocationPoke from './pages/LocationPoke'

function App() {


  return (
    <div className='App'>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/location' element={<LocationPoke/>}/>
     </Routes>
     
    </div>
  )
}

export default App
