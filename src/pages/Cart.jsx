import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addToOrderHistory, emptyCart } from '../redux/getItSlice';



import { makePayment } from "../api/stripe";

import CartItem from "../components/CartItem"
// import { emptyCart } from "../redux/getItSlice";

const Cart = () => {

  const dispatch = useDispatch();
  const productData = useSelector((state) => state.getIt.productData)
  const userInfo = useSelector(state => state.getIt.userInfo)
  const [totalAmount, setTotalAmount] = useState(0);

  // handeling amount onproduct quantity change, add and remove
  useEffect(() => {
    let total = 0;
    productData.forEach((item) => {
      total += item.quantity * item.price;
    });
    setTotalAmount(total.toFixed(2));
  }, [productData])

  // handeling checkout
  const handleCheckout = () => {
    if (userInfo) {
      try {
        // Implement Stripe payment here using your makePayment function
        makePayment(productData);

        // Dispatch an action to add the order to history
        dispatch(addToOrderHistory({ products: productData, totalAmount }));

        // Dispatch an action to empty the cart
        dispatch(emptyCart());
      } catch (error) {
        // Handle any payment errors here
        console.error('Payment error:', error);
        toast.error('Payment failed. Please try again.');
      }

    } else {
      toast.error('Please login first');
    }

  }

  return (
    <div>
      <img className="w-full h-60 object-cover hidden lg:block" src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compres" alt="cartImg" />

      <div className=" md:max-w-screen-lg  xl:max-w-screen-xl mx-auto py-3 lg:py-20 flex flex-col lg:gap-10 lg:flex-row">
        <CartItem />
        <div className="lg:w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">Cart totals</h2>

            <div>
              <p className="flex items-center gap-4 text-base">
                Subtotal <span className="font-titlFont font-bold text-lg">$ {totalAmount}</span>
              </p>
            </div>
            <p className="flex items-start gap-4 text-base">Shiping <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi hic.</span></p>
          </div>
          <p className="font-titlFont font-semibold flex justify-between mt-6"> Total <span className="text-xl font-bold">$ {totalAmount}</span></p>
          <button onClick={handleCheckout} className=" active:scale-95 text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-500" target='_blank' >proceed to checkout</button>


          <div className="flex flex-col gap-4 border-y-[1px] mt-4 border-y-gray-400 pb-6 text-sm">
            <h2 className=" font-medium">Demo Data</h2>
            <p className="flex items-center gap-4">
              Card info. <span className="font-titlFont font-bold text-lg"> 4111 1111 1111 1111</span>
            </p>
            <p className="flex items-start gap-4">Billing add- country <span>United States</span></p>
          </div>
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

export default Cart