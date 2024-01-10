import React from 'react'

const Movie = ({image, rating}) => {
  return (
    <div className='movie'>
        <img src={image} alt={image} />
        <h1>Rating: {rating}</h1>
    </div>
  )
}

export default Movie