import React ,{useState} from 'react'
import { useSelector } from 'react-redux';

const Display=()=>{

    const form = useSelector(state => state.user.form);

    return(
        <div>
            <h1>Hello {form.name}</h1>  
            <h1>Hello {form.email}</h1>  
            <h1>Hello {form.mobile}</h1>  
            <h1>Hello {form.rating}</h1> 
            

        </div>
       
    )    

}
export default Display