import React from 'react';
import axios from "axios";
import {checkResponse} from "../../../utility/ErrorHandler";
import FormButtons from "./FormButtons";
import {HOST} from "../../../env";
import {useForm} from "react-hook-form";


function FormUpdate(props) {
    const host = HOST
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    const preloadedValues={
        name: props.image.name,
        creator: props.image.creator
    }

    const {register, handleSubmit, reset} = useForm({
        defaultValues: preloadedValues
    });

    const onSubmitUpdate = async (data) => {
        if (data['name'] === props.image.name && data['creator'] === props.image.creator ){
            alert('Please change data first')
            return
        }
        let params = new URLSearchParams();
        params.append('name', `${data['name']}`);
        params.append('creator', `${data['creator']}`);

        let response = await axios.put(`${host}/images/${data['id']}`, params, config);

        let result = checkResponse(response);

        if (result.status) {
            props.setIsChange("update" + data['id'] + data['name'] + data['creator'] );
            props.setImage();
            alert(`Success: ${result.message}`);
            reset();
        } else {
            alert(`Error: ${result.message}`);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmitUpdate)}>
            <div className='inputs'>
                <div className='form-title'>Update image id: {props.image.id}</div>
                <br/>

                <input {...register("id")}
                       type="hidden"
                       name='id'
                       value={props.image.id}
                />

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

export default FormUpdate;