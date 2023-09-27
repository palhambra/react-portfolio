import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import Logo from '../assets/Logo.png'
import Resume from '../assets/updated-resume.pdf'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#26292B] text-gray-300'>

      {/* logo */}
      <div className='lg:pt-20'>
        <img src={Logo} alt='logo' className='w-20 md:w-64 lg:w-80'/>
        </div>

      {/* Menu */}
      <ul className='hidden md:flex'>
        <li className='hover:border-b-2 hover:border-[#5F7ABD]'>
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
        </li>
        <li className='hover:border-b-2 hover:border-[#5F7ABD]'>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        </li>
        <li className='hover:border-b-2 hover:border-[#5F7ABD]'>
        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
        </li>
        <li className='hover:border-b-2 hover:border-[#5F7ABD]'>
        <Link to="work" smooth={true} duration={500}>
          Work
        </Link>
        </li>
        <li className='hover:border-b-2 hover:border-[#5F7ABD]'>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#26292B] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl hover:border-b-2 hover:border-[#5F7ABD]'>
        <Link onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
        </Link>
        </li>
        <li className='py-6 text-4xl hover:border-b-2 hover:border-[#5F7ABD]'>
        <Link onClick={handleClick} to="about" smooth={true} duration={500}>
          About
        </Link>
        </li>
        <li className='py-6 text-4xl hover:border-b-2 hover:border-[#5F7ABD]'>
        <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
          Skills
        </Link>
        </li>
        <li className='py-6 text-4xl hover:border-b-2 hover:border-[#5F7ABD]'>
        <Link onClick={handleClick} to="work" smooth={true} duration={500}>
          Work
        </Link>
        </li>
        <li className='py-6 text-4xl hover:border-b-2 hover:border-[#5F7ABD]'>
        <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
          Contact
        </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='https://www.linkedin.com/in/paolo-alhambra-438069284/' target='blank' rel='noopener noreferrer'>
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='https://github.com/palhambra' target='blank' rel='noopener noreferrer'>
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#720e9e]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='mailto:paolo.alhambra@yahoo.com'>
          
              Email 
            
            <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#122543]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href={Resume} target='blank' rel='noopener noreferrer'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar