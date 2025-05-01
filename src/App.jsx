import './App.css'
import Blogs from './components/Blogs/Blogs'
import Nav from './components/header/Nav'
function App() {

  return (
    <>
      <div>
        {/* Header Component */}
           <div>
             <Nav></Nav>
           </div>
         {/* Blogs Component */}
        <div>
          <Blogs></Blogs>
        </div>
         
      </div>
      
    </>
  )
}

export default App
