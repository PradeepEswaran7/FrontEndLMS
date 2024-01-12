import logo from './logo.svg';
import './App.css';
import EmployeeList from './Components/EmployeeList';
import RegistrationForm from './Components/RegistrationForm';
import LoginForm from './Components/LoginForm';
import Navbar from './UserMangementSystem/layout/Navbar';
import UserMangement from './UserMangementSystem/pages/UserMangement';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddUser from './UserMangementSystem/Users/AddUser';
import EditUser from './UserMangementSystem/Users/EditUser';

function App() {
  return (
    <div className="App">
        {/* <RegistrationForm/> */}
        {/* <LoginForm/> */}
        <Router>
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<UserMangement/>}></Route>
            <Route exact path="/adduser" element={<AddUser/>}></Route>
            <Route exact path="/edituser/:id" element={<EditUser/>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
