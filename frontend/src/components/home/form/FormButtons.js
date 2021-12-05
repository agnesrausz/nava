import React from 'react';

function FormButtons(props) {
    const onPressReset = () => {
        props.setImage();
        props.reset();
    }

    return (
        <div className='input-buttons'>
            <button onClick={onPressReset} type='button'>Reset</button>
            <button type='submit'>Submit</button>
        </div>
    );
}

export default FormButtons;