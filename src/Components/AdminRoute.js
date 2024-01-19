import React from 'react';
import AdmimsideNav from './AdminConsole/AdmSideNav';
import NavbarAdmin from './NavbarAdmin';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AdmSideNavRoute from './AdminConsole/AdmSideNavRoute';
import M1 from './AdminConsole/M1';
import M2 from './AdminConsole/M2';
import AdmSideNav from './AdminConsole/AdmSideNav';
import M3 from './AdminConsole/M3';
import M4 from './AdminConsole/M4';
import M5 from './AdminConsole/M5';
import M6 from './AdminConsole/M6';
import M7 from './AdminConsole/M7';
import M8 from './AdminConsole/M8';
import M9 from './AdminConsole/M9';
import M10 from './AdminConsole/M10';
import M11 from './AdminConsole/M11';
import M12 from './AdminConsole/M12';
import M13 from './AdminConsole/M13';
import M14 from './AdminConsole/M14';
import AddUser from '../UserMangementSystem/Users/AddUser';
import EditUser from '../UserMangementSystem/Users/EditUser';

const AdminRoute = () => {
  return (
    <div>
      <NavbarAdmin/>
      <div className="d-flex">
        <div className="col-auto bg-dark"  >
            <AdmSideNav/>
        </div>
        <div style={{width:"100%"}}>
      
        
            <Routes>
                <Route path="/M1" element={<M1/>}></Route>
                <Route path="/M2" element={<M2/>}></Route>
                <Route path="/M3" element={<M3/>}></Route>
                <Route path="/M4" element={<M4/>}></Route>
                <Route path="/M5" element={<M5/>}></Route>
                <Route path="/M6" element={<M6/>}></Route>
                <Route path="/M7" element={<M7/>}></Route>
                <Route path="/M8" element={<M8/>}></Route>
                <Route path="/M9" element={<M9/>}></Route>
                <Route path="/M10" element={<M10/>}></Route>
                <Route path="/M11" element={<M11/>}></Route>
                <Route path="/M12" element={<M12/>}></Route>
                <Route path="/M13" element={<M13/>}></Route>
                <Route path="/M14" element={<M14/>}></Route>


               

               
            </Routes>
        </div>
        </div>
        </div>
  );
};

export default AdminRoute;

