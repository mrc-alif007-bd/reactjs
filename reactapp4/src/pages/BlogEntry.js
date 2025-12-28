import axios from 'axios';
import React, { useEffect, useState } from 'react'


function BlogEntry() {
    const[inputs, setInput] = useState({});
    function handlechange(e){
        let name = e.target.name;
        let value = e.target.value;
        setInput(values=> ({...values, [name]:value}))
    }
    //  useEffect(()=>{
    //             blogPost();
    //         },[]);
    function handleSubmit(e){
        e.preventDefault(); 
        blogPost();       
    }
   
    const blogPost=()=>{
            axios.post("http://localhost:8080/Mahfuzur/phpapi/blog/addBlog.php", inputs).then(function(response){
                console.log(response.data)
            })
    }
  return (
    <div className='container'>
        <h2>Blog Entry</h2>
        <form className='form'onSubmit={handleSubmit}>
            <input type='text' name='title' value={inputs.title} onChange={handlechange} className='form-control' placeholder='Enter title'/>
            <textarea name='details' value={inputs.details} onChange={handlechange} className='form-control' placeholder='enter details'></textarea> 
            <input type='submit' className='btn btn-primary'/>
        </form>
        {console.log(inputs)}
    </div>
  )
}

export default BlogEntry