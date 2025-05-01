import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {bookmark} from "@fortawesome/free-solid-svg-icons";
const Blog = ({blog}) => {
    
   const {title,img,cover,reading_time}=blog
    return (
        <div>
           <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={cover}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      {title}
     <button className="btn">{reading_time} min read <FontAwesomeIcon icon={bookmark} /></button>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Fashion</div>
      <div class="badge badge-outline">Products</div>
    </div>
  </div>
</div>

        </div>
    );
};
Blog.prototype={
    blog:PropTypes.object.isRequired
}
export default Blog;