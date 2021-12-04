import React, {useState, useEffect} from 'react';

function FormUpdate(props) {
    const [name, setName] = useState("");
    const [creator, setCreator] = useState("");

    useEffect(() => {
        setName(props.image.name);
        setCreator(props.image.creator)
    }, [props]);

    const handleInputChange = (event, type) => {
        switch (type) {
            case "name":
                setName(event.target.value);
                break;
            case "creator":
                setCreator(event.target.value);
                break;
            default:
                break;
        }
    }

    return (
        <div className='inputs'>
            <div className='form-title'>Update image id: {props.image.id}</div>
            <br/>

            <input {...props.register("id")}
                   type="hidden"
                   name='id'
                   value={props.image.id}/>

            <label htmlFor='name'>Name</label>
            <input  {...props.register('name')}
                    type='text'
                    name='name'
                    value={name}
                    onChange={(event) => handleInputChange(event, 'name')}
                    required
            />
            <br/>

            <label htmlFor='creator'>Creator</label>
            <input  {...props.register('creator')}
                    type='text'
                    name='creator'
                    value={creator}
                    onChange={(event) => handleInputChange(event, 'creator')}
                    required
            />
            <br/>
        </div>
    );
}

export default FormUpdate;