import PropTypes from 'prop-types';
import Feature from './Feature';
const Options = ({ options }) => {

    const { name, features, price } = options;


    return (
        <div className='mr-5  bg-green-400 p-12 mb-2 h-auto w-auto flex flex-col'>
            <h2 className=''>
                <span className='text-4xl'>{price}</span>
            </h2>
            <h1 className='text-5xl'>{name}</h1>
            <div className='flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }

            </div>

            <button className='text-4xl bg-emerald-700 w-full p-4 rounded-lg hover:bg-green-200'>Buy</button>        </div>
    );
};


Options.propTypes = {
    options: PropTypes.object,
}






export default Options;