import React from 'react'

const cars = [" BMW", " Mercedis", " Toyota", " Honda"];

function Car(x) {
    const {brand, year, color}= x;
    const welcome = () => {
        alert("This is Arrow Function")
    }
  return (
    <>

    <h2>About Car</h2>

    <p>Brand :{brand} </p>
    
    <p>Color :{color} </p>
    <p>Year :{year} </p>
    <br/>
    
    <h2>Arry</h2>
    <p>Brand :{x.carinfo[0]} </p>
    <p>Year :{x.carinfo[1]} </p>
    <p>Color :{x.carinfo[2]} </p>
    <br/>
    
    <h2>We are Using Map FUNCTION</h2>

   { cars.map((car)=><li>This is {car}</li>)}

    <h4>Here WE Use Arrow Function</h4>
    <button onClick={welcome}>Click Here</button>

    {/* <p>Brand :{x.carinfo.brand} </p>
    <p>Color :{x.carinfo.color} </p>
    <p>Year :{x.carinfo.year} </p>  */}


    </>
  )
}

export default Car