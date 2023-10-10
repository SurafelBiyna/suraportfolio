import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import img1 from '../assets/img1.png';
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div name="home" className="w-full z-10 h-screen pt-24 sm:pt-48 bg-[#ffffff]">
      <div className="max-w-[2000px]  mx-auto px-8 flex flex-col justify-center h-full items-center sm:flex-row sm:items-start sm:text-left">
        <div className="w-48 h-48 sm:w-64 ml-1 sm:ml-24 sm:h-64 rounded-full overflow-hidden">
          <img src={img1} alt="img1" className="w-full h-full object-cover" />
        </div>
        <div className="ml-4 sm:ml-12">
          <p className="text-[#2b1112]">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#2b1112]">
          SURAFEL BIYNA
          </h1>
          <h2 className="text-4xl sm:text-4xl font-bold text-[#2b1112]">
            I'm a Designer.
          </h2>
          <p className="text-[#2b1112]  py-4 max-w-[700px]">
            I’m a passionate and creative graphic designer with several years of experience helping 
clients bring their vision to life through eye-catching design.
          </p>
          <div>
            <button className="text-[#2b1112] hover:text-[#ffffff] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#2b1112] hover:border-[#2C2623] border-[#2b1112]">
              <Link  to="work"  smooth={true}  duration={500} >
              View Work
        </Link>
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;