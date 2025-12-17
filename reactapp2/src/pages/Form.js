import React, { useState } from 'react'

function From() {
  const [name, setName] = useState("");
  function handleChange(e){
    setName(e.target.value);
  }

  return (
    <>
    <h1>Entry From</h1>
    <from>
    <input type="text" onChange={handleChange}/>
    <button>Submit</button>

    </from>
    <br/>
    <br/>

    current value: {name}

    </>
  )
}

export default From