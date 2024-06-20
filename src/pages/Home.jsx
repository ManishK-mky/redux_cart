import React, { useEffect, useState } from 'react'

// useDispatch() is a hook from react-redux used for sending data or events, updating the states to the store part; ----> used for writing
// useSelector() is a hook from react-redux used for reading the updating states form the store ---->  used for reading
import { useDispatch, useSelector } from 'react-redux';
import { addToCart , removeFromCart} from '../store/slices/cart-slice';


const Home = () => {

    const [products , setProducts] = useState([]);
    const [loading , setLoading] = useState(false); 

    const cart = useSelector(state => state.cart)

    async function fetchListOfProducts(){
        setLoading(true);
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json()

        if(data){
            setLoading(false);
            setProducts(data);
        }
    }

    useEffect(()=>{
        fetchListOfProducts();
    },[])

    // console.log(products);

    const dispatch = useDispatch();
    // function addToCart(){
    //     dispatch(addToCart())
    // }
    

  return (
    <div>
      <p className='text-3xl text-gray-600 text-bold flex justify-center mt-3'>Products are... </p>
            <div className='w-full grid md:grid-cols-4 grid-cols-3 gap-6 p-[24px] pl-[24px]'>
            {
                products && products.length > 0 ? products.map((product) => (
                    <div key={product.id} className="w-[90%] md:w-[100%] h-[70vh] flex flex-col justify-center item-center">
                        <img src={product.image} className='border-2 w-[full] h-[70%] object-contain rounded-tr-[12px] rounded-tl-[12px]' alt="" />
                        <div className="p-[9px] h-[30%] border-2 flex flex-col justify-items-end">
                            <div className="">
                                <p className='text-[12px] font-large text-gray-600'>
                                    {product.title.split(' ').slice(0, 4).join(' ')}{product.title.length > 12 && '...'}
                                </p>
                                <p className='text-[12px] mt-[6px] mb-[15px]'>$ {product.price}</p>
                            </div>
                            <button className='text-[12px] text-white rounded px-[12px] py-[9px] bg-gray-900 font-large' onClick={() => {cart.some(item => item.id === product.id) ? dispatch(removeFromCart(product.id)) : dispatch(addToCart(product))}}>
                                {
                                cart.some(item => item.id === product.id) ? 'Remove from cart' : 'Add to cart'
                                }
                            </button>
                        </div>
                    </div>
                )) : (
                    <div>

                        <p className='text-xl font-semibold text-gray-400 flex justify-center'>Your Products is loading...</p>
                    </div>
                )
            }
            </div>
    </div>
  )
}

export default Home
