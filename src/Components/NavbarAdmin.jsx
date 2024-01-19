import React, { useState } from 'react';
import { Link, Outlet,useNavigate } from 'react-router-dom';
import AdmSideNavRoute from './AdminConsole/AdmSideNavRoute';
import AdminConsole from './AdminConsole/AdmSideNavRoute'; // Import the AdminConsole component

const NavbarAdmin = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  
    const navigate=useNavigate();
  
    const logout=()=>{
      sessionStorage.removeItem('admId');
      sessionStorage.removeItem('admEmail');
      navigate('/')
  
    }
  
  return (
      
    <header className="p-3" style={{ backgroundColor: '#003060', color: 'white' }}>
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-between">
        <h3>Welcome Admin..</h3>
        <div style={{marginRight:'-50px'}}>
          <button type="button" className="btn btn-warning" onClick={logout}>Logout</button>
        </div>
      </div>
      {isVisible && <AdminConsole />}
    </div>
  </header>
  );
};

export default NavbarAdmin;
