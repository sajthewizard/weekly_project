import axios from 'axios';
import  { useEffect, useState } from 'react';


const Data = () => {
    const [user,setUser]=useState([]);
    useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>setUser(res.data))
    },[])
    return (
        <div>
            Data comes here
            {user.length}
           
            
        </div>
    );
};

export default Data;