import React from 'react'
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi'
import { useState } from 'react'

const Banner = () => {
  const [current, setCurrent] = useState(0)
  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg", "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg", "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg", "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",];
  
  const prevSlide = () => { 
    setCurrent(current === 0 ? 3: (prev) => prev - 1)
   }
  
  const nextSlide = () => { 
    setCurrent(current === 3 ? 0 : (prev) => prev + 1)
   }
    
  return (
    <div className='w-full h-auto overflow-x-hidden'>
      <div className='w-screen lg:h-[650px] relative '>
        <div style={{ transform: `translateX(-${current * 100}vw)` }} className='w-[400vw] h-full flex transition-transform duration-1000 overflow-hidden'>
          
          <div className='w-screen h-full overflow-hidden'>
            <img src={data[0]} className='w-screen h-full object-cover mt-10 md:mt-0  scale-150 md:scale-100' alt="ImgOne" loading='priority'/>
            </div>
          <div className='w-screen h-full overflow-hidden'>
            <img src={data[1]} className='w-screen h-full object-cover mt-10 md:mt-0 scale-150 md:scale-100' alt="ImgTwo" />
            </div>
          <div className='w-screen h-full overflow-hidden'>
            <img src={data[2]} className='w-screen h-full object-cover  mt-10 md:mt-0  scale-150 md:scale-100' alt="ImgThree" />
            </div>
          <div className='w-screen h-full overflow-hidden'>
            <img src={data[3]} className='w-screen h-full mt-10 md:mt-0  object-cover scale-150 md:scale-100' alt="ImgFour" />
            </div>
        </div>
        <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-0 lg:bottom-44'>
          <div className=' w-7 h-6 md:w-14 md:h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:text-white hover:bg-gray-700 active:bg-gray-900 duration-300'
          onClick={prevSlide}
          >
            <HiArrowLeft  />
          </div>
          <div className='w-7 h-6 md:w-14 md:h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:text-white hover:bg-gray-700 active:bg-gray-900 duration-300'
          onClick={nextSlide}
          >
            <HiArrowRight  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner