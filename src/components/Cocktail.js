import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({name, image, id, info, glass}) => {
  return (
    
      <article className='cocktail'>
        <div className='img-container'>
          <img src={image} alt={name} />
        </div>
        <div className='cocktail-footer'>
          <h2>{name}</h2>
          <p>{glass}</p>
          <p>{info}</p>
          <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>details</Link>
        </div>
      </article>
    
  )
}

export default Cocktail
