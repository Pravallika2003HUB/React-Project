import React from 'react'

function Doctorcard({name,age,specialization,gender}) {
  return (
    <div>
      <div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLFvdLqURtQ22Gw71xpE_QKzgi-LePVlUmQtz8wFHGbw&s=10'></img>
      </div>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{specialization}</p>
      <p>{gender}</p>
    
      <button>view details</button>
    
    </div>
  )
}

export default Doctorcard
