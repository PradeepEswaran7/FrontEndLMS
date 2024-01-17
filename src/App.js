import logo from './logo.svg';
import './App.css';
import RegistrationForm from './Components/RegistrationForm';
import LoginForm from './Components/LoginForm';
import UserMangement from './UserMangementSystem/pages/UserMangement';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddUser from './UserMangementSystem/Users/AddUser';
import EditUser from './UserMangementSystem/Users/EditUser';
import AdmSideNav from './Components/AdminConsole/AdmSideNav';
import NavbarAdmin from './Components/NavbarAdmin';
import AdmSideNavRoute from './Components/AdminConsole/AdmSideNavRoute';
import Footer from './Components/Footer';
import StdSideNavRoute from './Components/StudentConsole/StdSideNavRoute';
import NavbarStudent from './Components/NavbarStudent';
import Navbar from './Components/Navbar';



function App() {
  return (
    <div className="App">

    
    {/* <NavbarAdmin/>
    <AdmSideNavRoute/> */}

    <Navbar></Navbar>
    {/* <NavbarStudent></NavbarStudent>
    <StdSideNavRoute/> */}
    <Footer/>
        
    </div>
  );
}

export default App;
