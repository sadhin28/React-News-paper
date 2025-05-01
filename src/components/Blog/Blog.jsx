import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
const Blog = ({ blog }) => {

    const { posted_date, title, img, cover, reading_time, author } = blog
    return (
        <div className="mx-8 lg:mx-0 md:mx-0">
            <div class="card bg-base-100 w-full shadow-sm">
                <figure>
                    <img
                        className="mt-3 h-89 w-full object-cover px-4 rounded-b-box"
                        src={cover}
                        alt="Shoes" />
                </figure>
                <div class="card-body">
                    <div class="flex justify-between">
                        <div className="flex gap-4">
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
                        <button className="btn font-stretch-condensed font-mono">{reading_time} min read <FontAwesomeIcon icon={faBookmark} /></button>
                    </div>
                </div>
            </div>

        </div>
    );
};
Blog.prototype = {
    blog: PropTypes.object.isRequired
}
export default Blog;