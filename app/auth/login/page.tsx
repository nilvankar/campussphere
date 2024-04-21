import React from 'react'
import Image from 'next/image'
const LoginPage = () => {
  return (
    <div className='flex flex-row justify-center h-screen w-screen bg-gradient-to-r from-violet-600/100 to-purple-500/95 items-center'>
    <div className='grid grid-cols-2  border-2 bg-white text-black ' style={{gridTemplateColumns:"",height:"90vh",width:"55rem"}}>
        <form>
                    <p>Please login to your account</p>
  
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="email" id="form2Example11" className="form-control"
                        placeholder="email address" />
                      <label className="form-label" htmlFor="form2Example11">Username</label>
                    </div>
  
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="password" id="form2Example22" placeholder='password' className="form-control" />
                      <label className="form-label" htmlFor="form2Example22">Password</label>
                    </div>
  
                    <div className="text-center pt-1 mb-5 pb-1">
                      <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Log
                        in</button>
                      <a className="text-muted block" href="#!">Forgot password?</a>
                    </div>
  
                
  
                  </form>
                     </div>
    </div>
  )
}

export default LoginPage