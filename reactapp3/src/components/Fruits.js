import React from 'react'

function Fruits() {

    const fruits = ["mango", "Orange", "grape", "guava", "jackfruit"];

  return (
    <div>

      <table border={1}>
        <tr>
            <th>Fruit Nsme </th>
        </tr>
         {fruits.map(fruit=> {
           return(<tr><td>{fruit}</td></tr>) 
         })
         }
         </table>

    </div>
  )
}

export default Fruits