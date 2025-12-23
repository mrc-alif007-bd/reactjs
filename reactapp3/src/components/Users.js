import React from 'react'
import { age, name } from './Person';


function Users() {
    const users =[
        {id:1, name:" tareq", batch:" pwad-68"},
        {id:2, name:" toufiq", batch:" pwad-68"},
        {id:3, name:" arif", batch:" pwad-68"},
        {id:4, name:" naziur", batch:" pwad-68"}
        
    ];

  return (
    <div>
        <h1>User</h1>
        
            <table border={2}>
                <tr>
                    <th>User table</th>
                </tr>
                {users.map(user => {
                return  <tr><td>{user.id }:{ user.name}, { user.batch}</td></tr>
            
          
        }
        )}
        </table>
        <h1>
            we import name : {name} <br/>
            we import age : {age}
        </h1>
        
    </div>
  )
}

export default Users