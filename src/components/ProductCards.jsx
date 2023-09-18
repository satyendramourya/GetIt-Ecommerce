import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/getItSlice';
import { ToastContainer, toast } from 'react-toastify';

const ProductCards = ({ product }) => {

  // dispatch for add to cart
  const dispatch = useDispatch();



  //handle routing and passing data to product details page
  const navigate = useNavigate();
  const _id = product.title;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("")
  }
  const rootId = idString(_id);
  // console.log(rootId)

  
  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      }
    })
  }



  // product card UI 
  return (
    <div className='group relative m-2 '>
      <div onClick={handleDetails} className='w-full md:h-96 object-contain cursor-pointer overflow-hidden'>
        <img
          className='w-full rounded-t-md md:h-full  group-hover:scale-110 duration-500 '
          src={product.image} alt="img" />
      </div>
      <div className='w-full border-[1px] px-2 py-4 rounded-md'>
        <div className='flex justify-between items-center'>
          <div>
            <h2 className='font-titlFont text-base font-bold'>{product.title.substring(0, 15)}</h2>
          </div>
          <div>
            <div className='flex gap-2 justify-end relative overflow-hidden w-28 text-sm'>
              <div className='flex gap-2 lg:transform lg:group-hover:translate-x-24 transition-transform duration-500 pr-4 lg:p-0'>
                <p className='line-through text-gray-500'>${product.oldPrice}</p>
                <p className='font-semibold'>${product.price}</p>
              </div>
              <p onClick={() => dispatch(addToCart({
                _id: product._id,
                title: product.title,
                image: product.image,
                price: product.price,
                oldPrice: product.oldPrice,
                quantity: 1,
                description:product.description

              })) & toast.success(`${product.title} Added to cart`)
              
              } className='hidden absolute z20 w-[100px] text-gray-500 hover:text-gray-900 lg:flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500'>
                add to cart <span><BsArrowRight /></span>
              </p>

            </div>
          </div>

        </div>
        <div className='flex justify-between pr-3'>
          <p>{product.category}</p>
          <button onClick={() => dispatch(addToCart({
            _id: product._id,
            title: product.title,
            image: product.image,
            price: product.price,
            oldPrice: product.oldPrice,
            quantity: 1,
            description: product.description

          })) & toast.success(`${product.title} Added to cart`)

          } className=' bg-gray-900 p-2  text-sm font-titlFont lg:hidden text-white hover:text-gray-300 flex items-center gap-1 rounded-md active:scale-95  cursor-pointer'>
            add to cart <span><BsArrowRight /></span>
          </button>

        </div>
        <div className='absolute top-4 right-0'>
          {product.isNew && <p className='bg-black text-white font-semibold font-titlFont px-6 py-1'>Sale</p>}
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

export default ProductCards