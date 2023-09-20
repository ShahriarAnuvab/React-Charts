import PropTypes from 'prop-types';
import { GoVerified } from "react-icons/go";
const Options = ({options}) => {
    // console.log(options)
    return (
        <div className='border rounded-3xl bg-blue-600 text-white my-2 flex flex-col'>
             <div className='text-center'>
             <p  className='text-7xl font-semibold p-6'>{options.price}<span className='text-3xl'>/mon</span></p>
            <h1 className='text-3xl'>{options.name}</h1>
             </div>
           
            <div className='my-5 mx-5 flex-grow'>
                {
                     options.features.map((feature, idx) => <p key={idx} className='flex items-center p-1'> <GoVerified className='text-green-500'> </GoVerified> {feature} </p>)
                }
            </div>
           <div className='px-2'>
           <button className='bg-green-500 btn border-none  my-5 w-full py-2 text-white font-bold rounded-xl hover:bg-green-900'>Buy Now</button>
           </div>
            
        </div>
    );
};
Options.propTypes ={
    options : PropTypes.object.isRequired
}
export default Options;