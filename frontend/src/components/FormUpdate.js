import React, {useState} from 'react';

function FormUpdate(props) {
    const [image, setImage] = useState({
        'name': props.image.name,
        'creator': props.image.creator
    })

    return (
        <div className='inputs'>
            <div className='formtitle'>Update image id: {props.image.id}</div>
            <br/>

            <input {...props.register("id")} type="hidden" name='id' value={props.image.id}/>

            <label htmlFor='name'>Name</label>
            <input  {...props.register('name')} type='text' name='name'
                    value={props.image.name}

            />
            <br/>

            <label htmlFor='creator'>Creator</label>
            <input  {...props.register('creator')} type='text' name='creator'/>
            <br/>
        </div>
    );
}

export default FormUpdate;