import './App.css'
import Blogs from './components/Blogs/Blogs'
import Nav from './components/header/Nav'
import Bookmarks from './components/BookMark/Bookmarks'
import { useState } from 'react'

function App() {
    const [bkMarks,setBookmarks]=useState([])
    
    const handleAddToBookmark = blog=>{
        console.log('bookMark Adding Soon')
    }
  return (
    <div className='max-w-7xl mx-auto '>
      <div>
        {/* Header Component */}
           <div>
             <Nav></Nav>
           </div>
         {/* Blogs Component */}
        <div className='md:flex gap-10 mt-30'>
          <Blogs handleAddToBookmark={handleAddToBookmark} ></Blogs>
          <Bookmarks></Bookmarks>
        </div>
         
      </div>
      
    </div>
  )
}

export default App
