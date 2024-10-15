import React, { useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplateNoReload, LoadCanvasTemplate, validateCaptcha,} from 'react-simple-captcha';
import { useNavigate, Link } from 'react-router-dom';
import { RiRefreshLine } from "react-icons/ri";
import { FaCaretLeft } from 'react-icons/fa';
import captcha from '../../assetsechttech/utility-images/captcha.PNG';
import { HideLoading, ShowLoading } from "../../reduxapis/slice/alertsSlice";
import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi";
import { useAlert } from 'react-alert'
import { GoEyeClosed } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { login, clearErrors } from '../../reduxapis/actions/loginAction';


const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedinType, setOTP] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showEmailInput, setShowEmailInput] = useState(false);
    const [isClosed, setIsClosed] = useState(false);
    const [showOtpInput, setShowOtpInput] = useState(false);
    const navigate = useNavigate();
    const [captchaCode, setCaptchaCode] = useState('');
    const [generatedCaptcha, setGeneratedCaptcha] = useState('');
    const { register, handleSubmit,handleSubmitveryfy, formState: { errors } } = useForm();
    const alert = useAlert();
    const dispatch = useDispatch();


  const { isAuthenticated, error, message, loading, user } = useSelector(state => state.auth);
    //const redirect = location.search ? location.search.split('=')[1] : '/'
    useEffect(() => {
        if (isAuthenticated) {
            dispatch(HideLoading());
            alert.success(message)
            if(user.loggedinType ==='normal' || user.loggedinType ==='normal-verify'){
              navigate('/dashboard');
            }
        }
        if (error) {
            // const fields = error.match(/"([^"]+)"/g).map((field) => field.replace(/"/g, ''));
            // fields.map((field, index) => (
              alert.error(error)
          //  ))
            dispatch(clearErrors());
        }
    }, [dispatch,  isAuthenticated, error])
  const onSubmit = (e) => {
      dispatch(ShowLoading());
      dispatch(login(e.email, e.password, loggedinType))
      if(loggedinType == 'otp'){
          setShowOtpInput(true);
        }else{
          setShowOtpInput(false)
        }
  };
  const onButtonClick = (btnValue) => {
    dispatch(ShowLoading());
    setOTP(btnValue);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgetPassword = () => {
    setShowEmailInput(true);
  };

  const backToLogin = () => {
    setShowEmailInput(false);
    setShowOtpInput(false);
  };
  const toggleView = () => {
    setIsClosed(!isClosed);
  };
  React.useEffect(() => {
    loadCaptchaEnginge(6); // Generate a 6-character CAPTCHA
  }, []);
  
  return (
    <div className="mc">
      <div className="min-h-screen relative bg-gray-300 border flex items-center bg-login-img">
        <div className={`parnt-login-h-438 absolute mc-child main-bg-color transition-all duration-500 flex ${isClosed ? 'w-[325px]' : 'w-[650px]'}`}>
          {/* The Toggle Button */}
          <button
            className="absolute -top-2 -right-2 -mr-4 mt-2 main-bg-color text-white font-bold py-2 px-4 rounded-full focus:outline-none"
            onClick={toggleView}
          >
            {isClosed ? <HiChevronDoubleRight /> : <HiChevronDoubleLeft />}
          </button>

          {/* Left Box (blue section) */}
          <div className={`child-login-h-438 bg-white shadow-lg max-w-sm transition-all duration-500 ${isClosed ? 'max-w-full' : 'max-w-[50%]'} overflow-hidden`}>
            <div className='p-8'>
              {/* Only show Login heading and welcome message when not on OTP page */}
              {!showOtpInput && (
                <>
                </>
              )}

              <form onSubmit={handleSubmit(onSubmit)}>
                {!showEmailInput && !showOtpInput ? (  // Hide login form if OTP input is shown
                  <>
                   <h2 className="text-2xl font-bold mb-2">Login</h2>
                   <p className='mb-2 text-sm text-gray-500'>Welcome, Please enter credentials</p>
                    {/* Email and Password Fields */}
                    <div className="mb-3">
                      <label htmlFor="email" className="sr-only">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-5 border-slate-200 text-gray-700 focus:border-blue-500"
                        placeholder="Email"
                        {...register('email', {
                          required: 'Please input your email!',
                          pattern: {
                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                            message: 'The input is not a valid E-mail!'
                          }
                        })}
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    <div className="mb-6 relative">
                      <label htmlFor="password" className="sr-only">Password</label>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-5 border-slate-200 text-gray-700 focus:border-blue-500"
                        placeholder="Password"
                        {...register('password', {
                          required: 'Please input your password!',
                          minLength: {
                            value: 7,
                            message: 'Password must be at least 7 characters long.'
                          },
                          // pattern: {
                          //   value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                          //   message: 'The input is not a valid E-mail!'
                          // }
                        })}
                      />
                      {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                      <button type="submit" className='text-sm signin-text font-bold mt-4' onClick={() => onButtonClick('otp')}>Sign-in with OTP</button>
                      {/* <Link>
                        <p className='text-sm signin-text font-bold mt-2' onClick={signinOtp}>Sign-in with OTP</p>
                      </Link> */}
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute-eye-pwd focus:outline-none"
                      >
                        {showPassword ?  <IoEyeOutline /> : <GoEyeClosed />}
                      </button>
                    </div>
                    <div className="mb-2">
                      <div className='flex items-center h-[42px] mb-3'>
                      <LoadCanvasTemplate />

                        {/* <button className="flex items-center mx-3 px-2 py-3 text-sm font-medium text-blue-700 bg-white border border-black-700 rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                          <RiRefreshLine />
                        </button> */}
                        <input
                          type="text"
                          id="captcha"
                          name="captcha"
                          className="w-full border px-3 py-2 border-slate-200 text-gray-700 focus:border-blue-500"
                          placeholder="Captcha"
                          {...register('captcha', {
                            required: 'Please input your captcha!',
                            minLength: {
                              value: 6,
                              message: 'captcha must be at least 6 characters long.'
                            },
                            pattern: {
                              value: /^\d{6}$/,
                              message: 'The input is not a valid captcha!'
                            }
                          })}
                        />
                      </div>
                      {errors.captcha && <p className="text-red-500 text-sm">{errors.captcha.message}</p>}
                    </div>

                    <button
                      type="submit"
                      onClick={() => onButtonClick('normal')}
                      disabled={loading}
                      className="w-full login-btn mt-2 mb-2 bg-gradient-to-r text-white font-bold py-3 px-4 from-blue-300 via-blue-500 to-blue-900 transition duration-300"
                    >
                      {loading ? 'Logging in...' : 'Login'}
                    </button>
                  </>
                ) : null} 
                {/* Only show login form if OTP input is NOT shown */}
                {showEmailInput ? (
                  <div className="mb-4">
                    <label htmlFor="forgetEmail" className="sr-only">Reset Password Email</label>
                    <h2 className='text-2xl font-bold mb-2' >Enter your registered email</h2>
                    <input
                      type="email"
                      id="forgetEmail"
                      value={email}
                     // onChange={(e) => setEmail(e.target.value)}
                      className="w-full mb-2 px-3 py-2 border-slate-200 text-gray-700 focus:border-blue-500"
                      placeholder="Enter your email to reset password"
                      required
                    />
                    <button
                      type="button"
                      className="w-full mt-2 mb-12 bg-gradient-to-r text-white font-bold py-3 px-4 rounded-lg from-blue-300 via-blue-500 to-blue-900 transition duration-300"
                      onClick={() => {/* Add your reset password logic here */ }}
                    >
                      Send Reset Link
                    </button>
                  </div>
                ) : null}

              </form>
              {showEmailInput && (
                <p className='text-end text-sm text-gray-500'>
                  Login now <Link to="#" onClick={backToLogin} className="text-blue-500 hover:underline">Login</Link>
                </p>
              )}
              {!showEmailInput && !showOtpInput && ( // Show only when OTP input is not shown
                <p className='text-start text-sm text-gray-500'>
                  If you forget the password? <Link to="#" onClick={handleForgetPassword}>Forget</Link>
                </p>
              )}
            </div>

            {/* Show this div on click of signinOtp */}
            {showOtpInput && (
              <form onSubmit={handleSubmitveryfy(onSubmit)}>
              <div className='px-8 pb-20'>
                {/* Remove the heading and welcome message from the OTP page */}
                {/* <h1 className='text-3xl font-bold mb-2' >Company Logo</h1> */}
                <p className='font-bold mb-2' >Verification Code (Sent to registered Email & Mobile)</p>
                <input type="text" 
                  id="sentotp"
                  name="sentotp"
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  placeholder="Enter OTP" 
                  {...register('sentotp', {
                    required: 'Please input your OTP!',
                    minLength: {
                      value: 6,
                      message: 'OTP must be at least 6 characters long.'
                    },
                    pattern: {
                      value: /^\d{6}$/,
                      message: 'The input is not a valid OTP!'
                    }
                  })}
                 />
                <div className='flex items-center'>
                <button className="login-btn mt-4 bg-gradient-to-r text-white font-bold py-3 px-2 from-blue-300 via-blue-500 to-blue-900 transition duration-300 w-1/2"
                  onClick={() => onButtonClick('otp')}>Resend Code</button>
                <button className="mt-4 bg-gray-500  text-white font-bold py-3 mx-1 px-4 rounded w-1/2"
                onClick={() => onButtonClick('normal-verify')}>Verify</button>
                </div>
              </div>
              </form>
            )}
          </div>

          {/* Right Box (red section) */}
          
          <div className={`main-bg-color flex justify-between overflow-hidden rounded-lg shadow-lg transition-all duration-500 ${isClosed ? 'max-w-0 overflow-hidden' : 'max-w-[50%]'}`}>
             
            <div className='p-8'>
              <div className='login-style' >
                <div className='flex items-center' >
                   <HiChevronDoubleRight className='text-white mt-1'/>

                   <h2 className='text-white underline font-bold' >Learn more about us</h2>

                </div>
                <h4 className=" text-white font-bold">
                  Efficiently Organize and <span className='font-bold'>Handle Tasks .</span>
                </h4>
                <p className='text-white'>
                  Manage your HR tasks efficiently. See how our innovative solutions can help you save time and focus on what matters most.
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
