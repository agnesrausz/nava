import React, {useEffect, useState} from 'react';
import axios from "axios";
import TableRow from "./table/TableRow";
import {HOST} from "../../env";


function Table(props) {
    const host =HOST
    const [images, setImages] = useState([])

    useEffect(() => {
        fetchImages();
    }, [props.isChange])

    /**
     * Get all images
     * @returns {Promise<void>}
     */
    const fetchImages = async () => {
        setImages([])
        const response = await axios.get(`${host}/images`);
        let images = response.data.images;

        for (let i = 0; i < images.length; i++) {
            if (images.length !== 0) {
                setImages(state => [...state, images[i]])
            }
        }
        props.setIsChange(false)
    }

    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Creator</th>
                <th>View</th>
                <th>Update</th>
                <th>Delete</th>
                <th>Link</th>
            </tr>
            </thead>
            <tbody>
            {images.map((image) => (
                <tr key={image.id}>
                    <TableRow image={image} setIsChange={props.setIsChange} setImage={props.setImage}/>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default Table;