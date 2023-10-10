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
      <div id='about' className='w-full min-h-screen h-screen bg-[#ffffff] text-[#2b1112]'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div  className= 'sm:text-right pb-8 pl-4'>
          <p  style={animationStyle}  className= 'text-4xl font-bold inline border-b-4 border-[#9e4042]'>
            About
          </p>
        </div>
        <div></div>
        </div>
        <div className='max-w-[1000px] text-[#512122] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl text-[#2b1112] font-bold'>
            <p  style={animationStyle} >Hi. I'm Surafel Biyna, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p style={animationStyle} >I’m a passionate and creative graphic designer. With a keen eye for detail and a talent for crafting designs that truly stand out, I bring a fresh perspective to every project I undertake - whether it's a logo, website, marketing materials, or anything else under the branding umbrella.
I specialize in a list of skills, such as Photoshop, illustration, InDesign branding, painting, etc. and always stay up-to-date on the latest design trends and tools to ensure my work is modern, relevant, and effective.
My approach to design is collaborative - I love working with clients to understand precisely what they're looking for and delivering work that exceeds their expectations.
Scroll down to see examples of my design work from previous clients in a wide range of industries, and get in touch if you're interested in working together. Let's create something beautiful together!
</p>  
          </div>
        </div>
    </div>
  </div></div>
  )
}

export default About