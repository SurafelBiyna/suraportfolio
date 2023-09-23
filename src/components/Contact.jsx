import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full min-h-screen pt-32 bg-[#2C2623] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#fa9f80] text-[#FC5C29]'>Contact</p>
          <p className='text-[#FC5C29] py-4'>// Submit the form below or shoot me an email - vutukuri.kumar192st.niituniversity.in</p>
        </div>
        <input className='bg-[#FC5C29] p-2 placeholder-[#2C2623]' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#FC5C29] placeholder-[#2C2623]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#FC5C29] p-2 placeholder-[#2C2623]' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-[#FC5C29] hover:text-[#2C2623] border-2 border-[#FC5C29] hover:bg-[#FC5C29] hover:border-[#FC5C29] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  );
};

export default Contact;