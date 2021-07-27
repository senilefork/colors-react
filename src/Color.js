import React from 'react';
import { Link } from 'react-router-dom'

const Color = ({ color }) => {
  debugger;
  return(
    <div style={{width:'100vw', height: '100vh', backgroundColor: `${color}`}}>
     <h1>{color}</h1>
     <Link to="/colors">Go Back</Link>
     </div>
  )
}

export default Color;