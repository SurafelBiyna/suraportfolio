import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rpnfcb1', 'template_b3as82i', form.current, 'ofF73l2lts4-HDKZ6')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
          Swal.fire({
            title: 'Email Sent',
            text: 'Your message has been successfully sent!',
            icon: 'success',
            confirmButtonText: 'OK'
          });
              
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div name='contact' className='w-full min-h-screen pt-0 sm:pt-48 bg-[#ffffff] flex justify-center items-center'>
      <form ref={form} onSubmit={sendEmail}  className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#8a3a3c] text-[#2b1112]'>Contact</p>
          <p className='text-[#2b1112] py-4'>// Submit the form below or shoot me an email - surafelbiyna@gmail.com </p>
        </div>
        <input className='bg-[#2b1112] p-2 placeholder-[#ffffff] text-white' type="text" placeholder='Name' name='user_name' />
        <input className='my-4 p-2 bg-[#2b1112] placeholder-[#ffffff] text-white' type="email" placeholder='Email' name='user_email' />
        <textarea className='bg-[#2b1112] p-2 placeholder-[#ffffff] text-white' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-[#2b1112] hover:text-[#ffffff]  border-2 border-[#2b1112] hover:bg-[#2b1112] hover:border-[#2b1112] px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;