import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#26292B] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#5F7ABD]'>About</p>
          </div>
          <div>

          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi, I'm Paolo, nice to meet you. Please take a look around</p>
          </div>
          <div className='text-lg'>
            <p>With a background as an automotive technician with a decade of experience in diagnostics, I've always had a hidden passion for coding, and after years of hesitation, I've taken a bold step by enrolling in a full-stack coding boot camp. Learning new things has always excited me, no matter how tough they may seem. My background in diagnostics has given me strong problem-solving skills and attention to detail, which I'm now combining with my coding knowledge to create innovative digital solutions.</p>

            
          </div>
        </div>
      </div>
    </div>

  )
}

export default About