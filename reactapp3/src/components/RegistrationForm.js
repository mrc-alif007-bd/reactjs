import React,{ useState} from 'react'


function RegistrationForm() {
    const[inputs, setInputs]= useState({});
     const handleChange = (e)=> {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values,[name]:value
            
     }))
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        alert({inputs(values=>{value})});
    }

    
  return (
    <>
    <div>Registration Form</div>
    <form onSubmit={handleSubmit} >
        <input type='text' onChange={handleChange} name='fullName' placeholder='Enter your name'/><br/>
        <input type='number' onChange={handleChange} name='age' placeholder='Enter your age'/><br/>
       <select name='district' onChange={handleChange}>
        <option>Select One</option>
        <option>Dhaka</option>
        <option>Cumilla</option>
        <option>Barishal</option>
       </select>
        <br/>
        <input type='submit'/>
        
    </form>
    {console.log(inputs)}
    </>
  )
}

export default RegistrationForm