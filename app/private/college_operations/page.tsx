import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const CollgeOperations = () => {
    const collegeOperationsModules=[
      {href:"/private/college_operations/automatic_schedulars",imageSRC:"/images/account_logo.jpeg",alt:"Automatic Schedulars",height:200,width:200},   
      {href:"/private/college_operations/inventory",imageSRC:"/images/setup_academics.jpeg",alt:"Inventory",height:200,width:200},  
      {href:"/private/college_operations/misc",imageSRC:"/images/account_logo.jpeg",alt:"Misc",height:200,width:200},  
      {href:"/private/college_operations/university_document",imageSRC:"/images/setup_academics.jpeg",alt:"University Document",height:200,width:200},  
      {href:"/private/college_operations/university_info",imageSRC:"/images/branch_img.jpeg",alt:"University Information",height:200,width:200},  
      {href:"/private/college_operations/visitors",imageSRC:"/images/branch_img.jpeg",alt:"Visitors",height:200,width:200},  
      {href:"/private/college_operations/user_support",imageSRC:"/images/past_users.jpeg",alt:"User Support",height:200,width:200},  
      ]
  return (
    <div>
        {collegeOperationsModules.map((submodules)=>(
            <Link key={submodules.href} href={submodules.href}><Image src={submodules.imageSRC} alt={submodules.alt} height={submodules.height} width={submodules.width} /><span>{submodules.alt}</span></Link>
        ))}
    </div>
  )
}

export default CollgeOperations