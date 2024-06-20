import React, { useEffect } from 'react';
import { useState } from 'react';
// import { addToCart } from '../store/slices/cart-slice';
import { useSelector , useDispatch } from 'react-redux';
import { removeFromCart } from '../store/slices/cart-slice';

const Cart = () => {

    const [totalCart , setTotalCart] = useState(0);//total number of items
    const cart = useSelector(state=> state.cart) // importing data forn the updated state --> the flow is ---> cart.jsx ---> store.jsx ---> cartSlice.jsx
    const dispatch = useDispatch()
    useEffect(() => { //reduce() is used ot add the elements of the array
        setTotalCart(cart.reduce((acc, curr) => acc + curr.price , 0 ))
    } ,[])

    console.log(cart , totalCart);

  return (
    <div>
      {/* <p className='text-3xl text-gray-600 text-bold flex justify-center mt-3'>Pro </p> */}
            <div className='w-full grid md:grid-cols-4 grid-cols-3 gap-6 p-[24px] pl-[24px]'>
            {
                cart && cart.length > 0 ? cart.map((product) => (
                    <div key={product.id} className="w-[90%] md:w-[100%] h-[70vh] flex flex-col justify-center item-center">
                        <img src={product.image} className='border-2 w-[full] h-[70%] object-contain rounded-tr-[12px] rounded-tl-[12px]' alt="" />
                        <div className="p-[9px] h-[30%] border-2 flex flex-col justify-items-end">
                            <div className="">
                                <p className='text-[12px] font-large text-gray-600'>
                                    {product.title.split(' ').slice(0, 4).join(' ')}{product.title.length > 12 && '...'}
                                </p>
                                <p className='text-[12px] mt-[6px] mb-[15px]'>$ {product.price}</p>
                            </div>
                            <button className='text-[12px] text-white rounded px-[12px] py-[9px] bg-gray-900 font-large' onClick={() => {dispatch(removeFromCart(product.id))}}>
                                {/* {
                                cart.some(item => item.id === product.id) ? 'Remove from cart' : 'Add to cart'
                                } */}Remove from cart.
                            </button>
                        </div>
                    </div>
                )) : (
                    <div>

                        <p className='w-full text-center text-xl font-semibold text-gray-600 flex justify-center items-center'>Your Cart is empty...</p>
                    </div>
                )
            }
            </div>
    </div>
  )
}

export default Cart
