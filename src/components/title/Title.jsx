import React from 'react'
import './Title.scss'
import { Link } from 'react-router-dom'
const Title = () => {
  return (
    <Link className="title">
    <span>LIT</span>
    <span>OBJECT</span>
  </Link>
  )
}

export default Title