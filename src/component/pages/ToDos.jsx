import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
const ToDos = () => {
  return (

    <>
    <Header />
   
    <div className='todo h-96 w-screen'>
    <form action="">
    <label htmlFor="addTask">
    Add New Task
    </label>
    <input type="text" name="addTask" id="addTask" className='border-2 rounded-md'/>
    </form>
    </div>
    <Footer />
    </>
  )
}

export default ToDos