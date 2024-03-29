import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <section className="error-page section">
        <div className='error-container'>
          <h2>Oops! It's a dead end</h2>
          <Link to="/" className='btn btn-primary'>Back to Home</Link>
        </div>
      </section>
    </div>
  )
}

export default Error
