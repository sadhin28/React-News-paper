import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBookmark} from "@fortawesome/free-solid-svg-icons";
const Blog = ({blog}) => {
    
   const {title,img,cover,reading_time,author}=blog
    return (
        <div>
           <div class="card bg-base-100 w-100 shadow-sm">
  <figure>
    <img
      src={cover}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
    <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img src={img} />
                    </div>
                </div>
     {author}
     <button className="btn font-stretch-condensed font-mono">{reading_time} min read <FontAwesomeIcon icon={faBookmark} /></button>
    </h2>
   
  </div>
</div>

        </div>
    );
};
Blog.prototype={
    blog:PropTypes.object.isRequired
}
export default Blog;