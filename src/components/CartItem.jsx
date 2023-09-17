import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { MdOutlineClose } from 'react-icons/md'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { decrementQuantity, incrementQuantity, deleteItem, resetCart } from '../redux/getItSlice'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const CartItem = () => {
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.getIt.productData)

  return (
    <div className=' w-full lg:w-2/3 p-2 lg:p-5'>
      <div className='w-full'>
        <h2 className='font-titlFont text-2xl'>shopping cart</h2>
      </div>
      <div>
        {
          productData.map((item) => (
            <div key={item._id}
              className='flex md:items-center md:justify-between gap-6 mt-6 relative border p-2 rounded-sm'>
              <span className='absolute top-2 right-2 border rounded-md hover:bg-gray-100'>
                <MdOutlineClose
                  onClick={() =>
                    dispatch(deleteItem(item._id)) & toast.error(`${item.title}, removed`)
                  }
                  className='text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300' />
              </span>

              <div className='flex items-center gap-2'>
                <div className='flex flex-col gap-2'>
                  <img className='w-32 min-w-[80px] h-32object-cover rounded-md' src={item.image} alt="productIMG" />
                  <div className='flex items-center justify-between border p-2 md:hidden'>
                    <button
                      onClick={() => dispatch(
                        decrementQuantity({
                          _id: item._id,
                          quantity: item.quantity
                        })) & toast.error(`${item.title}, quantity decreased`
                        )}
                      className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'> - </button>
                    {/* <span>{baseQty}</span> */}
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => dispatch(
                        incrementQuantity({
                          _id: item._id,
                          quantity: item.quantity
                        })) & toast.success(`${item.title} quantity incremented`)}
                      className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black' > + </button>
                  </div>
                </div>
              </div>

              <div className='flex flex-col gap-2 lg:flex-row'>
                <h2 className='w-52'>{item.title}</h2>
                <p className='text-red-500 text-xs md:hidden'>Limited time deal</p>

                <div className='flex gap-2 '>
                  <p className='line-through text-gray-500 md:hidden'>${item.oldPrice}</p>
                  <p className='font-semibold'>${item.price}</p>
                </div>

                <p className='text-gray-700 text-xs md:hidden'>Eligible for FREE Shipping</p>

                <p className='w-14 text-xl mt-5 md:hidden'>${item.quantity * item.price}</p>
              </div>

              <div className='w-52 md:flex items-center justify-between text-gray-500 gap-4 border p-3 hidden'>
                <p className='text-sm'>Quantity</p>
                <div className='flex items-center gap-4 text-sm font-semibold'>
                  <button
                    onClick={() => dispatch(
                      decrementQuantity({
                        _id: item._id,
                        quantity: item.quantity
                      })) & toast.error(`${item.title}, quantity decreased`
                      )}
                    className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'> - </button>
                  {/* <span>{baseQty}</span> */}
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => dispatch(
                      incrementQuantity({
                        _id: item._id,
                        quantity: item.quantity
                      })) & toast.success(`${item.title} quantity incremented`)}
                    className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black' > + </button>
                </div>
              </div>
              <p className='w-14 hidden md:block'>${item.quantity * item.price}</p>
            </div>
          ))
        }
      </div>
      <div className='flex justify-between items-center'>
        <Link to='/'>
          <button className='mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300'>
            <span>
              <HiOutlineArrowLeft />
            </span>
            go shopping
          </button>
        </Link>
        <button
          onClick={() => dispatch(
            resetCart()) & toast.error('Cart Reset')
          }
          className='bg-red-500 text-white mt-8 ml-7 py-1
      px-6 hover:bg-red-800 duration-300'>Reset Cart</button>

      </div>

    </div >
  )
}

export default CartItem