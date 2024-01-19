import React from 'react'
import { Link, Outlet,useNavigate } from 'react-router-dom';

const NavbarFacultys = () => {
  const navigate=useNavigate();

  const logout=()=>{
    sessionStorage.removeItem('fauId');
    sessionStorage.removeItem('fauName');
    sessionStorage.removeItem('faultyEmail');
      navigate('/')

  };
 
  return (
    <header className="p-3" style={{ backgroundColor: '#003060', color: 'white' }}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <h3>Welcome Faculty..</h3>
          <div>
            <button type="button" className="btn btn-outline-light me-2">Faculty Management Console</button>
            <button type="button" className="btn btn-warning" onClick={logout}>Logout</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavbarFacultys