import React, { useState, useEffect } from 'react';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const aboutElement = document.getElementById('about');
  
        if (aboutElement) {
          const elementPosition = aboutElement.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
  
          if (elementPosition < windowHeight * 0.75) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const animationStyle = {
      opacity: isVisible ? 1 : 0,
      transform: `translateY(${isVisible ? '0' : '50px'})`,
      transition: 'opacity 1s ease, transform 3s ease',
    };
  
  return (
    <div> 
      <div id='about' className='w-full min-h-screen h-screen bg-[#2C2623] text-[#FC5C29]'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div  className= 'sm:text-right pb-8 pl-4'>
          <p  style={animationStyle}  className= 'text-4xl font-bold inline border-b-4 border-[#f79a7b]'>
            About
          </p>
        </div>
        <div></div>
        </div>
        <div className='max-w-[1000px] text-[#f79a7b] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl text-[#FC5C29] font-bold'>
            <p  style={animationStyle} >Hi. I'm Sifen Tesfa, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p style={animationStyle} >I am passionate about building excellent software that improves
            the lives of those around me. I specialize in creating software
            for clients ranging from individuals and small-businesses all the
            way to large enterprise corporations. What would you do if you had
            a software expert available at your fingertips?</p>  
          </div>
        </div>
    </div>
  </div></div>
  )
}

export default About