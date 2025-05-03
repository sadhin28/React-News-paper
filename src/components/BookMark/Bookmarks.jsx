
import PropTypes from 'prop-types'
import Book from '../Book/Book';
const Bookmarks = ({bkMarks,readingTime}) => {
    
    return (
        <div className="mt-14 bg-[#1111110D] md:w-1/3 mx-auto px-8 lg:px-0 md:px-0">
            <div>
            <div className=' border-b-blue-700 border rounded-xl px-8  bg-[#6047EC1A] h-20'>
              <h4 className='text-center font-bold text-xl lg:text-2xl '><small>Spent time on read : {readingTime}  min</small></h4>
            </div>
            </div>
            <div className='px-8 mt-2  py-2 rounded-xl'>
            <h2 className="text-center mt-10 lg:mt-0 md:mt-0 lg:text-3xl md:text-2xl text-xl font-bold">BookMarks: {bkMarks.length}</h2>
            {
              bkMarks.map((data,idx) =><Book 
                key={idx}
               
                books={data}></Book>)
            }
            </div>
        </div>
    );
};

Bookmarks.propTypes ={
  bkMarks: PropTypes.array
}
export default Bookmarks;