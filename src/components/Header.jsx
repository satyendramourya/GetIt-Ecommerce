import React from 'react'
import { GetItlogo, cartImg } from '../assets/index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {

    // updated notInitialized. of items in cart
    const productData = useSelector(state => state.getIt.productData)
    const userInfo = useSelector(state => state.getIt.userInfo)

    //set user info from google-- vis redux

    return (
        <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titlFont sticky top-0 z-50">
            <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
                <Link to='/'>
                    <div  >
                        <img src={GetItlogo} alt="GetItlogo" className='w-28' />
                    </div>
                </Link>
                <div className='flex items-center gap-2 md:gap-8'>
                    <ul className=' hidden lg:flex items-center gap-8'>
                        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
                        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Pages</li>
                        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Shop</li>
                        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Blog</li>
                    </ul>
                    <Link to='/cart'>
                        <div className='relative'>
                            <img src={cartImg} alt="cartImg" />
                            <span className='absolute w-6 top-3 left-1 text-xs font-bold flex items-center justify-center  font-titlFont text-white'>{productData.length}</span>
                        </div>
                    </Link >
                    <Link to='/login'>
                        <div className='flex gap-2 items-center mr-4'>
                            <img className='w-8 h-8 rounded-full' src={
                                userInfo ? userInfo.photo : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                            } alt="userLogo" />

                            {
                                userInfo?.name ? <span className='hidden md:block text-sm font-bold'>{userInfo.name}</span> : <span className='text-sm font-bold'>Login</span>
                            }
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header