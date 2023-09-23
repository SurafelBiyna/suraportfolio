
import img2 from '../assets/img2.png';
import React, { useState } from 'react';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import { Link } from 'react-scroll';
const Navbar = () => {
  const [nav, setNav]=useState(false)
const handleClick=()=>{
    setNav(!nav)
} 
  return (
    
      
    <div className="fixed z-10 w-full h-[75px] flex justify-between items-center bg-[#FC5C29] text-[#2C2623]">
    <div>
      <img src={img2} alt="img2" style={{ width: "170px" }} />
    </div>
    <div>
      <ul className='hidden font-bold md:flex'>
        <li className='hover:border-b-2 hover:border-[#2C2623] transition-transform duration-300 transform hover:scale-110'> 
        <Link  to="home"  smooth={true}  duration={500} >
          Home
        </Link> </li>
        <li className='hover:border-b-2 hover:border-[#2C2623] transition-transform duration-300 transform hover:scale-110'>
          <Link  to="about"  smooth={true}  duration={500} >
          About
        </Link></li>
        <li className='hover:border-b-2 hover:border-[#2C2623] transition-transform duration-300 transform hover:scale-110'>
        <Link  to="skills"  smooth={true}  duration={500} >
          Skills
        </Link></li>
        <li className='hover:border-b-2 hover:border-[#2C2623] transition-transform duration-300 transform hover:scale-110'>
        <Link  to="work"  smooth={true}  duration={500} >
          Work
        </Link></li>
        <li className='hover:border-b-2 hover:border-[#2C2623] transition-transform duration-300 transform hover:scale-110'>
        <Link  to="contact"  smooth={true}  duration={500} >
          Contact
        </Link></li>
      </ul>
    </div>

    <div onClick={handleClick} className='md:hidden pr-4 text-3xl  z-10'> 
     {!nav ?<AiOutlineMenu/>:<AiOutlineClose/> } 
    </div>

    <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen  flex flex-col justify-center items-center bg-[#FC5C29]'}>
        <li className='py-6 text-3xl hover:border-b-2 hover:border-[#2C2623] transition-transform duration-300 transform hover:scale-110'>
        <Link onClick={handleClick}  to="home"  smooth={true}  duration={500} >
          Home
        </Link>
        </li>
        <li className='py-6 text-3xl hover:border-b-2 hover:border-[#2C2623] transition-transform duration-300 transform hover:scale-110'>
        <Link onClick={handleClick} to="about"  smooth={true}  duration={500} >
          About
        </Link>
        </li>
        <li className='py-6 text-3xl hover:border-b-2 hover:border-[#2C2623] transition-transform duration-300 transform hover:scale-110'>
          <Link onClick={handleClick}  to="skills"  smooth={true}  duration={500} >
          Skills
        </Link></li>
        <li className='py-6 text-3xl hover:border-b-2 hover:border-[#2C2623] transition-transform duration-300 transform hover:scale-110'>
        <Link onClick={handleClick} to="work"  smooth={true}  duration={500} >
          Work
        </Link></li> 
        <li className='py-6 text-3xl hover:border-b-2 hover:border-[#2C2623] transition-transform duration-300 transform hover:scale-110'>
        <Link onClick={handleClick} to="contact"  smooth={true}  duration={500} >
          Contact
        </Link>
        </li>
        <div className=' lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FC5C29]'>
            <a
              className='flex justify-between items-center w-full text-[#2C2623]'
              href='/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FC5C29]'>
            <a
              className='flex justify-between items-center w-full text-[#2C2623]'
              href='/'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FC5C29]'>
            <a
              className='flex justify-between items-center w-full text-[#2C2623]'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FC5C29]'>
            <a
              className='flex justify-between items-center w-full text-[#2C2623]'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
      </ul>

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FC5C29]'>
            <a
              className='flex justify-between items-center w-full text-[#2C2623]'
              href='/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FC5C29]'>
            <a
              className='flex justify-between items-center w-full text-[#2C2623]'
              href='/'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FC5C29]'>
            <a
              className='flex justify-between items-center w-full text-[#2C2623]'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FC5C29]'>
            <a
              className='flex justify-between items-center w-full text-[#2C2623]'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
  </div> 
   
  );
};

export default Navbar;