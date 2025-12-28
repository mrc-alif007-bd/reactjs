import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form"



function BlogEntry1() {
    const {
    register,handleSubmit,watch, formState: { errors }} = useForm();

    const onSubmit=(data)=>{
        // console.log(data)
        blogPost(data); 
    }

     const blogPost=(data)=>{
            axios.post("http://localhost:8080/Mahfuzur/phpapi/blog/addBlog.php", data).then(function(response){
                console.log(response.data)
            })
    }
  return (
    <div className='container'>
        <h2>Blog Entry 1</h2>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <input type='text' {...register("title")} defaultValue="" className='form-control' placeholder='Enter title'/><br/>
            <textarea {...register("details")} className='form-control' placeholder='enter details'></textarea> 
            <input type='submit' className='btn btn-primary'/>
        </form>
        
    </div>
  )
}

export default BlogEntry1