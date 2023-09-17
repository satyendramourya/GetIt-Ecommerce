import React from 'react'
import { ImGithub } from "react-icons/im";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaHome
} from "react-icons/fa";

import { MdLocationOn } from 'react-icons/md'
import { BsPersonFill, BsPaypal } from 'react-icons/bs'

import { GetItlogoW } from '../assets/index'

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titlFont p-4'>
      <div className='max-w-screen-xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
        <div className='flex flex-col gap-7'>
          <img className='hidden lg:block w-32' src={GetItlogoW} alt="GetItlogoW" />
          <p className='text0white text-sm tracking-wide'>@ ReactBD.com</p>
          <div className='flex gap-5 text-gray-400 text-lg '>
            <ImGithub className='hover:text-white duration-300 cursor-pointer' />
            <FaFacebookF className='hover:text-white duration-300 cursor-pointer' />
            <FaTwitter className='hover:text-white duration-300 cursor-pointer' />
            <FaInstagram className='hover:text-white duration-300 cursor-pointer' />
            <FaYoutube className='hover:text-white duration-300 cursor-pointer' />
            <FaLinkedinIn className='hover:text-white duration-300 cursor-pointer' />
          </div>
        </div>

        <div>
          <h2 className='text-2xl font-semibold text-white mb-4'>locate us</h2>
          <div className='flex text-base flex-col gap-2'>
            <p>MBD, Ruwi, Muscat-Oman</p>
            <p>Mobile: 0096  97859628</p>
            <p>Phone: 0096 24769821</p>
            <p>e-mail: bazar@gmail.com</p>
          </div>
        </div>

        <div>
          <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>
          <div className='flex text-base flex-col gap-2'>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'> <span><BsPersonFill /></span> My account</p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'> <span><BsPaypal /></span> Checkout</p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'> <span><FaHome /></span> order tracking</p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'> <span><MdLocationOn /></span> help and support</p>
          </div>
        </div>

        <div className='flex flex-col justify-center '>
          <input className='bg-transparent border px-4 py-2 text-sm' placeholder='email' type='text' />
          <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>Subscribe</button>
        </div>

      </div>
    </div>
  )
}

export default Footer