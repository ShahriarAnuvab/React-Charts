import PropTypes from 'prop-types';
const Links = ({links}) => {
    // console.log(links)
    return (
        <div>
            <li>
                <a className='hover:text-zinc-500' href={links.path}> {links.name} </a>
            </li>
            
        </div>
    );
};
Links.propTypes ={
    links : PropTypes.object.isRequired
}
export default Links;