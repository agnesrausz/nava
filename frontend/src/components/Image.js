import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

function Image(props) {
    const {id} = useParams()
    const [image, setImage] = useState([])
    const [view, setView] = useState([])

    useEffect(() => {
        fetchImage();
    }, [])

    const fetchImage = async () => {
        const response = await axios.get(`http://localhost:8080/images/${id}`);
        // console.log(response)
        let image = response.data.data.image;
        let view = response.data.data.view;
        setImage(image)
        setView(view)
        // setViews(state => [...state, views[i]])
    }

    return (
        <table>
            <tr>
                <td>Id</td>
                <td>{image.id}</td>
            </tr>

            <tr>
                <td>Name</td>
                <td>{image.name}</td>
            </tr>

            <tr>
                <td>Creator</td>
                <td>{image.creator}</td>
            </tr>

            <tr>
                <td>View</td>
                <td>{view.view_count}</td>
            </tr>
        </table>
);
}

export default Image;