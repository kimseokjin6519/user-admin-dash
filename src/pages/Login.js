import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import GoogleLogo from '../assets/images/google-logo.png';

function Login() {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [errorMessage, setErrorMessage] = useState('');

   /* Authenticate Token Hook */

   useEffect(() => {   
      const token = sessionStorage.getItem('authToken');
      if (token === 'sessionTokenValue')
         setIsAuthenticated(true);
      else setIsAuthenticated(false);
   }, []);

   /* Handle Form & Authenticate User Function */

   const handleSubmit = (event) => {
      if (email === 'user@example.com' && password === 'mypassword123') {
         sessionStorage.setItem('authToken', 'sessionTokenValue');
         setIsAuthenticated(true);
      } else setErrorMessage('Invalid credentials');
    };

    /* Allow user to Home Page if authenticated */

    if (isAuthenticated)
      return <Navigate to="/home" />;
    
   return (
      <div>
         {/* Background */}
         <div className="flex bg-white h-screen justify-center items-center">
            {/* Login Box */}
            <div className="flex flex-col border-[1px] border-gray-200 w-1/4 h-1/2 justify-center bg-white shadow-md rounded-lg">
               <div className="flex items-end mb-2">
                  <img src={GoogleLogo} alt="Google Logo" className="flex items-center ml-4 mt-4 h-12 w-12"/>
                  <div className="flex h-12 items-center mx-2 text-lg text-blue-800" style={{fontFamily:'Google Sans'}}>Google Admin</div>
               </div>   
               <div className="flex mx-4 text-xl font-normal" style={{fontFamily:'Roboto'}}>Sign in</div>
               <div className="flex mx-4 text-xs font-normal mb-2" style={{fontFamily:'Google Sans'}}>Log in to your Google Admin Account</div>
               <div className="flex flex-col items-center mx-4">
                  <input type="text" placeholder="Email" value={email} onChange={(event) => {setEmail(event.target.value); setErrorMessage('');}} className="w-full h-12 border-[1px] border-gray-400 px-2 rounded text-gray-400 font-light mb-2" style={{ fontFamily: 'Product Sans' }} />
                  <input type="password" placeholder="Password" value={password} onChange={(event) => {setPassword(event.target.value); setErrorMessage('');}} className="w-full h-12 border-[1px] border-gray-400 px-2 rounded text-gray-400 font-light" style={{ fontFamily: 'Product Sans' }} />
               </div>
               {errorMessage && <div className="mx-4 text-red-600 text-sm font-light my-2" style={{fontFamily:'Product Sans'}}>{errorMessage}</div>}   
               <div className="flex pl-4 text-xs font-normal text-blue-800 my-2" style={{fontFamily:'Google Sans'}}>Forgot password?</div>
               <button className="flex w-3/5 h-10 m-auto mt-2 mb-4 justify-center items-center bg-blue-800 text-white text-base rounded-full font-thin tracking-wide" onClick={handleSubmit} style={{fontFamily:'Arial'}}>Sign in</button>
            </div>
         </div>         
      </div>
   );
}  

export default Login;
