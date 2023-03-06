import React from 'react'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Redux/Action'

export default function Shoe({ shoe }) {
  const {name, shortDescription, image, price} = shoe
  const dispatch = useDispatch()

  const addShoeToCart = (shoe) => {
    dispatch(addToCart(shoe))
    Swal.fire(
      'Success!',
      'You added Shoe to Cart!',
      'success',
    )
  }
  return (
    <div className='card bg-white text-black py-3'>
      <img src={image} alt="imageShoe" />
      <div className="shoe_description mx-5">
        <h4 className='text-sky-600 font-bold text-2xl'>{name.length > 17 ? name.substr(0, 17) + ' ...' : name}</h4>
        <p>{shortDescription}</p>
        <div className="shoe__button flex justify-between mt-4">
          <p className='font-bold'>Price: <span className='text-2xl text-red-500 font-bold'>{price}</span></p>
          <button onClick={() => addShoeToCart(shoe)} className='bg-sky-700 hover:text-sky-700 hover:bg-white border-2 hover:border-sky-700 duration-300 border-sky-700-900 hover:border-2  text-white px-5 py-1'>Buy</button>
        </div>
      </div>
    </div>
  )
}
