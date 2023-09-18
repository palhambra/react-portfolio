import React from 'react'

const Contact = () => {
  return(
    <div name='contact' className='w-full h-screen bg-[#26292B] flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/3c3e9e4b-1ea4-4c7a-90ed-34094b50190b' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#5F7ABD] text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>Submit the form below or send me an email at <a href='mailto:paolo.alhambra@yahoo.com'>paolo.alhambra@yahoo.com.</a></p>

        </div>
        <input className='bg-[#a2b2ee] p-2' type='text' placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#a2b2ee]' type='email' placeholder='Email' name='email' />
        <textarea className='bg-[#a2b2ee] p-2' name='message' rows='10' placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-[#5F7ABD] hover:border-[#5F7ABD] px-4 py-3 my-8 mx-auto flex items-center'>Send message</button>
      </form>
    </div>
  )
}

export default Contact