import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';


const LandRote = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/registration" element={<RegistrationForm/>}></Route>
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default LandRote
