import React from 'react'
import { Link } from 'react-router'

const NotFoundPage = () => {
  return (
    <div style={{ paddingTop: 70 }}>
      <h4> 404 Page Not Found </h4>
      <Link to="/"> Go back to homepage </Link>
    </div>
  )
}

export default NotFoundPage
