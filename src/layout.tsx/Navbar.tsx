"use client"
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'
import React from 'react'


function Navbar() {

  return (
    <>
   
    <div className='hidden py-7 justify-center gap-x-16 bg-black bg-opacity-50 h-28  pb-6 md:flex '>
{/* iamge */}
<div className=''>
<Image src="/icon.png" alt="icon.png" className='transition ease-in-out hover:scale-105 hover:duration-150'  width={75} height={75} />
</div>

{/* navigation */}

<ul className='flex items-center gap-x-6 font-normal text-sm text-white md:text-lg '>

<li className='transition ease-in-out hover:scale-110 hover:duration-150'><Link href="/">Home</Link></li>
<li className='transition ease-in-out hover:scale-110 hover:duration-150'> <Link href="/">About Quran GPT</Link></li>
<li className='transition ease-in-out hover:scale-110 hover:duration-150'><Link href="/">Prayers</Link></li>
<li className='transition ease-in-out hover:scale-110 hover:duration-150'><Link href="/">Our Blog</Link></li>
<li className='transition ease-in-out hover:scale-110 hover:duration-150'><Link href="/">Our Services</Link></li>


</ul>





    </div>
    </>
  
  )
}

export default Navbar