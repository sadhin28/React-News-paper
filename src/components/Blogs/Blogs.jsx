import { useEffect, useState } from "react";
import Blog from "../blog/blog";
const Blogs = () => {
    // useState 
    const [blogs,setBlogs]=useState([]);
    // console.log(blogs)
    // useEffect 
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
       
           <div className="md:w-2/3 grid gap-5">
                <h2 className="text-center lg:text-3xl md:text-2xl text-xl font-bold">Blogs : {blogs.length}</h2>
                {
                    blogs.map(blog =><Blog kwy={blog.id} blog={blog}></Blog>)
                }
           </div>
           
        
    );
};

export default Blogs;