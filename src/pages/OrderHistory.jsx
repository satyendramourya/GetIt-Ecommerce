import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { Link } from 'react-router-dom'


import { MdOutlineClose } from 'react-icons/md'
import { deleteHistoryItem } from '../redux/getItSlice'
import { toast } from 'react-toastify'


const OrderHistory = () => {
    const dispatch = useDispatch()

    const orderHistory = useSelector((state) => state.getIt.cartOrderHistory)
    
  return (
      <div className=' w-full p-2 lg:p-5'>
          <div className='w-full'>
              <h2 className='font-titlFont text-2xl'>order history</h2>
          </div>
          {
              orderHistory.length === 0 && <div className='flex flex-col items-center justify-center mt-10'>
                  <h2 className='font-titlFont text-2xl'>No order history</h2>
                  <MdOutlineClose className='text-6xl text-gray-400' />
                  <p className='text-sm'>Go shopping</p>
              </div>
              
          }
          <div>
              {
                  orderHistory.map((item) => (
                      <div key={item._id}
                          className='flex md:items-center md:justify-between gap-6 mt-6 relative border p-2 rounded-sm'>
                          
                          <span className='absolute top-2 right-2 border rounded-md hover:bg-gray-100'>
                              <MdOutlineClose
                                  onClick={() =>
                                      dispatch(deleteHistoryItem(item._id)) & toast.error(`${item.title}, removed`)
                                  }
                                  className='text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300' />
                          </span>

                          <div className='flex items-center gap-2'>
                              <div className='flex flex-col gap-2'>
                                  <img className='w-32 min-w-[80px] h-32object-cover rounded-md' src={item.image} alt="productIMG" />
                              </div>
                          </div>

                          <div className='flex flex-col gap-2 lg:flex-row'>
                              <h2 className='w-52 text-sm md:text-md'>{item.title}</h2>
                              <p className='text-red-500 text-xs md:hidden'>Limited time deal</p>

                              <div className='flex gap-2 '>
                                  <p className='line-through text-gray-500 md:hidden'>${item.oldPrice}</p>
                                  <p className='font-semibold'>${item.price}</p>
                              </div>

                              <p className='text-gray-700 text-xs md:hidden'>Eligible for FREE Shipping</p>

                              <p className='w-14 text-xl mt-5 md:hidden'>${item.quantity * item.price}</p>
                          </div>

                          <p className='w-14 hidden md:block'>${item.quantity * item.price}</p>
                      </div>
                  ))
              }
          </div>

          <div className='flex justify-between items-center p-3'>
              <Link to='/'>
                  <button className='mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300'>
                      <span>
                          <HiOutlineArrowLeft />
                      </span>
                      go shopping
                  </button>
              </Link>
              <Link to='/cart'>
                  <button className='mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300'>
                      visit cart
                  </button>
              </Link>
          </div>
      </div >
  )
}

export default OrderHistory