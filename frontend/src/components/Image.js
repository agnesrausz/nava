import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

function Image() {
    const {id} = useParams()
    const [image, setImage] = useState([])

    useEffect(() => {
        fetchImage()
    }, [])

    const fetchImage = async () => {
        const response = await axios.get(`http://localhost:8080/images/${id}`);
        console.log(response.data.images[0])
        let image = response.data.images[0];
        setImage(image)
    }

    return (
        <table>
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
        </table>
    );
}

export default Image;