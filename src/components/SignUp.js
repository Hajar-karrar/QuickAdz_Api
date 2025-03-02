import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../Reducers/authSlice';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Sign.css';
import Navbar from './Navbar';
/* import Footer1 from './Footer1'; */
export default function SignUp() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [email, setEmail]= useState("");
  const [password, setPassword] = useState("");
  const [selected, setSelected]= useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSelect = (event) => {
    setSelected(event.target.value);
  };
  const handleSignIn =()=>{
    if (email === "admin@example.com" && password === "admin123" && selected ==="admin"){
      dispatch(login ({user : email}));
      navigate("/Admin");
    }
    else{
      dispatch (login({user : email}));
      navigate("/Member");
    }
  }
  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <>
    <div className="body18">
    <Navbar/>

    <div className="body">

      <div
        className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`}
        id="container"
      >
        {/* Sign-Up Form */}
        <div className="form-container sign-up-container">
          <form action="#" className='form1'>
            <h1 className='h11'>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <div className="infield">
              <input type="text" placeholder="Name" className='input1' />
              <label className='label1'></label>
            </div>
            <div className="infield">
              <input type="email" placeholder="Email" name="email" className='input1'  />
              <label className='label1'></label>
            </div>
            <div className="infield">
              <input type="password" placeholder="Password" className='input1' />
              <label className='label1'></label>
            </div>
            <button className="button">Sign Up</button>
          </form>
        </div>

        {/* Sign-In Form */}
        <div className="form-container sign-in-container">
          <form className='form1' >
            <h1 className='h11'>Sign In</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span className='span'>or use your account</span>
            <div className="infield">
              <input type="email" placeholder="Email" name="email" className='input1' onChange={(e) => setEmail(e.target.value)} value={email}/>
              <label className='label1'></label>
              
            </div>
            <div className="infield">
              <input type="password" placeholder="Password" className='input1' onChange={(e)=> setPassword(e.target.value)} />
              <label className='label1'></label>
            </div>
            <div className='infield'>
              <select name="" onChange={handleSelect} id="" className='input2' value={selected}>
                <option value="member">Member</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <a href="#" className="forgot">Forgot your password?</a>
            <button className="button" onClick={handleSignIn}>Sign In</button>
          </form>
        </div>

        {/* Overlay Panel */}
        <div className="overlay-container" id="overlayCon">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className='h11'>Welcome Back!</h1>
              <p className='p1'>To keep connected with us please login with your personal info</p>
              <Link to='/Admin'><button className="ghost button" id="signIn" onClick={handleSignInClick}>Sign In</button></Link> 
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className='h11'>Hello, Friend!</h1>
              <p className='p1'>Enter your personal details and start your journey with us</p>
              <button className="ghost button" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
{/*     <Footer1/>
 */}
    </div>
    
    </>

  );
}