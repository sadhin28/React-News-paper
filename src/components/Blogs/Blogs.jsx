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
        <div>
            <h2 className="text-4xl  font-bold">Blogs</h2>
            {
                blogs.map(blogs=><blog  blogs={blogs}></blog>)
            }
        </div>
    );
};

export default Blogs;