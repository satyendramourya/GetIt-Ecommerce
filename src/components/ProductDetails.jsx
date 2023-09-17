import React, { useEffect, useState } from 'react'
import { MdOutlineStar } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { addToCart } from '../redux/getItSlice';
import { ToastContainer, toast } from 'react-toastify';


const ProductDetails = () => {

  // change quantity of product and to cart
  let [baseQty, setBaseQty] = useState(1)
  const dispatch = useDispatch( )

  const [details, setDetails] = useState({});
  const location = useLocation();
  const itemDetail = location.state.item;
  useEffect(() => {
    setDetails(itemDetail);
  }, [itemDetail])

  return (
    <div>
      <div className='lg:max-w-screen-xl mx-auto my-10 flex flex-col lg:flex-row gap-10'>
        <div className='lg:w-2/5 relative  m-4'>
          <img className='w-full rounded-md h-[550px] object-cover' src={details.image} alt={details.category} />
          <div className='absolute top-4 right-0'>
            {
              details.isNew && <p className='bg-black text-white font-semibold font-titlFont px-8 py-1'>Sale</p>
            }
          </div>
        </div>
        <div className='lg:w-3/5 flex flex-col justify-center gap-6 md:gap-12 m-4'>
          <div>
            <h2 className='text-4xl font-semibold'>
              {details.title}
            </h2>
            <div className='flex gap-4 mt-3 items-center'>
              <p className='line-through text-gray-500'>${details.oldPrice}</p>
              <p className='font-semibold'>${details.price}</p>
            </div>
          </div>
          <div className='flex items-center gap-2 text-base'>
            <div className='flex'>
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className='text-xs text-gray-500'>( 1 Customer review )</p>
          </div>
          <p className='text-base text-gray-500 -mt-3'>{details.description}</p>
          <div className='flex gap-4'>
            <div className='lg:w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
              <p className='hidden md:block text-sm'>Quantity</p>
              <div className='flex items-center gap-4 text-sm font-semibold'>
                <button onClick={() => { setBaseQty(baseQty > 1? baseQty-1: baseQty) }} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>-</button>
                <span>{baseQty}</span>
                <button onClick={()=>{setBaseQty(baseQty+1)}} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black' >+</button>
              </div>
            </div>
            <button
              onClick={
                () => dispatch(
                  addToCart({
                    _id: details._id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: baseQty,
                    oldPrice: details.oldPrice,
                    description: details.description
                  })
                ) & toast.success(`${details.title} Added to cart`)
                &
               setBaseQty(1) 
              }
              className='bg-black text-white py-3 px-6 active:bg-gray-800' >add to cart</button>
          </div>
          <p>Category: <span className='font-medium capitalize'> {details.category}</span></p>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={false}
        theme='dark'
      />
    </div>
  )
}

export default ProductDetails