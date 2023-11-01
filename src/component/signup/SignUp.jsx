import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logoooos from "../../asset/loginlogo.png";
const SignUp = () => {
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
                navigate('/login');
              } else {
                setFormData({
                  name: '',
                  email: '',
                  password: '',
                });
                localStorage.setItem('user', JSON.stringify(data));
                navigate('/user');
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
    <section className="signup">
      <main>
        <div className="signupdetail">
          <h1>Welcome</h1>
          <p>Register your account</p>
          <form action="">
          <input
              type="text"
              name='name'
              className="bottom-border-input"
              placeholder="Name"
              onChange={(e)=>{setFormData({...formData,name:e.target.value})}} value={formData.name}
            />
            {errors.name && (<span className="spanError">{errors.name}</span>)}
            <input
              type="text"
              name='email'
              className="bottom-border-input"
              placeholder="Email"
              onChange={(e)=>{setFormData({...formData,email:e.target.value})}} value={formData.email}
            />
            {errors.email && (<span className="spanError">{errors.email}</span>)}
            <input
              type="password"
              name="password"
              className="bottom-border-input"
              placeholder="Password"
              onChange={(e)=>{setFormData({...formData,password:e.target.value})}} value={formData.password}
            />
            {errors.password && (<span className="spanError">{errors.password}</span>)}
            <button onClick={(e)=>collectData(e)} className="loginbtn">
              Register
            </button>
          </form>
          <Link to="/login">Already have an account?</Link>
          <div className="forgot">
            <Link to="/forgotpassword">Forgot Password</Link>
            <hr />
          </div>
        </div>
        <div className="loginsvg">
          <img src={logoooos} alt="signup" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            eos. Officia fugiat rerum expedita, temporibus beatae placeat vitae
            voluptatem voluptatum, assumenda repudiandae porro aliquid impedit 
          </p>
        </div>
      </main>
    </section>
  )
}

export default SignUp
