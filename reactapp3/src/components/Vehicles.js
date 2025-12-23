import React from 'react'

function Vehicles() {
    const vehicles =["Ricksha", "Bus", "BWM", "Tesla","boat"];
    const [v, ...rest] = vehicles;
  return (
    <div>
        <h1>Vehicles</h1>
        Our 1st vehicles is {v} <br/>
        Our 2nd vehicles is {rest} <br/>
        
    </div>
  )
}

export default Vehicles