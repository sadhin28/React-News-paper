import './App.css'
import Blogs from './components/Blogs/Blogs'
import Nav from './components/header/Nav'
import Bookmarks from './components/BookMark/Bookmarks'

function App() {

  return (
    <div className='max-w-7xl mx-auto'>
      <div>
        {/* Header Component */}
           <div>
             <Nav></Nav>
           </div>
         {/* Blogs Component */}
        <div className='md:flex gap-10 mt-30'>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>
         
      </div>
      
    </div>
  )
}

export default App
