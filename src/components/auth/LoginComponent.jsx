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

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-login-img">
      <div className={`relative flex max-w-4xl bg-white shadow-lg rounded-lg ${isClosed ? 'flex-row w-1/4' : 'flex-row w-full md:w-full'}`}>
        
        {/* Left Section */}
        <div className="mlc-left p-8 bg-gray-100  ${isClosed ? width : '50%' : '100%'}"  >
          <h2 className="text-3xl">Welcome to</h2>
          <h2 className="text-3xl mb-2 font-bold text-blue-500">EchtTech HRMS</h2>
          <p className='mb-6 text-sm text-gray-500'>Hi, login to your account</p>

          {error && <p className="text-red-500 mb-4">{error}</p>}

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
                    placeholder="Enter captcha"
                    required
                  />
                  </div>
                  
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 mb-12 bg-gradient-to-r text-white font-bold py-3 px-4 rounded-full from-blue-300 via-blue-500 to-blue-900 transition duration-300"
                >
                  {loading ? 'Logging in...' : 'Login'}
                </button>
              </>
            ) : (
              <div className="mb-4">
                <label htmlFor="forgetEmail" className="sr-only">Reset Password Email</label>
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
                  className="w-full mt-2 mb-12 bg-gradient-to-r text-white font-bold py-3 px-4 rounded-full from-blue-300 via-blue-500 to-blue-900 transition duration-300"
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

        {/* Right Section */}
        <div className={`mlc-right overflow-hidden flex flex-col justify-center main-bg-color text-white ${isClosed ? 'transition-all duration-300' : 'p-8 transition-all duration-300'} transition-all duration-300`} style={{ width: isClosed ? '0' : '50%', 'transform -translate-y-full opacity-0' : 'flex translate-y-0 opacity-100' }}>
          <h2 className='relative text-3xl mb-2'>
            Efficiently Organize and <span className='font-bold'>Handle Tasks</span>
        
          </h2>

          <p className="text-base leading-relaxed px-2 border-l-4 border-gray-300 pl-4">
            Manage your HR tasks efficiently. See flawless details of your employee performance, track their progress.
          </p>
          
         
        </div>
        <button className='drawer-btn text-black p-[14px] rounded-[12px]' onClick={toggleSection}>
            {isClosed ?  <HiChevronDoubleRight/> : <HiChevronDoubleLeft/>}
          </button>
       
      </div>
     
     
      
    </div>
  );
};

export default LoginComponent;
