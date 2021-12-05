import React, {useState} from 'react';
import FormChooser from "../components/home/FormChooser";
import Table from "../components/home/Table";


function Home() {
    const [isChange, setIsChange] = useState(false);
    const [image, setImage] = useState();

    return (
        <div className='home'>
            <FormChooser setIsChange={setIsChange} image={image} setImage={setImage}/>
            <Table setIsChange={setIsChange} isChange={isChange} setImage={setImage}/>
        </div>
    );
}

export default Home;