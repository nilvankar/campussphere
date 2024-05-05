import React from 'react'

const AcademicScreen = () => {
  return (
    <div>
        <table className='table border-2' >
            <thead className='table-header-group border-2' >
                <tr className='table-cell border-2'>Degree </tr>
                <tr className='table-cell border-2'>Degree Group</tr>
                <tr className='table-cell border-2'> Medium</tr>
                <tr className='table-cell border-2'>DegreeCode</tr>
                <tr className='table-cell border-2'>From Batch Year</tr>
                <tr className='table-cell border-2'>To Batch Year</tr>
                <tr className='table-cell border-2'>Current Academic Year</tr>
                <tr className='table-cell border-2'>Current Course Year</tr>
                
            </thead>
            <tbody className='table-row-group'>
              
                <tr className='table-cell border-2'>B.tech</tr>
                <tr className='table-cell border-2'>Computer Science Engineering</tr>
                <tr className='table-cell border-2'>English</tr>
                <tr className='table-cell border-2'>B.Tech.C.S.E(2021-2025)</tr>
                <tr className='table-cell border-2'>2021</tr>
                <tr className='table-cell border-2'>2025</tr>
                <tr className='table-cell border-2'>2021-25</tr>
                <tr className='table-cell border-2'>4th sem B.tech cse</tr>
            </tbody>
        </table>
    </div>
  )
}

export default AcademicScreen