import React, {useState} from 'react';
import Form from "./Form";
import Table from "./Table";

function Home() {
    const [isChange, setIsChange] = useState(false);
    const [image, setImage] = useState();

    return (
        <div className='home'>
            <Form setIsChange={setIsChange} image={image} setImage={setImage}/>
            <Table setIsChange={setIsChange} isChange={isChange} setImage={setImage}/>
        </div>
    );
}

export default Home;