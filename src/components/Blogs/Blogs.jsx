import { useEffect, useState } from "react";
import blog from "./blog";
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
       
           <div className="md:w-2/3">
                <h2 className="lg:text-3xl md:text-2xl text-xl font-bold">Blogs : {blogs.length}</h2>
           </div>
           
        
    );
};

export default Blogs;