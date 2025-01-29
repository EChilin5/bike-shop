import React, { useState } from 'react'
import "./Login.scss"
import paw from "../image/paw_print.jpg"
import dog from "../image/doggo.webp"

const Login = () => {
    const[firstName, serFirstName] = useState('');
    const[password, setPassword] = useState('');

    const login = ()=>{
        console.log(firstName + " " + password);
        window.open('http://localhost:3000/pets');
    }

  return (
    <div className='login'>
        <div className='login-bg'><img src={paw} alt="image"/></div>
        <div className='login-container'>
        <div className='login-dog'>
            <img src={dog} alt="doggo"/>
        </div>
        <div className='login-items'>
        <div className='login-title'>Welcome to FetchPets</div>
        <div className='login-subtitle'>Login</div>
        <div></div>
        <div className='login-input'><input placeholder='name' type="text"/></div>
        <div className='login-input'><input placeholder='name' type="text"/></div>
        <div className='login-btn'><button onClick={()=>login()}>Login </button></div>
        </div>
        </div>
    </div>
  )
}

export default Login