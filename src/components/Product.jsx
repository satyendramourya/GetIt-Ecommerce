import React from 'react'
import ProductCards from './ProductCards'

const Product = ({ products }) => {
    return (
        <div className='py-10'>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>Shopping everyday</h1>
                <span className='w-20 h-[3px] bg-black'></span>
                <p className='max-w-[700px] text-gray-600 text-center' >
                    Revolutionizing your daily life! Our handpicked products aren't just essentials; they're game-changers. Discover innovation, style, and convenience like never before. Elevate your everyday with us!
                </p>
            </div>
            <div className={` grid grid-cols-1
            md:max-w-screen-md sm:grid-cols-2
            xl:max-w-screen-xl mx-4 md:mx-auto  py-10 md:grid-cols-3  xl:grid-cols-4 lg:gap-4 xl:gap-10`}>
                {
                    products.map((item) => (
                        <ProductCards key={item._id} product={item} />
                    ))
                }
            </div>

        </div>
    )
}

export default Product