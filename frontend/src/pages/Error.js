import React from 'react';
import {useNavigate} from "react-router-dom";


function Error() {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/");
    }
    return (
        <div className='error'>
            <p >Page not found.</p>
            <button onClick={handleClick} type='button'>Back</button>
        </div>
    );
}

export default Error;