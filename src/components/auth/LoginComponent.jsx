import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { RiRefreshLine } from "react-icons/ri";
import captcha from '../../assetsechttech/utility-images/captcha.PNG';
import { HiChevronDoubleRight,  HiChevronDoubleLeft  } from "react-icons/hi";
import { GoEyeClosed } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isClosed, setIsClosed] = useState(false); // State to manage close/open
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Replace with your login logic
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      navigate('/dashboard');
    } catch (error) {
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleForgetPassword = () => {
    setShowEmailInput(true);
  };

  const backToLogin = () => {
    setShowEmailInput(false);
  };

  const toggleSection = () => {
    setIsClosed(!isClosed); // Toggle the closed state
  };
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle function to switch between the two layouts
  const toggleView = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mc ">
    <div className="min-h-screen relative bg-gray-300 border flex  items-center bg-login-img">
      <div className={`absolute mc-child bg-blue-500 transition-all duration-500 flex ${
            isExpanded ? 'w-[325px]' : 'w-[650px]'
          }`}>
        
        {/* The Toggle Button */}
        <button
          className="absolute -top-2 -right-2 -mr-4 mt-2 bg-blue-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
          onClick={toggleView}
        >
        
          {isExpanded ?  <HiChevronDoubleRight/> : <HiChevronDoubleLeft/>}
        </button>

        {/* Left Box (blue section) */}
        <div className={`bg-white  shadow-lg max-w-sm  transition-all duration-500 ${isExpanded ? 'max-w-full' : 'max-w-[50%]'} overflow-hidden`}>
          
          <div className='p-8' >
          <h2 className="text-2xl font-bold mb-2">Login</h2>
          <p className='mb-2 text-sm text-gray-500'>Welcome, Please enter credentials</p>
          <form onSubmit={handleSubmit}>
  {!showEmailInput ? (
    <>
      {/* Email and Password Fields */}
      <div className="mb-4">
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border-slate-200 text-gray-700 focus:border-blue-500"
          placeholder="Email"
          required
        />
      </div>

      <div className="mb-6 relative">
        <label htmlFor="password" className="sr-only">Password</label>
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className=" w-full px-3 py-2 border-slate-200 text-gray-700 focus:border-blue-500"
          placeholder="Password"
          required
        />

          <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute-eye-pwd focus:outline-none"
                >
                  {showPassword ? <GoEyeClosed/> : <IoEyeOutline/>}
                </button>


      </div>

      <div className="mb-6">
        <div className='flex items-center h-[42px] mb-3'>
          <img className='w-auto h-[40px]' src={captcha} alt="" />
          <button className="flex items-center mx-3 px-2 py-3 text-sm font-medium text-blue-700 bg-white border border-black-700 rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <RiRefreshLine />
          </button>
          <input
          type="captcha"
          id="captcha"
          className="w-full border px-3 py-2 border-slate-200 text-gray-700 focus:border-blue-500"
          placeholder="Captcha"
          required
        />
        </div>
        
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full login-btn mt-2 mb-12 bg-gradient-to-r text-white font-bold py-3 px-4 from-blue-300 via-blue-500 to-blue-900 transition duration-300"
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </>
  ) : (
    <div className="mb-4">
      <label htmlFor="forgetEmail" className="sr-only">Reset Password Email</label>
      <p>Enter your registered email</p>
      <input
        type="email"
        id="forgetEmail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-4 px-3 py-2 border-slate-200 text-gray-700 focus:border-blue-500"
        placeholder="Enter your email to reset password"
        required
      />
      <button
        type="button"
        className="w-full mt-2 mb-12 bg-gradient-to-r text-white font-bold py-3 px-4 rounded-lg from-blue-300 via-blue-500 to-blue-900 transition duration-300"
        onClick={() => {/* Add your reset password logic here */}}
      >
        Send Reset Link
      </button>
    </div>
  )}
</form>
{showEmailInput && (
  <p className='text-end text-sm text-gray-500'>
    Login now <Link to="#" onClick={backToLogin} className="text-blue-500 hover:underline">Login</Link>
  </p>
)}

{!showEmailInput && (
  <p className='text-end text-sm text-gray-500'>
    If you forget the password? <Link to="#" onClick={handleForgetPassword}>Forget</Link>
  </p>
)}
          </div>
          
         
        </div>

        {/* Right Box (red section) */}
        <div className={`bg-blue-500 flex items-center justify-between overflow-hidden rounded-lg shadow-lg  transition-all duration-500 ${isExpanded ? 'max-w-0 overflow-hidden' : 'max-w-[50%]'}`}>
         
         
         <div div className='p-8' >
          
          <div>
          <h2 className="text-3xl text-white font-bold ">
            Efficiently Organize and <span className='font-bold'>Handle Tasks</span>
          </h2>
          <p className='text-white' >
            Manage your HR tasks efficiently. See flawless details of your employee performance, track their progress.
          </p>
          </div>
         </div>
        </div>
      </div>
    </div>
  </div>
    
  );
};

export default LoginComponent;
