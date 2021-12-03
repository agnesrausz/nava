import React, {useEffect, useState} from 'react';
import Form from "./Form";
import Table from "./Table";

function Home(props) {
    const [isChange, setIsChange] = useState(false);
    const [image, setImage] = useState({});



    return (
        <div className='home'>
            <Form  setIsChange={setIsChange} image={image}/>
            <Table setIsChange={setIsChange} isChange={isChange}/>
        </div>
    );
}

export default Home;