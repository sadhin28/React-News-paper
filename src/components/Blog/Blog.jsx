import PropTypes from "prop-types";
const Blog = ({blog}) => {
    
   const {title}=blog
    return (
        <div>
            <h2 className="text-2xl">Title:{title}</h2>
        </div>
    );
};
Blog.prototype={
    blog:PropTypes.object.isRequired
}
export default Blog;