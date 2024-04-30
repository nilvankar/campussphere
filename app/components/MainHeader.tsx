"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Companylist, productsList, solutionList } from "../data";
const MainHeader = () => {
  const [products, setProducts] = useState(false);
  const [solutions, setSolutions] = useState(false);
  const [resources, setResources] = useState(false);
  const [company, setCompany] = useState(false);
  return (
    <div className="border-2 bg-gradient-to-r flex flex-row   from-blue-700/100 to-blue-600/95">
      <Image
        src="/images/campusshere_logo.png"
        alt="LOGO"
        height={50}
        width={50}
      />
      <nav className="">
        <ul>
          <li className="inline-block">
            <Link
              className="decoration-transparent text-white"
              href="/"
              onMouseOver={() => setProducts(!products)} onMouseOut={()=>setProducts(!products)}
            >
              Products
            </Link>
            <nav className={products?`text-black bg-white`:`hidden`}>
              <ul>
                <li className="list-none block">

          {productsList.map((procut,i)=>(
            <Link className="block text-black bg-white" href={procut.href} key={i}>{procut.alt}</Link>
          ))}
                </li>
              </ul>
            </nav>
          </li>
          <li className="inline-block">
            <Link
              className="decoration-transparent brightness-100 hover:brightness-90 text-white"
              href="/"
              onMouseOver={() => setSolutions(!solutions)} onMouseOut={()=>setSolutions(!solutions)}
            >
              Solutions
            </Link>
            <nav className={solutions?'bg-white text-black':'hidden'}>
              <ul>
              <li className="block">

           {solutionList.map((solution,i)=>(
             <Link className="text-black block bg-white" key={i} href={solution.href}>{solution.alt}</Link>
          ))}
          </li>
              </ul>
            </nav>
          </li>
          <li className="inline-block">
            <Link
              className="decoration-transparent brightness-100 hover:brightness-90 text-white"
              href="/" onMouseOver={()=>setResources(!resources)} onMouseOut={()=>setResources(!resources)}
            >
              RESOURCES
            </Link>
            <nav className={resources?'bg-white text-black':'hidden'}>
              <ul>  
                <li className="list-none"><Link className="bg-white text-black block" href='/'>Broucher</Link></li>
                <li className="list-none"><Link className="bg-white text-black block" href='/'>Case Study</Link></li>
                <li className="list-none"><Link className="bg-white text-black block" href='/'>Videos</Link></li>
              </ul>
            </nav>
          </li>
          <li className="inline-block">
            <Link
              className="decoration-transparent brightness-100 hover:brightness-90 text-white"
              href="/"
            >
              Offers
            </Link>
          </li>
          <li className="inline-block">
            <Link
              className="decoration-transparent brightness-100 hover:brightness-90 text-white"
              href="/"
              onMouseOver={()=>setCompany(!company)} onMouseOut={()=>setCompany(!company)}
            >
              Company
              
            </Link>
            <nav className={company?'text-black bg-white':'hidden'}>
              <ul>
                <li className="list-none">
                  {Companylist.map((company,i)=>(
                    <Link key={i} className="block bg-white text-black transition-all delay-1000" href={company.href}>{company.alt}</Link>
                  ))}
                </li>
              </ul>
            </nav>
          </li>
          <li className="inline-block">
            <Link
              className="decoration-transparent brightness-100 hover:brightness-90 text-white"
              href="/contact"
            >
              Contact
            </Link>
          </li>
          <li className="inline-block">
            <Link
              className="decoration-transparent text-white"
              href="/auth/signup"
            >
              SignUp
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainHeader;
