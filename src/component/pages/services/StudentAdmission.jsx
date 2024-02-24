import React from 'react'
import { genderList, idProff } from '../../../data/temporary'
import '../../../assets/styles/main.css'
const StudentAdmission = () => {
  return (
    <div className='h-screen w-screen'>
    <form action="" className='grid grid-cols-3'>
    <div className='col-span-1 border-2 h-4/5 mt-6'>
    <div className='h-14 w-full border-2 ml-12'>
    <h1 className='ml-4 text-lg font-semibold'>Student Basic Details</h1>
    </div>
    <div className='h-14 w-full border-2 ml-12'><label className='block ml-4' htmlFor="firstName">FirstName</label><input className='border-2 rounded-md w-80 ml-4' type="text" name="firstName" id="firstName" /></div>
    <div className='h-14 w-full border-2 ml-12'><label className='block ml-4' htmlFor="lastName">LastName</label><input className='border-2 rounded-md w-80 ml-4' type="text" name="lastName" id="lastName" /></div>
    <div className='h-14 w-full border-2 ml-12'><label className='block ml-4' htmlFor="middleName">MiddleName</label><input className='border-2 rounded-md w-80 ml-4' type="text" name="middleName" id="middleName" /></div>
    <div className='h-14 w-full border-2 ml-12'><label className='block ml-4' htmlFor="gender">Gender</label><select className='border-2 rounded-md w-80 ml-4' name="gender" id="gender"><option value="" hidden>Select</option>
    {genderList.map((gender)=><option key={gender.id} value={gender.name}>{gender.label}</option>)}
    </select></div>
    <div className='h-14 w-full border-2 ml-12'><label className='ml-4 block'  htmlFor="adhaar">AdhaarCard No</label><input minLength={12} type="number" name="adhaar" id="adhaar" className='border-2 rounded-md w-80 ml-4' /></div>
    <div className='h-14 w-full border-2 ml-12'><label htmlFor="otherid">Any Other ID Proof</label><select className='border-2 rounded-md w-80 ml-4' name="otherid" id="otherid">
    <option value="" hidden>Select</option>
    {idProff.map((ID)=>(
      <option value={ID.id} key={ID.name}>{ID.label}</option>
    ))}
    </select></div>
    
    <div className='h-14 w-full border-2 ml-12'><label htmlFor="numberofMember" className='block ml-4'>Family Members <span className='text-sm'>(including you)</span></label><input type="number" name="numberofMember" id="numberofMember" className='border-2 rounded-md w-80 ml-4' minLength={1} maxLength={10} /></div>
    </div>
    <div className='col-span-1 border-2 h-4/5'><h1 className='text-lg font-semibold'>Student Additional Details</h1></div>
    <div className='col-span-1 border-2 h-4/5'>3</div>
    </form>
    </div>
  )
}

export default StudentAdmission