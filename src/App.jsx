import './App.css'
import Blogs from './components/Blogs/Blogs'
import Nav from './components/header/Nav'
import Bookmarks from './components/BookMark/Bookmarks'
import { useEffect, useState } from 'react'

function App() {
    const [bkMarks,setBookmarks]=useState([])
    const [readingTime,setreadingTime]=useState(0)
    const handleAddToBookmark = blog=>{
       const newBookmark =[...bkMarks,blog];
       setBookmarks(newBookmark)
    }  

    const handlemarkasread = (id,time)=>{
      setreadingTime(readingTime+time);
      
      const remainingBookMarks = bkMarks.filter(bookmark=> bookmark.id !== id);
      setBookmarks(remainingBookMarks)

    }

  const [profiles,setprofiles]=useState(arguments)

   useEffect(()=>{
      fetch('profile.json')
      .then(res=>res.json())
      .then(data=>{
        setprofiles(data)
      }
    )
   },[])
  return (
    <div className='max-w-7xl mx-auto '>
      <div >
        {/* Header Component */}
           <div>
             <Nav profiles={profiles}></Nav>
           </div>
         {/* Blogs Component */}
        <div className='md:flex gap-10 mt-30 justify-between '>
          <Blogs 
          handlemarkasread={handlemarkasread}
          handleAddToBookmark={handleAddToBookmark} ></Blogs>
          
          <Bookmarks bkMarks={bkMarks}
          readingTime={readingTime}
         
          ></Bookmarks>
          
        </div>
         
      </div>
      
    </div>
  )
}

export default App
