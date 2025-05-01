import './App.css'
import Blogs from './components/Blogs/Blogs'
import Nav from './components/header/Nav'
import Bookmarks from './components/BookMark/Bookmarks'

function App() {

  return (
    <>
      <div>
        {/* Header Component */}
           <div>
             <Nav></Nav>
           </div>
         {/* Blogs Component */}
        <div className='md:flex gap-10'>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>
         
      </div>
      
    </>
  )
}

export default App
