import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validation = () => {
    const newErrors = {};
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Please enter your Correct Email ID';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!passwordPattern.test(formData.password)) {
      newErrors.password =
        'Password should have at least one lowercase letter, one uppercase letter, and one special character';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const collectData = async (e) => {
    e.preventDefault();
  
    if (validation()) {
      try {
        const response = await fetch('http://localhost:5000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(formData),
        });
  
        if (response.status === 200) {
          const data = await response.json();
  
          if (data === 'exist') {
            alert('Email already exists');
            navigate('/');
          } else {
            setFormData({
              name: '',
              email: '',
              password: '',
            });
            localStorage.setItem('user', data.name);
            navigate('/');
          }
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  
  return (
<section className="login">
        <div className="logindetail">
            <h1>Welcome</h1>
            <p>Create Account</p>
            <input type="text" name="name" className="bottom-border-input" placeholder="Name" onChange={(e)=>{setFormData({...formData,name:e.target.value})}} value={formData.name} />
                {errors.name && (<span className="text-red-500">{errors.name}</span>)}
                
                <input type="email" name="email" className="bottom-border-input" placeholder="Email" onChange={(e)=>{setFormData({...formData,email:e.target.value})}} value={formData.email} />
                {errors.email && (<span className="text-red-500">{errors.email}</span>)}
                
                <input type="password" name='password' className="bottom-border-input" placeholder="Password" onChange={(e)=>{setFormData({...formData,password:e.target.value})}} value={formData.password} />
                {errors.password && (<span className="text-red-500">{errors.password}</span>)}
                
                <button onClick={(e)=>collectData(e)} className="loginbtn">Register</button>
                <Link to="/">ALready have an account?</Link>
            <div className="forgot">
                <Link to="/forgotpassword">Forgot Password</Link>
                <hr />
            </div>
        </div>
    </section>
  );
}
