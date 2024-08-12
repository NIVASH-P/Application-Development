import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../../Assests/assets';
import './Login.css';
import axios from 'axios';
import { LoginContext } from './LoginContext';

const COURSE_API_URL = "http:/localhost:8090";

export default function Login() {
  const [formData, setFormData] = useState({
    number: '',
    name: 'Nivash',
    oneTimePassword: '123456',
  });
  const [GivenData, setGivenData] = useState({
    number: '',
    oneTimePassword: '',
  });
  useEffect(()=>{
    const userdata = JSON.parse(localStorage.getItem('user'));
    if(userdata)
    {
      setFormData(userdata);
      setLoggedIn(false);
    }
  },[]);
  const [currState, setCurrState] = useState('Login');
  const [otp, SetOtp] = useState(false);
  const { setLoggedIn, setShowLogin, setShowReel, SetCurrlogin,login,setLogin } = useContext(LoginContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === 'number' || name === 'oneTimePassword') {
      setGivenData({
        ...GivenData,
        [name]: value,
      });
    }
    console.log(name, value,GivenData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post('http://localhost:8090/otp/Sentotp', formData);
      console.log('Response:', response.status);
      localStorage.setItem('user',JSON.stringify(formData)) ;
    } catch (error) {
      console.error('There was an error!', error);
    }
    
  };

  const handleOtp = async (e) => {
    e.preventDefault();
    try {
      console.log(GivenData);
      const response = await axios.post('http://localhost:8090/otp/validateotp', GivenData);
      console.log('Response:', response.data);
      if (response.data === "OTP is Valid") {
        console.log("OTP is Valid");
        console.log(GivenData.number);
        setShowLogin(false);
        setLoggedIn(true);

        // Store data in local storage
        // localStorage.setItem();
        // localStorage.setItem('isLoggedIn', 'true');
        // SetCurrlogin(GivenData.number);
      } else {
        setLoggedIn(false);
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  const handleClick = (e) => {
    SetOtp(true);
    handleSubmit(e);
  };

  return (
    <div className='Login-popUp'>
      <form className="Login-Container">
        <div className="Login-PopUp-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} className='cross-image' src={assets.cross_icon} alt="" />
        </div>
        <div className="input-components">
          {currState === 'Login' ? <></> : <input type='text' placeholder='Your Name' value={formData.name} />}
          <input type='text' name='number' placeholder='Your Mobile Number' value={formData.number} onChange={handleChange} />
          {otp === true ? <input type='password' name='oneTimePassword' placeholder='Enter One Time Password' value={formData.oneTimePassword} onChange={handleChange} /> : <></>}
        </div>
        {otp === false ? <button className="input-components-button" type='submit' onClick={handleClick}>{currState === 'Sign Up' ? 'Get OTP' : 'Get OTP'}</button> : <></>}
        {otp === true ? <button className="input-components-button" onClick={handleOtp}>{currState === 'Sign Up' ? 'Create Account' : 'Login'}</button> : <></>}
        <div className="login-popUp-Condition">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use and policy</p>
        </div>
        {
          currState === "Login" ? <p>Create an Account? <span onClick={() => setCurrState("Sign Up")}>Click Here</span> </p> : <p>Already Have an Account? <span onClick={() => setCurrState("Login")}>Login Here</span> </p>
        }
      </form>
    </div>
  );
}
