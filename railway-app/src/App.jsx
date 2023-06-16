import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Train_Names from './pages/Train_Names'
// import Header from './pages/Header'

import TrainDetails from './pages/TrainDetails';



function App() {

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/TrainNames">Train Names</Link>
      </nav>
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/TrainNames' element={<Train_Names />} />
        <Route path="/train/:trainNumber" element={<TrainDetails/>} />
     
      </Routes>
    </>
  )
}

export default App
