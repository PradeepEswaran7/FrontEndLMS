import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  const [fullName, setFullName] = useState('');
  const [qualification, setQualification] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [course, setCourse] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const [role, setRole] = useState('');
  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const [errors, setErrors] = useState({
    fullName: '',
    qualification: '',
    emailAddress: '',
    password: '',
    contactNo: '',
    course: '',
    address: '',
    dob: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch(`http://localhost:8080/${id}`);
        if (userResponse.ok) {
          const userData = await userResponse.json();

          // Using default values to handle potential falsy values
          setFullName(userData.full_Name || '');
          setQualification(userData.qualification || '');
          setEmailAddress(userData.email_Address || '');
          setPassword(userData.password || '');
          setContactNo(userData.contact_No || '');
          setCourse(userData.course || '');
          setAddress(userData.address || '');
          setDob(userData.dob || '');
          setRole(userData.role || '');

          const coursesResponse = await fetch('http://localhost:8080/courses');
          if (coursesResponse.ok) {
            const courses = await coursesResponse.json();
            setCourseList(courses);
          } else {
            console.error('Error fetching courses:', coursesResponse.status, coursesResponse.statusText);
          }
        } else {
          console.error('Error fetching user details:', userResponse.status, userResponse.statusText);
        }
      } catch (error) {
        console.error('Error during fetch:', error.message);
      }
    };

    fetchData();
  }, [id]);

  const validateField = (fieldName, value) => {
    let newErrors = { ...errors };

    switch (fieldName) {
      case 'fullName':
        newErrors.fullName = value.trim() ? '' : 'Full Name is required.';
        break;
      case 'qualification':
        newErrors.qualification = value.trim() ? '' : 'Qualification is required.';
        break;
      case 'emailAddress':
        newErrors.emailAddress = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ''
          : 'Invalid email address.';
        break;
      case 'password':
        newErrors.password = '';
        // Add your password validation logic here
        break;
      case 'contactNo':
        newErrors.contactNo = /^\d{10}$/.test(value) ? '' : 'Contact number must be 10 digits.';
        break;
      case 'course':
        newErrors.course = value.trim() ? '' : 'Courses are required.';
        break;
      case 'address':
        newErrors.address = value.trim() ? '' : 'Address is required.';
        break;
      case 'dob':
        if (!value.trim()) {
          newErrors.dob = 'Date of Birth is required.';
        } else {
          const enteredDate = new Date(value);
          const today = new Date();
          if (enteredDate >= today) {
            newErrors.dob = 'Invalid Date of Birth.';
          }
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;
    let newErrors = {
      fullName: '',
      qualification: '',
      emailAddress: '',
      password: '',
      contactNo: '',
      course: '',
      address: '',
      dob: '',
    };

    Object.keys(errors).forEach((fieldName) => {
      validateField(fieldName, errors[fieldName]);
      if (newErrors[fieldName]) {
        isValid = false;
      }
    });

    setErrors(newErrors);

    if (isValid) {
      setLoading(true);

      try {
        const response = await fetch(`http://localhost:8080/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            full_Name: fullName,
            qualification: qualification,
            email_Address: emailAddress,
            password: password,
            contact_No: contactNo,
            course: course,
            address: address,
            dob: dob,
            role: role,
          }),
        });

        if (response.ok) {
          const isConfirmed = window.confirm('Do you want to update the user?');
          if (isConfirmed) {
            alert('Update successful');
            setFullName('');
            setQualification('');
            setEmailAddress('');
            setPassword('');
            setContactNo('');
            setCourse('');
            setAddress('');
            setDob('');
          }
        } else {
          console.error('Update failed:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error during fetch:', error.message);
      } finally {
        setLoading(false);
      }
    } else {
      console.log('Form has errors. Cannot submit.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setErrors({ ...errors, [name]: '' });

    // Add validation on blur
    if (e.type === 'blur' && name !== 'role') {
      validateField(name, value);
    }

    // Update state
    switch (name) {
      case 'fullName':
        setFullName(value);
        break;
      case 'qualification':
        setQualification(value);
        break;
      case 'emailAddress':
        setEmailAddress(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'contactNo':
        setContactNo(value);
        break;
      case 'course':
        setCourse(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'dob':
        setDob(value);
        break;
      case 'role':
        setRole(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container-fluid "style={{display:'flex', justifyContent: 'center',
    alignItems: 'center' }}>
      <div className="col-lg-6 mx-5 mt-5 ml-6 ">
        <div className="card shadow" style={{ backgroundColor: '#f0f0f0' }}>
          <h1 style={{ textAlign: 'center', fontSize: '30px' }} className="mt-3">
            Edit User
          </h1>
          <div className="card-body">
            <form className="myform" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                  className="form-control"
                  value={fullName}
                  onChange={handleChange}
                  onBlur={handleChange}
                />
                <div className="text-danger">{errors.fullName}</div>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  id="qualification"
                  name="qualification"
                  placeholder="Qualification"
                  className="form-control"
                  value={qualification}
                  onChange={handleChange}
                  onBlur={handleChange}
                />
                <div className="text-danger">{errors.qualification}</div>
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  placeholder="Email Address"
                  className="form-control"
                  value={emailAddress}
                  onChange={handleChange}
                  onBlur={handleChange}
                />
                <div className="text-danger">{errors.emailAddress}</div>
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  value={password}
                  onChange={handleChange}
                  onBlur={handleChange}
                />
                <div className="text-danger">{errors.password}</div>
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  id="contactNo"
                  name="contactNo"
                  placeholder="Contact Number"
                  className="form-control"
                  value={contactNo}
                  onChange={handleChange}
                  onBlur={handleChange}
                />
                <div className="text-danger">{errors.contactNo}</div>
              </div>
              <div className="mb-3">
                <select
                  id="course"
                  name="course"
                  className="form-select"
                  value={course}
                  onChange={handleChange}
                  onBlur={handleChange}
                >
                  <option value="">Select a course</option>
                  {courseList.map((course) => (
                    <option key={course.course_Id} value={course.course_Name}>
                      {course.course_Name}
                    </option>
                  ))}
                </select>
                <div className="text-danger">{errors.course}</div>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Address"
                  className="form-control"
                  value={address}
                  onChange={handleChange}
                  onBlur={handleChange}
                />
                <div className="text-danger">{errors.address}</div>
              </div>
              <div className="mb-3">
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  className="form-control"
                  value={dob}
                  onChange={handleChange}
                  onBlur={handleChange}
                />
                <div className="text-danger">{errors.dob}</div>
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <Link className="btn btn-outline-danger mx-2" to="/">
                Cancel
              </Link>
            </form>
          </div>
          {/* <br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br> */}

        </div>
      </div>
            
    </div>
  );
};