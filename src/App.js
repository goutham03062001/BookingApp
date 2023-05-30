import React,{useState} from 'react'
import HomePage from './Hotels/HomePage';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ViewHotel from './Hotels/ViewHotel';
import HotelBooking from './Hotels/HotelBooking';
import History from './Hotels/History';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/viewDetails/:image/Heading" element={<ViewHotel/>}/>
          <Route exact path="/book" element={<HotelBooking/>}/>
          <Route exact path="/hotelHistory" element={<History/>}/>
          <Route exact path="/"  element={<HomePage/>}/>
        </Routes>

      </Router>
      
    </div>
  )
}

export default App