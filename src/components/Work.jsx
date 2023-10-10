import React from 'react'
import img12 from "../assets/img12.png"
import img11 from "../assets/img11.png"
import img13 from "../assets/img13.png"
import img15 from "../assets/img15.png"
import img14 from "../assets/img14.png"
import img16 from "../assets/img16.png"
import img17 from "../assets/img17.png"
import img18 from "../assets/img18.png"
import img19 from "../assets/img19.png"
import img20 from "../assets/img20.png"
import img21 from "../assets/img21.png"
const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen pt-24 sm:pt-[530px] pb-24 sm:pb-[500px]  text-[#2b1112] bg-[#ffffff]'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div className='pb-0'>
        <p className='text-4xl font-bold inline border-b-4 text-[#2b1112] border-[#763032]'>
          Work
        </p>
        <p className='py-6'> // Check out some of my recent work</p>
    
      </div>
      <p className='text-5xl font-bold inline p-4 text-[#2b1112] '>
          Branding
        </p>
{/* container for projects */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
<img className='w-48 mx-auto ' src={img12} alt="img12" />
<img className='w-64 mx-auto ' src={img11} alt="img11" />
<img className='w-48 mx-auto ' src={img13} alt="img13" />
</div>

<p className='text-5xl font-bold inline pt-12 pb-12 text-[#2b1112] '>
Poster Design
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
<img className='w-36 mx-auto ' src={img14} alt="img14" />
<img className='w-56 mx-auto ' src={img16} alt="img16" />
<img className='w-36 mx-auto ' src={img15} alt="img15" />
<img className='w-56 mx-auto ' src={img17} alt="img17" />
<img className='w-64 mx-auto ' src={img18} alt="img18" />
<img className='w-64 mx-auto ' src={img19} alt="img19" />
<img className='w-72 mx-auto ' src={img20} alt="img20" />
<img className='w-72 mx-auto ' src={img21} alt="img21" />

</div>
    </div>
  </div>
  )
}

export default Work