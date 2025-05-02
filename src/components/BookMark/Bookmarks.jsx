
const Bookmarks = ({bkMarks}) => {

    return (
        <div className="md:w-1/3">
          <h2 className="text-center lg:text-3xl md:text-2xl text-xl font-bold">BookMarks: {bkMarks.length}</h2>
            
        </div>
    );
};

export default Bookmarks;