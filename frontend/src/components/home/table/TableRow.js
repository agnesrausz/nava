import React from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {checkResponse} from "../../../utility/ErrorHandler";
import {HOST} from "../../../env";

function TableRow(props) {
    const host = HOST
    const image = props.image
    const id = image.id

    const onPressDelete = async () => {
        await deleteImage();
    }

    const deleteImage = async () => {
        const response = await axios.delete(`${host}/images/${id}`);
        let result = checkResponse(response);

        if(result.status){
            props.setIsChange(true);
            alert(`Success: ${result.message}`);
        } else {
            alert(`Error: ${result.message}`);
        }
    }

    const onPressUpdate = () => {
        props.setImage({
            id:image.id,
            name:image.name,
            creator:image.creator
        })
    }

    return (
        <>
            <td>{image.id}</td>
            <td>{image.name}</td>
            <td>{image.creator}</td>
            <td>{image.view_count}</td>
            <td>
                <button onClick={onPressUpdate}><span className="material-icons">edit</span></button>
            </td>
            <td>
                <button onClick={onPressDelete}><span className="material-icons">delete_forever</span></button>
            </td>
            <td><Link to={`/image/${image.id}`}>
                <span className="material-icons">visibility</span>
            </Link></td>
        </>
    );
}

export default TableRow;