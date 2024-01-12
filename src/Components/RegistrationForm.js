import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationForm = () => {
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
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:8080/courses');
        if (response.ok) {
          const courses = await response.json();
          setCourseList(courses);
        } else {
          console.error('Error fetching courses:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error during fetch:', error.message);
      }
    };

    fetchCourses();
  }, []);

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
        if (
          value.length < 8 ||
          value.length > 16 ||
          !/[a-z]/.test(value) ||
          !/[A-Z]/.test(value) ||
          !/[!@#$%^&*(),.?":{}|<>]/.test(value) ||
          /\s/.test(value)
        ) {
          newErrors.password =
            'At least one lowercase letter, At least one uppercase letter, At least one special character, No spaces allowed, Minimum 8 and maximum 16 characters';
        }
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
          // Check if the entered date is less than today's date
          const enteredDate = new Date(value);
          const today = new Date();

          if (enteredDate >= today) {
            newErrors.dob = 'Invalid Date of Birth.';
          } else {
            newErrors.dob = '';
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

    // Check each field individually for emptiness
    if (!fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
      isValid = false;
    }
    if (!qualification.trim()) {
      newErrors.qualification = 'Qualification is required';
      isValid = false;
    }
    if (!emailAddress.trim()) {
      newErrors.emailAddress = 'Email Address is required';
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    if (!contactNo.trim()) {
      newErrors.contactNo = 'Contact Number is required';
      isValid = false;
    }

    if (!course.trim()) {
      newErrors.course = 'Courses are required';
      isValid = false;
    }

    if (!address.trim()) {
      newErrors.address = 'Address is required';
      isValid = false;
    }

    if (!dob.trim()) {
      newErrors.dob = 'Date of Birth is required';
      isValid = false;
    }

    // Update errors state with the new error messages
    setErrors(newErrors);

    if (isValid) {
      setLoading(true);

      try {
        // Send registration data to the backend (replace 'http://localhost:8080/register' with your actual backend endpoint)
        const response = await fetch('http://localhost:8080/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            full_Name: fullName,
            qualification: qualification,
            email_Address: emailAddress,
            password: password,
            contact_No: parseInt(contactNo, 10),
            course: course,
            address: address,
            dob: dob,
            role: role,
          }),
        });

        // Log response data
        console.log('Response:', response);

        if (response.ok) {
          // Registration successful, handle as needed
          alert('Registration successful')
          console.log('Registration successful');
          // Reset form fields
          setFullName('');
          setQualification('');
          setEmailAddress('');
          setPassword('');
          setContactNo('');
          setCourse('');
          setAddress('');
          setDob('');
        } else {
          // Registration failed, log error status and response
          console.error('Registration failed:', response.status, response.statusText);
        }
      } catch (error) {
        // Log any other errors that might occur during the fetch
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
    <div className="container-fluid">
      <div className="col-lg-4 mx-auto mt-3 shadow">
        <div className="card" style={{ backgroundColor: '#f0f0f0' }}>
          <h1 style={{ textAlign: 'center', fontSize: '30px' }} className="mt-3">Registration Form</h1>
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
              <input type="submit" value="Register" className="btn btn-primary" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegistrationForm;