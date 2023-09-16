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
            <div>
              <p>I've always been interested in coding, but never had the courage to change careers. However, with some support, I've taken a bootcamp to try and better myself. I'm always down to learn new things no matter how difficult it may seem.</p>
              {/* <p>I've always had this curiosity about coding, you know? But I never quite had the guts to switch careers and dive into it headfirst. With some encouragement and a bit of a nudge, I decided to take the leap and enroll in a coding bootcamp. Learning new things has always excited me, no matter how tough they may seem. 

I come from a background as an automotive technician, specializing in diagnosis. And now, I'm eager to bring the problem-solving and diagnostic skills I've honed in the world of cars into the realm of software development. So here I am, ready to embrace this journey and see where it takes me!</p> */}
            </div>
          </div>
        </div>
      </div>
  
  )
}

export default About