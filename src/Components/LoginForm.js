import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [userIds, setUserIds] = useState([]);
  const navigate=useNavigate();
  
  const [errors, setErrors] = useState({
    emailAddress: '',
    password: '',
  });

  const validateField = (fieldName, value) => {
    let newErrors = { ...errors };

    switch (fieldName) {
      case 'emailAddress':
        // Use a more robust email validation library or service
        newErrors.emailAddress = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ''
          : 'Invalid email address.';
        break;
      case 'password':
        newErrors.password = value.trim() ? '' : 'Password is required.';
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setErrors({ ...errors, [name]: '' });

    // Add validation on blur
    if (e.type === 'blur') {
      validateField(name, value);
    }

    // Update state
    switch (name) {
      case 'emailAddress':
        setEmailAddress(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;
    let newErrors = { emailAddress: '', password: '' };

    // Check each field individually for emptiness
    if (!emailAddress.trim()) {
      newErrors.emailAddress = 'Email Address is required';
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    // Update errors state with the new error messages
    setErrors(newErrors);

    if (isValid) {
      setLoading(true);

      try {
        if (emailAddress === "admin@lms.com" && password === "1234Admin@") {
          // Store the user ID in sessionStorage
          sessionStorage.setItem("admId", 1);

          // Redirect or do any other necessary actions
          // ...
          sessionStorage.setItem('admEmail', "admin@lsm.com");
          alert('Login successful')
          console.log('Login successful');
          // Reset form fields
          setEmailAddress('');
          setPassword('');
          navigate('/Navbaradmin')
        } else {
          const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              // Add this line if needed, replace 'YOUR_ACCESS_TOKEN' with the actual token
              'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
            },
            body: JSON.stringify({
              email_Address: emailAddress,
              password: password,
            }),
          });

          // Log response data
          console.log('Response:', response);

          if (response.ok) {
            // Login successful, handle as needed
            alert('Login successful')

            console.log('Login successful');
            try {
              if (response.status === 200) {
                // Get and store the user ID
                const userIdResponse = await axios.get(`http://localhost:8080/getStdInfo/${emailAddress}`);
                const userId = userIdResponse.data.std_id;
                const userName = userIdResponse.data.full_Name;
                // Store the user ID in sessionStorage
                sessionStorage.setItem("stdId", userId);
                sessionStorage.setItem("stdName", userName);

                // Redirect or do any other necessary actions
                // ...
                sessionStorage.setItem('stdEmail', emailAddress);
                // Reset form fields
                setEmailAddress('');
                setPassword('');
              } else {
                // Handle unsuccessful login
                // ...
              }
            } catch (error) {
              console.error('Error fetching std_id:', error.message);
            }
            navigate('/Navbarstudent') 
          } else {
            const response = await axios.post('http://localhost:8080/facultlogin', {
              email: emailAddress,  // Adjusted parameter names
              password: password,
            });

            if (response.status === 200) {
              const userIdResponse = await axios.get(`http://localhost:8080/getFauInfo/${emailAddress}`);
              const userId = userIdResponse.data.fac_id;
              const userName = userIdResponse.data.full_Name;
              // Store the user ID in sessionStorage
              sessionStorage.setItem("fauId", userId);
              sessionStorage.setItem("fauName", userName);
              // Login successful
              alert('Login successful');
              console.log('Login successful');
              // Additional logic here, if needed
              sessionStorage.setItem('faultyEmail', emailAddress);
              // Reset form fields
              setEmailAddress('');
              setPassword('');
            } else {
              
              console.error('Login failed:', response.status, response.statusText);
            }
            navigate('/Navbarfaulty')
          }
        }
        // Send login data to the backend (replace 'http://localhost:8080/login' with your actual backend endpoint)

      } catch (error) {
        // Log any other errors that might occur during the fetch
        alert('Invalid credentials');
        console.error('Error during fetch:', error.message);
      } finally {
        setLoading(false);
      }
    } else {
      console.log('Form has errors. Cannot submit.');
    }
  };

  return (
  <div style={{ backgroundColor: '#003060', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className="container-fluid">
      <div className="col-lg-4 mx-auto">
        <div className="card shadow" style={{ backgroundColor: '#f0f0f0' }}>
          <h1 className="card-header text-center">Login</h1>
          <div className="card-body">
            <form className="myform" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  placeholder="Email Address"
                  value={emailAddress}
                  onChange={handleChange}
                  onBlur={handleChange}
                  className={`form-control ${errors.emailAddress && 'is-invalid'}`}
                />
                <div className="invalid-feedback">{errors.emailAddress}</div>
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleChange}
                  onBlur={handleChange}
                  className={`form-control ${errors.password && 'is-invalid'}`}
                />
                <div className="invalid-feedback">{errors.password}</div>
              </div>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default LoginForm;
