import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "axios";

function Form(props) {

    const {register, handleSubmit} = useForm();
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

        console.log(data)
        console.log(params)
        let response = await axios.post('http://localhost:8080/images', params, config);
        props.setIsChange(true)
        console.log(response)
    }

    const onSubmitUpdate = async (data) => {
        let params = new URLSearchParams();
        params.append('name', `${data['name']}`);
        params.append('creator', `${data['creator']}`);

        console.log(params)
        let response = await axios.put(`http://localhost:8080/images/${data['id']}`, params, config);
        props.setIsChange(true)
        console.log(response)
    }

    const onPressReset = async () => {
        //reset form
        //reset content
    }


    return (
        <form onSubmit={handleSubmit(onSubmitUpdate)}>
            <div className='inputs'>

                <div className='formtitle'>
                    <>Update image</>
                    {/*<>Create new image</>*/}
                </div>
                <br/>
                <input {...register("id")} type="text" name='id'/>

                <label htmlFor='name'>Name</label>
                <input  {...register('name')} type='text' name='name'/>
                <br/>

                <label htmlFor='creator'>Creator</label>
                <input  {...register('creator')} type='text' name='creator'/>
                <br/>
            </div>

            <div className='inputbuttons'>
                <button onClick={onPressReset} type='button'>Reset</button>
                <button type='submit'>Submit</button>
            </div>
        </form>
    );
}

export default Form;