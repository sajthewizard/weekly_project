import { IoMdRadioButtonOff } from "react-icons/io";

const Feature = ({feature}) => {
    return (
        <div className="flex items-center">
            <IoMdRadioButtonOff />

            <p className="ml-2">{feature}</p>
            
        </div>
    );
};

export default Feature;