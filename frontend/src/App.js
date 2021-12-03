import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useParams,
    useRouteMatch
} from 'react-router-dom';
import Home from "./components/Home";
import Image from "./components/Image";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/images' element={<Home/>} />
                <Route exact path='/image/:id' element={<Image/>} />
            </Routes>
        </BrowserRouter>


    );
}

export default App;
