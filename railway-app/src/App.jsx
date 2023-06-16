import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Train_Names from './pages/Train_Names'
// import Header from './pages/Header'

import TrainDetails from './pages/TrainDetails';



function App() {

  return (
    <>
      
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/TrainNames' element={<Train_Names />} />
        <Route path="/train/:trainNumber" element={<TrainDetails/>} />
     
      </Routes>
      <nav>
      <button type="button" class="btn btn-secondary btn-lg"><Link to="/" style={{textDecoration:'none', color:'white'}}><i class="fa-solid fa-house"></i>Home</Link></button>
      <br></br>
      <hr></hr>
<button type="button" class="btn btn-secondary btn-lg"><Link to="/TrainNames" style={{textDecoration:'none', color:'white'}}>Train Names</Link></button>
      
      </nav>
    </>
  )
}

export default App
