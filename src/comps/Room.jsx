import React from 'react'
import './room.css'
const Room = ({place,bed,available,person}) => {
  return (
    <div className='room'>
      <p>{place}</p>
      <p >{bed}</p>
      <p>{person}</p>
      <p>{!available && 'Not '} Available</p>
      <button>Booking</button>
    </div>
  )
}

export default Room
