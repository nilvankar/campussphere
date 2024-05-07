'use client'
import React, { useState } from 'react'

const LibrarActivity = () => {
  const [Issues, setIssues] = useState(true)
  const [Returns, setReturns] = useState(false)
  const [transactions, setTransactions] = useState(false)
  return (
    <div className='grid grid-cols-2' style={{gridTemplateColumns:"40rem 60rem"}}>
      
      <div className='grid grid-rows-2 h-screen border-2'>
        <div className='inline-flex'>
          
      <div>
            <label className="block" htmlFor="userRole">User Role</label>
            <select className="rounded-lg w-40 border-2"
            name="role"
              id="role"
            >
              <option value="" hidden>
                Select
              </option>
              <option value="director">Director</option>
              <option value="principal">Principal</option>
              <option value="staffFaculty">Staff or Faculty</option>
              <option value="studentParent">Student or Parent</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div><label htmlFor="section">Section</label>
          <select name="section" id="section"><option value="" hidden></option></select>
          </div>
          
        </div>
        <div>
          <table className='border-2'>
            <thead>
              <tr>
                <th className='border-2'>User Name</th>
                <th className='border-2'>Material Name</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <div className='grid grid-rows-3 h-screen border-2' style={{gridTemplateRows:"6rem 5rem 30rem"}}>
        <div className=''>

        <button className='w-40 rounded-lg bg-blue-500 hover:bg-white text-white' onClick={()=>{
          setIssues(true)
          setTransactions(false)
          setReturns(false)
        }}>Issues</button>
        <button className='w-40 rounded-lg bg-blue-500 hover:bg-white text-white' onClick={()=>{
            setIssues(false)
            setTransactions(false)
            setReturns(true)
        }}>Returns</button>
        <button className='w-40 rounded-lg bg-blue-500 hover:bg-white text-white' onClick={()=>{
            setIssues(false)
            setTransactions(true)
            setReturns(false)
        }}>Transaction History</button>
        </div>
        <div className="inline-flex flex-row justify-around">
          <div>
            <label className="block" htmlFor="lang">Language</label>
            <select className="rounded-lg  border-2" name="Language" id="Language">
              <option value="" hidden>
                Select
              </option>
            </select>
          </div>
          <div>
            <label className="block" htmlFor="materialType">MaterialType</label>
            <select className="rounded-lg  border-2" name="materialType" id="materialType">
              <option value="" hidden>Select</option>
              <option value="book">Book</option>
              <option value="newspape">NewsPaper</option>
              <option value="magzine">Magzine</option>
           
            </select>
          </div>
          <div>
            <label className="block" htmlFor="publisher">Publisher</label>
            <select className="rounded-lg  border-2" name="publisher" id="publisher"><option value="" hidden>Select</option></select>
          </div>
          <div>
            <label className="block" htmlFor="author">Author</label>
            <select className="rounded-lg  border-2" name="author" id="author"><option value="" hidden>Select</option></select>
          </div>

        </div>
        <div className='border-2'>
          <table className='border-2 table'><thead>
            <tr>
              <th className='border-2'>select</th>
              <th className='border-2'>Item Name</th>
              <th className='border-2'>Category</th>
              <th className='border-2'>Publisher</th>
              <th className='border-2'>Author</th>
              <th className='border-2'>Language</th>
              <th className='border-2'>Material Type</th>
              <th className='border-2'>ISBN</th>
              </tr></thead>
              <tbody>
                <tr>
                  <td><input type="checkbox" name="" id="" /></td>
                  <td> New Book</td>
                  <td>Category</td>
                  <td>Publisher</td>
                  <td>xyz</td>
                  <td><select name="" id=""><option value="" hidden>Select</option></select></td>
                  <td><select name="" id=""> <option value="" hidden>Select</option>
              <option value="book">Book</option>
              <option value="newspape">NewsPaper</option>
              <option value="magzine">Magzine</option>
           </select></td>
           <td>232</td>
                </tr>
              </tbody>
              </table>
        </div>
      </div>
    </div>
  )
}

export default LibrarActivity