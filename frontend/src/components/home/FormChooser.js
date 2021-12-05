import React from 'react';
import FormCreate from "./form/FormCreate";
import FormUpdate from "./form/FormUpdate";


function FormChooser(props) {

    return (
        <>
            {props.image ?
                <FormUpdate image={props.image} setImage={props.setImage} setIsChange={props.setIsChange}/>
                :
                <FormCreate setImage={props.setImage} setIsChange={props.setIsChange}/>
            }
        </>
    );
}

export default FormChooser;