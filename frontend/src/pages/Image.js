import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {HOST} from "../env";
import Error from "./Error";
import {checkResponse} from "../utility/ErrorHandler";


function Image() {
    const host = HOST
    const {id} = useParams()
    const [image, setImage] = useState([])
    const [isValidId, setIsValidId] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        fetchImage()
    }, [])

    function handleClick() {
        navigate("/");
    }

    /**
     * Get the image data by id
     * @returns {Promise<void>}
     */
    const fetchImage = async () => {
        try {
            parseInt(id)
            const response = await axios.get(`${host}/images/${id}`);
            let result = checkResponse(response);

            if (!result.status) {
                setIsValidId(false);
            }

            let image = response.data.images[0];
            setImage(image);
        } catch (e) {
            setIsValidId(false);
        }
    }

    if (!isValidId || !image) {
        return (<Error/>);
    }

    return (
        <>
            <table>
                <tbody>
                <tr>
                    <td className='row-title'>Id</td>
                    <td>{image.id}</td>
                </tr>

                <tr>
                    <td className='row-title'>Name</td>
                    <td>{image.name}</td>
                </tr>

                <tr>
                    <td className='row-title'>Creator</td>
                    <td>{image.creator}</td>
                </tr>

                <tr>
                    <td className='row-title'>View</td>
                    <td>{image.view_count}</td>
                </tr>
                </tbody>
            </table>
            <button onClick={handleClick} type='button'>Back</button>
        </>
    );
}

export default Image;