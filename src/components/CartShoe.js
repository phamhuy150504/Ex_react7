import React from 'react'
import Swal from 'sweetalert2'
import {  useDispatch, useSelector } from 'react-redux'
import { handleIncreaseDecrease, removeShoeInCart } from '../Redux/Action';

export default function CartShoe() {
  const dataCart = useSelector(state => state.ShoeReducer.listCartShoe);
  
  const dispatch = useDispatch();
  
  const handleIncreaseDecreaseQuantity = (check, id) => {
    dispatch(handleIncreaseDecrease({check, id}))
  }

  const removeShoe = (id) => {
    dispatch(removeShoeInCart(id))
    Swal.fire(
      'Success!',
      'You Removed Success!',
      'success',
    )
  }

  const handleTotal = () => {
      return dataCart.reduce((init, item) => init += item.quantity * item.price, 0)
  }

  const renderListCartShoe = () => {
    return dataCart.map((shoe, index) => {
      const {id, price, image, quantity, name} = shoe
      return (
        <tr key={index} className='text-center'>
          <td>{name}</td>
          <td><button onClick={() => handleIncreaseDecreaseQuantity(true, id)} className='bg-sky-700 hover:text-sky-700 hover:bg-white border-2 hover:border-sky-700 duration-300 border-sky-700-900 hover:border-2  text-white px-3 py-1 rounded-full'>+</button>
             <span className='mx-3 '>{quantity}</span>
              <button onClick={() => handleIncreaseDecreaseQuantity(false, id)} className='bg-sky-700 hover:text-sky-700 hover:bg-white border-2 hover:border-sky-700 duration-300 border-sky-700-900 hover:border-2  text-white rounded-full px-3 py-1'>-</button></td>
          <td>{price}</td>
          <td><img className='mx-auto' src={image} alt="cartImageShoe" style={{width: 100}}/></td>
          <td>{price * quantity}</td>
          <td><button onClick={() => removeShoe(id)} className='bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-800 duration-200'>Remove</button></td>
        </tr>
      )
    })
  } 

  
  return (
    <div className='table w-full text-white my-5'>
      <table className="table-fixed w-full text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>
              Quantity
            </th>
            <th>Price</th>
            <th>Image</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {renderListCartShoe()}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}></td>
            <td colSpan={2} className='text-xl font-bold'>Total: <span className='text-3xl text-orange-500'> {handleTotal()} USD</span></td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
