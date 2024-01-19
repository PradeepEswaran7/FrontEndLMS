import logo from './logo.svg';
import './App.css';
import RegistrationForm from './Components/RegistrationForm';
import LoginForm from './Components/LoginForm';
import UserMangement from './UserMangementSystem/pages/UserMangement';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddUser from './UserMangementSystem/Users/AddUser';
import EditUser from './UserMangementSystem/Users/EditUser';
import AdmSideNav from './Components/AdminConsole/AdmSideNav';
import Footer from './Components/Footer';
import StdSideNavRoute from './Components/StudentConsole/StdSideNavRoute';
import NavbarStudent from './Components/NavbarStudent';
import Navbar from './Components/Navbar';
import LandRote from './Components/LandRote';
import AdminRoute from './Components/AdminRoute';
import M1 from './Components/AdminConsole/M1';
import M2 from './Components/AdminConsole/M2';
import AdmSideNavRoute from './Components/AdminConsole/AdmSideNavRoute';
import NavbarAdmin from './Components/NavbarAdmin';
import StudentRoute from './Components/StudentRoute';
import FaultyRoute from './Components/FaultyRoute';


function App() {
  return (
    <div className="App">

    
    
    <Router>
        <Routes>
          <Route path="/" element={<LandRote />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/Navbaradmin/*" element={<AdminRoute />} />
          <Route path="/Navbarstudent/*" element={<StudentRoute/>} />
          <Route path="/Navbarfaulty/*" element={<FaultyRoute/>} />
          <Route exact path="/adduser" element={<AddUser/>}></Route>
          <Route exact path="/edituser/:id" element={<EditUser/>}></Route>
        </Routes>
      </Router>


      {/* <NavbarAdmin/>
      <AdmSideNavRoute/> */}
         
    
        
    </div>
  );
}

export default App;
