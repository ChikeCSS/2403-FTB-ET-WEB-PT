//React Router
import {Routes, Route} from 'react-router-dom'
//components
import Home from './components/Home'
import NavBar from './components/NavBar'
import PlayerDetails from './components/PlayerDetails'
import Players from "./components/Players"
import SmoothScroll from './components/SmoothScroll'

function App() {

  return (
    <>
    <NavBar />
     <SmoothScroll>
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/players" element={<Players />} />
        <Route path='/players/:playerId' element={<PlayerDetails />}/>
      </Routes>
     </SmoothScroll>
      
    </>
  )
}

export default App
