import React from 'react'
import GostBar from './GostBar'
import ProductsList from './ProductsList'

const ShopCards = () => {
  return (
    <div  className='shop__cards'>
        <GostBar/>
        <ProductsList/>
    </div>
  )
}

export default ShopCards