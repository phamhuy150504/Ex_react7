import React from 'react'
import ListShoe from './ListShoe'
import CartShort from './CartShoe'
import { useSelector } from 'react-redux'

export default function Exercise_Shoe() {
  const dataListShoe = useSelector(state => state.ShoeReducer.listCartShoe)
  

  return (
   <div className='bg-gray-800 w-full h-full  '>
      <div className='container mx-auto h-full'>
          <h1 className='text-center py-5 text-3xl font-bold text-white'>SHOP SHOE WITH REACT FUNCTIONAL</h1>
          {dataListShoe.length > 0 && <CartShort/>}
          <ListShoe /> 
      </div>
   </div>
  )
}
