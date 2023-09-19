import React from 'react'
import headShot from '../assets/headshotv2.png'
const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#26292B] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <div className='pt-3 '>
              <img 
              src={headShot} 
              alt='headshot'
              
              ></img>
            </div>
          </div>
          <div className='pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#5F7ABD]'>About</p>

            <div className='text-3xl font-bold pt-6'>
              <p>Hi, I'm Paolo, nice to meet you. Please take a look around.</p>
              <div className='text-lg pt-3'>
                <p className='pb-3'>With a background as an automotive technician and a decade of experience in diagnostics, I've always had a hidden passion for coding. After years of hesitation, I took a bold step by enrolling in a full-stack coding boot camp.</p>
                <p>Learning new things has always excited me and I'm always up for a challenge. My background in diagnostics has helped me developed strong problem-solving skills and high attention to detail. In this next step of my career, I'm looking forward to the opportunity to combine those qualities with my coding knowledge to create innovative digital solutions.</p>


              </div>
            </div>
          </div>
          {/* <div className='sm:text-right pb-8 pl-4'> */}

          {/* </div> */}
          {/* <div className='text-3xl font-bold'>
            <p>Hi, I'm Paolo, nice to meet you. Please take a look around.</p>
            <div className='text-lg pt-3'>
              <p className='pb-3'>With a background as an automotive technician and a decade of experience in diagnostics, I've always had a hidden passion for coding. After years of hesitation, I took a bold step by enrolling in a full-stack coding boot camp.</p>
              <p>Learning new things has always excited me and I'm always up for a challenge. My background in diagnostics has helped me developed strong problem-solving skills and high attention to detail. In this next step of my career, I'm looking forward to the opportunity to combine those qualities with my coding knowledge to create innovative digital solutions.</p>


            </div>
          </div> */}
          {/* <div className='pt-3 '>
            <img src={headShot} alt='headshot'></img>
          </div> */}

        </div>
        {/* <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'> */}
          {/* <div className='sm:text-right pb-8 pl-4'>
           
          </div>
          <div className='text-3xl font-bold'>
            <p>Hi, I'm Paolo, nice to meet you. Please take a look around.</p>
          </div> */}
        {/* </div> */}
        {/* <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'> */}
          {/* <div className='text-lg pt-3'>
            <p className='pb-3'>With a background as an automotive technician and a decade of experience in diagnostics, I've always had a hidden passion for coding. After years of hesitation, I took a bold step by enrolling in a full-stack coding boot camp.</p> 
            <p>Learning new things has always excited me and I'm always up for a challenge. My background in diagnostics has helped me developed strong problem-solving skills and high attention to detail. In this next step of my career, I'm looking forward to the opportunity to combine those qualities with my coding knowledge to create innovative digital solutions.</p>

            
          </div> */}
        {/* </div> */}
      </div>
    </div>

  )
}

export default About