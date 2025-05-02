import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Blog = ({ blog, handleAddToBookmark,handlemarkasread}) => {

    const {hashtags, posted_date, title, img, cover, reading_time, author } = blog
    return (
        <div className="mx-8 lg:mx-0 md:mx-0">
            <div className="card bg-base-100 w-full shadow-sm">
                <figure>
                    <img
                        className="mt-3 h-89 w-full object-cover px-4 rounded-b-box"
                        src={cover}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-4 items-center">
                            <div className="avatar">
                                <div className="h-12 rounded-full">
                                    <img src={img} />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold md:text-2xl">{author} </div>
                                {posted_date}
                            </div>
                        </div>
                        <button onClick={()=>handleAddToBookmark(blog)} className="btn font-stretch-condensed font-mono">{reading_time} min read <FontAwesomeIcon icon={faBookmark} /></button>
                    </div>
                     
                    <div>
                    <h1 className="font-black  md:text-2xl">{title}</h1>
                </div>
                   
                      <div className="flex gap-3">
                        <div>{hashtags[0]}</div>
                        <div> {hashtags[1]}</div>
                        <div>{hashtags[2]}</div> 
                     </div>
                   
                   <div>
                   <button onClick={()=>handlemarkasread(reading_time)} className="text-[#6047EC] underline cursor-pointer">Mark as read</button>
                   </div>
                </div>
            
            </div>
           
        </div>
    );
};
Blog.prototype = {
  
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.object.isRequired
}

export default Blog;