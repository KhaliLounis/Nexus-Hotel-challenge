import React from 'react'
import './stats.css'

const Stats = ({count, desc}) => {
  return (
    <div className='stat'>
      <h1>{count}</h1>
      <p>{desc}</p>
    </div>
  )
}

export default Stats
