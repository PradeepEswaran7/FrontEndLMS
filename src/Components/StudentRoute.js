import React from 'react'
import NavbarStudent from './NavbarStudent'
import StdSideNav from './StudentConsole/StdSideNav'
import StdSideNavRoute from './StudentConsole/StdSideNavRoute'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const StudentRoute = () => {
    return (
        <div>
           <NavbarStudent/>
           <Routes>
                <Route path="/" element={<StdSideNav/>} />

            </Routes>
        </div>
    )
}

export default StudentRoute
