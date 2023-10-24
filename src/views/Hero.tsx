import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
<section>
<div className='w-full flex flex-col lg:flex-row  h-[100vh] px-6 md:px-28'>


    {/* left side */}
<div className='flex-1 self-center md:pl-14 leading-8  pt-20 md:pt-0'>

    <h1 className='font-bold text-5xl  text-[#61411d] md:text-5xl lg:text-8xl' >Quran GPT</h1>
    <p  className='lg:text-2xl md:pl-4 text-xl text-[#501E14] font-semibold'> Your Ultimate Quran Artificial Inteligence Assistance</p>

  
</div>



    {/* right side */}
    <div className='flex-1 md:pl-32 flex '>
        <Image src="/heroimage.png" alt="" width={600} height={100}/>

    </div>




</div>


</section>
    

  )
}

export default Hero