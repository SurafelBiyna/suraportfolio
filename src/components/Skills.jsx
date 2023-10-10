import React from 'react'

import HTML from '../assets/ilu.png';
import CSS from '../assets/ps.png';
import JavaScript from '../assets/id.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full pb-80 pt-[440px] sm:pt-64 min-h-screen  h-screen bg-[#ffffff] text-[#2b1112]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl  font-bold inline border-b-4 border-[#8a393b] '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full  grid grid-cols-1 sm:grid-cols-3 gap-4 text-center py-8'>
              <div className='shadow-md pt-2 shadow-[#040c16] bg-[#2b1112] text-[#ffff] hover:scale-110 duration-500'>
                  <img className='w-36 mx-auto ' src={HTML} alt="HTML icon" />
                  <p className='my-4'>Photoshop</p>
              </div>
              <div className='shadow-md pt-2 shadow-[#040c16] bg-[#2b1112] text-[#ffff] hover:scale-110 duration-500'>
                  <img className='w-36 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>Illustrator </p>
              </div>
              <div className='shadow-md pt-2 shadow-[#040c16] bg-[#2b1112] text-[#ffff] hover:scale-110 duration-500'>
                  <img className='w-36 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>InDesign</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Skills