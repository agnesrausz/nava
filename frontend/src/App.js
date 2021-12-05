import './App.css';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Home from "./pages/Home";
import Image from "./pages/Image";
import Error from "./pages/Error";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/images' element={<Home/>} />
                <Route exact path='/image/:id' element={<Image/>} />
                <Route exact path='*' element={<Error/>} />
            </Routes>
        </BrowserRouter>


    );
}

export default App;
