import PropTypes from "prop-types";
const blog = ({blogs}) => {
    console.log(blogs)
    return (
        <div>
            
        </div>
    );
};
blog.prototype={
    blogs:PropTypes.object.isRequired
}
export default blog;