import PropTypes from 'prop-types'
const bkmarkks = ({bookmark}) => {
    const {title}=bookmark
    return (
        <div>
            <h3>{title}</h3>
        </div>
    );
};

bkmarkks.PropTypes={
    bookmarl: PropTypes.object.isRequired
}
export default bkmarkks;
