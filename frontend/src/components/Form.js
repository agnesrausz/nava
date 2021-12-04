import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "axios";
import FormCreate from "./FormCreate";
import FormUpdate from "./FormUpdate";

function Form(props) {

    const {register, handleSubmit} = useForm();
    // let {register, handleSubmit} = useForm({defaultValues:{id: 1, name: 'ccc', creator: 'cccccc' }});
    // const history = useNavigate();
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    const onSubmitCreate = async data => {
        let params = new URLSearchParams();
        params.append('name', `${data['name']}`);
        params.append('creator', `${data['creator']}`);

        let response = await axios.post('http://localhost:8080/images', params, config);
        // console.log(response)
        props.setIsChange(true)
    }

    const onSubmitUpdate = async (data) => {
        let params = new URLSearchParams();
        params.append('name', `${data['name']}`);
        params.append('creator', `${data['creator']}`);

        let response = await axios.put(`http://localhost:8080/images/${data['id']}`, params, config);
        props.setIsChange(true);
        // console.log(response)
        props.setImage();
    }

    const onPressReset = () => {
        props.setImage();
    }


    return (
        // <form onSubmit={handleSubmit(onSubmitCreate)}>
        //         <FormCreate register={register}/>
        <form onSubmit={handleSubmit(props.image ? onSubmitUpdate: onSubmitCreate)}>
            {props.image ?
                <FormUpdate register={register} image={props.image}/>
                :
                <FormCreate register={register}/>
            }

            <div className='inputbuttons'>
                <button onClick={onPressReset} type='button'>Reset</button>
                <button type='submit'>Submit</button>
            </div>

        </form>
    );
}

export default Form;