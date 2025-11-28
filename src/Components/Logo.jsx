import React from 'react'
import Brand from "../assets/Brand.jpg"

function Logo({width='100px'}) {
  return (
    <div>

         <img 
        src={Brand} 
        alt="Logo" 
        style={{ width: width, height: 'auto' }} 
      />

    </div>

  )
}

export default Logo
