import React from 'react'

function cars(props) {
  return (
    <div>
      <h1> {props.title}</h1>
      <h1> {props.brand.model}</h1>
      <h1> {props.brand.name}</h1>
    </div>
  )
}

export default cars
