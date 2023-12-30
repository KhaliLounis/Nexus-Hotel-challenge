import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SharedLayout from './pages/SharedLayout'
import Dashboard from './pages/Dashboard'
import Rooms from './pages/Rooms'
import Booking from './pages/Booking'
import Users from './pages/Users'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SharedLayout/>} >
          <Route index element={<Dashboard/>}/>
          <Route path='/booking' element={<Booking/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/rooms' element={<Rooms/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
