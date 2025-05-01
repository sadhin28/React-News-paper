import { useEffect, useState } from "react";

const Blogs = () => {
    // useState 
    const [blogs,setBlogs]=useState([]);
    console.log(blogs)
    // useEffect 
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div>
            {
                blogs.map
            }
        </div>
    );
};

export default Blogs;