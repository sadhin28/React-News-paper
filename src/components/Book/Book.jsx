import React from 'react';

const Book = ({books}) => {
    console.log(books)
    const {title}=books
    return (
        <div class=" card bg-base-100 w-full shadow-sm border border-amber-400 mt-7 mb-7">
        <div class="card-body ">
          <h2 class="card-title">{title}</h2>
          <button className='btn hover:bg-black hover:text-white'>Delate</button>
        </div>
      </div>
    );
};

export default Book;