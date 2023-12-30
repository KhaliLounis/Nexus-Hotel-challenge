import React from 'react'
import search from '../assets/search.svg'
import './search.css'

const Search = () => {
  return (
    <div className="search">
        <img src={search} alt="search" />
        <input type="text" placeholder="Search users,rooms" />
      </div>
  )
}

export default Search
