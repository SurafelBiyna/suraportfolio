import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import img1 from '../assets/img1.jpg';

const Home = () => {
  return (
    <div name="home" className="w-full z-10 h-screen pt-24 sm:pt-48 bg-[#2C2623]">
      <div className="max-w-[2000px]  mx-auto px-8 flex flex-col justify-center h-full items-center sm:flex-row sm:items-start sm:text-left">
        <div className="w-64 h-64 sm:w-64 ml-1 sm:ml-24 sm:h-64 rounded-full overflow-hidden">
          <img src={img1} alt="img1" className="w-full h-full object-cover" />
        </div>
        <div className="ml-4 sm:ml-12">
          <p className="text-[#FC5C29]">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#FC5C29]">
            SIFEN TESFA
          </h1>
          <h2 className="text-4xl sm:text-4xl font-bold text-[#FC5C29]">
            I'm a Front-End Web Developer.
          </h2>
          <p className="text-[#f48b68]  py-4 max-w-[700px]">
            I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building responsive front-end web applications.
          </p>
          <div>
            <button className="text-[#f48b68] hover:text-[#2C2623] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FC5C29] hover:border-[#2C2623] border-[#f48b68]">
              View Work
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