import React from 'react'
import movingPicture from '../assets/Moving-Pictures.png'
import sluffinOrBuffin from '../assets/Sluffin-or-Buffin.png'
import impressYourFriends from '../assets/Impress-Your-Friends.png'
import babyGotBackEnd from '../assets/Baby-Got-Backend.png'
import keepingTrack from '../assets/Keeping-Track.png'
import sociallyAwkwardNetworking from '../assets/Socially-Awkward-Networking.png'
const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#26292B] py-8'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#5F7ABD]'>Work</p>
          <p className='py-6'>Check out some of my recent work.</p>
        </div>

        <div
          className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Cards */}
          <div style={{ backgroundImage: `url(${sluffinOrBuffin})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Sluffin' Or Buffin'

              </span>
              <p>Fitness tracker/blogging site</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/palhambra/Sluffin-Or-Buffin' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
                <a href='https://salty-spire-29612.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div style={{ backgroundImage: `url(${movingPicture})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Moving Pictures

              </span>
              <p>Instrument Buy/Sell/Trade</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/palhambra/Moving-Pictures' target='blank' rel='noopener noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
                <a href='https://limitless-scrubland-26764.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div style={{ backgroundImage: `url(${impressYourFriends})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Impress Your Friends

              </span>
              <p>Food/Drink recipe generator</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/palhambra/impress-your-friends' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
                <a href='https://grindboiwes.github.io/impress-your-friends/' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div style={{ backgroundImage: `url(${babyGotBackEnd})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider flex justify-center'>
                E-Commerce API

              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/palhambra/baby-got-backend' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
                <a href='https://drive.google.com/file/d/1Hr22JwAPlDSFbkOCSqCT-KBFc32aRSkg/view' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Video Walkthrough</button>
                </a>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div style={{ backgroundImage: `url(${keepingTrack})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider flex justify-center'>
                Employee Tracker

              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/palhambra/keeping-track' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
                <a href='https://drive.google.com/file/d/1nFugu3g47OacyXaMQ1x3PKtmicvzEuh8/view' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Video Walkthrough</button>
                </a>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div style={{ backgroundImage: `url(${sociallyAwkwardNetworking})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider flex justify-center'>
                Social Network API

              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/palhambra/Socially-Awkward-Networking' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
                <a href='https://drive.google.com/file/d/12MAjWRw-n283j286_88IryKbNCWs20WI/view' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Video Walkthrough</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Work