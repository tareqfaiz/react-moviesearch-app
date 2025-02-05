import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='search'>
      <div>
         <img src="./search.png" alt="search-icon" />

         <input
            type="text"
            placeholder="Search for a movie"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
         />
      </div>
    </div>
  )
}

export default Search;