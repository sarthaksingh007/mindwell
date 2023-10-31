import React, {useState} from "react";

import {useNavigate, Link } from "react-router-dom";
import logoooos from "../../asset/loginlogo.png";
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();


  const validation = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validation()) {
      try {
        const response = await fetch('http://localhost:5000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', // This sends cookies with the request
          body: JSON.stringify(formData),
        });
  
        if (response.status === 200) {
          const data = await response.json();
  
          if (data === 'Notfound') {
            alert('Please enter a correct Email');
            return;
          } else if (data === 'Notmatch') {
            alert('Please enter a correct Password');
            return;
          }
  
          console.warn(data.name);
          localStorage.setItem('user', JSON.stringify(data));
          setFormData({
            name: '',
            email: '',
            password: '',
          });
          navigate('/choice');
          
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
      <main>
        <div className="loginsvg">
          <img src={logoooos} alt="login " />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            eos. Officia fugiat rerum expedita, temporibus beatae placeat vitae
            voluptatem voluptatum, assumenda repudiandae porro aliquid impedit 
          </p>
        </div>
        <div className="logindetail">
          <h1>Welcome</h1>
          <p>Login your account</p>
          <form action="">
            <input
              type="text"
              name='name'
              className="bottom-border-input"
              placeholder="Email"
              onChange={(e)=>{setFormData({...formData,email:e.target.value})}} value={formData.email}
            />
             {errors.email && (<span className="spanError">{errors.email}</span>)}
            <input
              type="password"
              name='password'
              className="bottom-border-input"
              placeholder="Password"
              onChange={(e)=>{setFormData({...formData,password:e.target.value})}} value={formData.password}
            />
            {errors.password && (<span className="spanError">{errors.password}</span>)}
            <button onClick={(e)=>handleSubmit(e)} className="loginbtn">
              Login
            </button>
          </form>
          <Link to="/signup">Create Account</Link>
          <div className="forgot">
            <Link to="/forgotpassword">Forgot Password</Link>
            <hr />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Login;
