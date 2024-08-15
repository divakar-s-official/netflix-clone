import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm,setSignInForm] = useState(true)

    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm)
    }
  return (
    <div className=''>
       <Header />
       <div className='absolute'>
        <img src="body-netflix.jpg" 
        alt="body"/>
       </div>
       <form className='absolute left-0 right-0 flex flex-col w-4/12 p-12 mx-auto bg-black rounded-xl my-28 bg-opacity-80' >
            <h1 className='p-6 mb-2 text-3xl font-bold text-white'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
            
            {!isSignInForm && <input type="text" 
            placeholder='Username'
            className='p-4 mx-6 mb-4 rounded outline-none'/>}
            
            <input type="text" 
            placeholder='Email Address'
            className='p-4 mx-6 mb-4 rounded outline-none'/>
            
            <input type="password" 
            placeholder='Password'
            className='p-4 mx-6 rounded outline-none'/>
            
            <button className='p-2 m-6 text-white bg-red-700 rounded'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>

            <p className='mx-6 text-white'
            onClick={toggleSignInForm}>{isSignInForm ? (
                <>
                   New to Netflix ? <span className='font-bold hover:underline'>Sign up now</span>
                </>
            ): (
                <>
                   Already registered ? <span className='font-bold hover:underline'>Sign In</span>
                </>
            )}</p>
       </form>
    </div>
  )
}

export default Login