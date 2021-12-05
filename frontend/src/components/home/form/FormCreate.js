import React from 'react';
import axios from "axios";
import {checkResponse} from "../../../utility/ErrorHandler";
import {HOST} from "../../../env";
import FormButtons from "./FormButtons";
import {useForm} from "react-hook-form";

function FormCreate(props) {
    const {register, handleSubmit, reset} = useForm();
    const host = HOST

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    const onSubmitCreate = async data => {
        let params = new URLSearchParams();
        params.append('name', `${data['name']}`);
        params.append('creator', `${data['creator']}`);

        let response = await axios.post(`${host}/images`, params, config);

        let result = checkResponse(response);
        if (result.status) {
            props.setIsChange(true);
            reset();
            alert(`Success: ${result.message}`);
        } else {
            alert(`Error: ${result.message}`);
        }

    }

    return (
        <form onSubmit={handleSubmit(onSubmitCreate)}>
            <div className='inputs'>
                <div className='form-title'>Create new image</div>
                <br/>

                <label htmlFor='name'>Name</label>
                <input  {...register('name')}
                        type='text'
                        name='name'
                        required
                />
                <br/>

                <label htmlFor='creator'>Creator</label>
                <input  {...register('creator')}
                        type='text'
                        name='creator'
                        required
                />
                <br/>
            </div>
            <FormButtons reset={reset} setImage={props.setImage}/>

        </form>
    );
}

export default FormCreate;