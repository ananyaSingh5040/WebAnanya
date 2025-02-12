import React from 'react'
import { useParams } from 'react-router-dom'

const Params = () => {
    const {id}= useParams();
  return (
    <div>Params sent: {id}</div>
  )
}

export default Params