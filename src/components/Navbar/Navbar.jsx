import Link from "./Link";
import { AiOutlineMenu ,AiOutlineClose } from 'react-icons/ai';
import { useState } from "react";


const Navbar = () => {
    const [open,setOpen]=useState(false)
    const navbarElements = [
        { id: 1, name: "Home", path: "/home" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Blog", path: "/blog" }
    ];

    return (
        <nav>
        <div onClick={()=>setOpen(!open)} className="text-3xl ml-3 md:hidden ">
            {open? <AiOutlineClose />:<AiOutlineMenu  />}
            
           
            </div>
            

            <ul className={`md:flex ${open?'':'hidden'}`}>
                {navbarElements.map(navbarElement =>
                    <Link key={navbarElement.id} navbarElement={navbarElement}></Link>
                )

                }
            </ul>


        </nav>
    );
};

export default Navbar;