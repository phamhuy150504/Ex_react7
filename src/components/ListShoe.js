import React from 'react'
import { useSelector } from 'react-redux'
import Shoe from './Shoe'

export default function ListShoe() {
  const dataShoe = useSelector(state => state.ShoeReducer.listShoe);
 
  const renderListShoe = () => {
    return dataShoe.map((item, index) => {
      return <Shoe key={index} shoe={item}/>
    })
  }

  return (
    <div className='grid grid-cols-4 text-center gap-6'>
      {renderListShoe()}
    </div>  
  )
}
