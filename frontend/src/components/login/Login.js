import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'


const Login = () => {
    const initialValues = {
        "email": "",
        "password": "",
    };
    const [values, setValues] = useState(initialValues);
    const navigate=useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };
      const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8082/login', values).then(
            res=>{
                localStorage.setItem("currentUser",JSON.stringify(res.data.user))
                localStorage.setItem("currentToken",JSON.stringify(res.data.token))
                navigate('/cart') 
            } ).catch(err=>{
            console.log(err)
            //can not access the server
        })
      }

    return (
        <div className='login'>
            <form className='form'>
                <h1>Log in</h1>
                <div className='input'>
                    <input onChange={handleInputChange} type='email' name='email' placeholder='Email' />
                </div>  
                <div className='input'>            
                    <input onChange={handleInputChange} type='password' name='password' placeholder='Password' />
                </div>
                <button className='submit' onClick={(e)=>{handleSubmit(e)}}>SUBMIT</button>
            </form>
        </div>
    );
};

export default Login;