import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function Login() {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');
 
   useEffect(() => {   
      const token = localStorage.getItem('authToken');
      if (token)
         setIsAuthenticated(true);
   }, []);
   
   const handleSubmit = (event) => {
      if (email === 'user@example.com' && password === 'password123') {
         localStorage.setItem('authToken', 'fake-jwt-token');
         setIsAuthenticated(true);
      } else setError('Invalid credentials');
    };

   return (

      <div>
         <div className="flex flex-col bg-white h-screen justify-center items-center">
            <div className="flex w-1/4 bg-white shadow-md pl-4 text-xl text-blue-800">Google Admin</div>
            <div className="flex w-1/4 bg-white shadow-md pl-4 text-2xl font-semibold" style={{fontFamily:'Roboto'}}>Sign in</div>
            <div className="flex w-1/4 bg-white shadow-md pl-4 text-sm font-normal" style={{fontFamily:'Roboto'}}>Log in to your Google Admin Account</div>
         </div>         
      </div>

   
   );
}  

export default Login;
