import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavbarFacultys from './NavbarFacultys'
import FacultySideNav from './FacultyConsole/FacultySideNav'
const FaultyRoute = () => {
    return (
        <div>
            <NavbarFacultys/>
           <Routes>
                <Route path="/" element={<FacultySideNav/>} />

            </Routes>
        </div>
    )
}

export default FaultyRoute
