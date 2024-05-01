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
    <div className='flex justify-center flex-row items-center' style={{gridTemplateColumns:"12rem 12rem"}}>
    {academicModules.map((module,i)=>(
      <div className='brightness-90 hover:brightness-100 bg-sky-400 mx-10 mt-32'>

      <Link className='text-white' style={{textDecoration:"none"}} key={i} href={module.href}><Image src={module.imageSRC} height={module.height} width={module.width} alt={module.alt} />
      {module.alt}
      </Link>
      </div>
    ))}
      </div>
  )
}

export default AcademicsModule