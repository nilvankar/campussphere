import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const AcademicsModule = () => {
  const academicModules=[
    {href:"/private/academics_module/assessment",imageSRC:"/images/formative_assessment.jpeg",height:200,width:200,alt:"Assessment"},
    {href:"/private/academics_module/course_lms",imageSRC:"/images/course_lms.jpeg",height:200,width:200,alt:"Course LMS"},
    {href:"/private/academics_module/formative_assesment",imageSRC:"/images/formative_assessment.jpeg",height:200,width:200,alt:"Formative Assessment"},
    {href:"/private/academics_module/online_test",imageSRC:"/images/online_test.jpeg",height:200,width:200,alt:"Online Test"},
    {href:"/private/academics_module/syllabus",imageSRC:"/images/syllabus_logo.jpeg",height:200,width:200,alt:"Syllabus"},
     
  ]
  return (
    <div className='grid grid-cols-2' style={{gridTemplateColumns:"12rem 12rem"}}>
    {academicModules.map((module,i)=>(
      <Link className='text-black' style={{textDecoration:"none"}} key={i} href={module.href}><Image src={module.imageSRC} height={module.height} width={module.width} alt={module.alt} />
      <span>{module.alt}</span>
      </Link>
    ))}
      </div>
  )
}

export default AcademicsModule