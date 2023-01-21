import React from 'react'
import Rating from './Rating'
import EditMovie from './EditMovie'

const MovieCard = ({movie, handleDelete, handleEdit }) => {
  return (
    <div className="movie-card">
    <h3>{movie.name}</h3>
    <img src={movie.image} alt={movie.name} />
    <Rating rating={movie.rating} /> 
    <p>{movie.date}</p>
    <div>
        <button className="btn-danger" onClick={()=>handleDelete(movie.id)}>Delete</button>
        <EditMovie className="btn-normal" movie={movie} handleEdit={handleEdit}/>
    </div>
  </div>
  )
}

export default MovieCard