import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import SearchUser from '../Users/SearchUser';

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const result = await axios.get('http://localhost:8080/students');
      setUsers(result.data);
      setFilteredUsers(result.data);
    } catch (error) {
      console.error('Error loading users:', error.message);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/${id}`);
      loadUsers();
    } catch (error) {
      console.error('Error deleting user:', error.message);
    }
  };

  const handleSearch = (searchTerm) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const filtered = users.filter((user) => {
      const isIdMatch = user.std_id === parseInt(searchTerm, 10);
      const isCourseMatch = user.course.toLowerCase().includes(lowerCaseSearchTerm);
      const isNameMatch = user.full_Name.toLowerCase().includes(lowerCaseSearchTerm);

      return isIdMatch || isCourseMatch || isNameMatch;
      // Add more conditions for other fields if needed
      // Example: ||
      //        user.email_Address.toLowerCase().includes(lowerCaseSearchTerm) ||
      //        user.qualification.toLowerCase().includes(lowerCaseSearchTerm) ||
      //        ...
    });

    setFilteredUsers(filtered);
  };

  const handleReset = () => {
    setFilteredUsers(users);
  };

  return (
    
    <div className="container" style={{ backgroundColor: '#e0e0e0' }}>
      <div className="py-4" >
        <SearchUser onSearch={handleSearch} onReset={handleReset} />
        <table className="table border shadow">
          <thead>
            <tr className='table table-info'  style={{border:'2px solid black'}}>
              <th scope="col">#</th>
              <th scope="col">Student Id</th>
              <th scope="col">Name</th>
              <th scope="col">Qualification</th>
              <th scope="col">Email</th>
              <th scope="col">Contact No</th>
              <th scope="col">Courses</th>
              <th scope="col">Address</th>
              <th scope="col">DOB</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.std_id}</td>
                <td>{user.full_Name}</td>
                <td>{user.qualification}</td>
                <td>{user.email_Address}</td>
                <td>{user.contact_No}</td>
                <td>{user.course}</td>
                <td>{user.address}</td>
                <td>{user.dob}</td>
                <td>
                  <Link className="btn btn-primary mx-2 m-1" to={`/edituser/${user.std_id}`}>
                    Edit
                  </Link>
                  <button className="btn btn-danger mx-2" onClick={() => deleteUser(user.std_id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
