import PropTypes from 'prop-types';


const Link = ({ navbarElement }) => {
    return (
        <div>
           

            <li className='mr-8 p-3 hover:bg-zinc-500' key={navbarElement.id}>
                <a href={navbarElement.path}>{navbarElement.name}</a>
            </li>
        </div>
    );
};
Link.propTypes = {
    navbarElement: PropTypes.object,
}
export default Link;