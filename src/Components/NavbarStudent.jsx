import React from 'react'
import { Link, Outlet,useNavigate } from 'react-router-dom';

const NavbarStudent = () => {
    const navigate=useNavigate();
    const name=sessionStorage.getItem("stdName")
  const logout=()=>{
    sessionStorage.removeItem('stdId');
    sessionStorage.removeItem('stdName');
    sessionStorage.removeItem('stdEmail');
      navigate('/')
    
  };
    return (
        <div>
            <header className="p-3" style={{ backgroundColor: '#003060', color: 'white' }}>
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                        <h3>Welcome {name}</h3>
                        <div>
                            <button type="button" className="btn btn-outline-light me-2">My Learning</button>
                            <button type="button" className="btn btn-outline-light me-2">Library</button>
                            <button type="button" className="btn btn-outline-light me-2">Fees Enquiry</button>
                            <button type="button" className="btn btn-outline-light me-2">Exam</button>
                            <button type="button" className="btn btn-outline-light me-2">Grade</button>
                            <button type="button" className="btn btn-warning"onClick={logout}>Logout</button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default NavbarStudent
