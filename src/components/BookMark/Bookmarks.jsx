
import PropTypes from 'prop-types'
import Book from '../Book/Book';
const Bookmarks = ({bkMarks}) => {
    
    return (
        <div className="md:w-1/3 mx-auto">
          <h2 className="text-center mt-10 lg:mt-0 md:mt-0 lg:text-3xl md:text-2xl text-xl font-bold">BookMarks: {bkMarks.length}</h2>
            
            <div className='px-8 mt-6'>
              <h4>Name</h4>
            </div>
            <div className='px-8 mb-20 '>
            {
              bkMarks.map(data =><Book books={data}></Book>)
            }
            </div>
        </div>
    );
};

Bookmarks.propTypes ={
  bkMarks: PropTypes.array
}
export default Bookmarks;