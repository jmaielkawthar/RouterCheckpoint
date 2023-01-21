import React from 'react'
import Rating from './Rating'

const Filter = ({textSearch, handleSearch, rating, handleRating}) => {
  return (
    <div>
    <form className='formsearch'>
        <p className='searchTitle'>Search for a movie</p>
        <input type="text" value={textSearch} onChange={e=>handleSearch(e.target.value)} />
        <Rating rating={rating} handleRating={handleRating}/>
    </form>
</div>
  )
}

export default Filter