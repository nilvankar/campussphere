import React from 'react'
import googleImg from '../assets/images/google_tem.png'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from './firebase'

export default function SignInWithGoogle() {
    const SignWithGoogle=async()=>{
        try {
            const provider=new GoogleAuthProvider()
            const user=await signInWithPopup(auth,provider);
            console.log('user connected with google login',user);
            
        } catch (error) {
            console.error('error in google login',error)
        }
    }
  return (
    <button onClick={SignWithGoogle}><img src={googleImg} alt="" style={{height:"30px",width:"124px"}} className='mx-20' /></button>
  )
}
