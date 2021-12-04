import React from 'react';

function FormCreate(props) {
    return (
        <div className='inputs'>
            <div className='form-title'>Create new image</div>
            <br/>

            <label htmlFor='name'>Name</label>
            <input  {...props.register('name')}
                    type='text'
                    name='name'/>
            <br/>

            <label htmlFor='creator'>Creator</label>
            <input  {...props.register('creator')}
                    type='text'
                    name='creator'
                    required
            />
            <br/>
        </div>
    );
}

export default FormCreate;