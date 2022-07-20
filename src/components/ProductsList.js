import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import ProductItem from './ProductItem'

const ProductsList = observer(() => {
const {product} = useContext(Context)
  return (
    <div className='shop__list'>
    {product.curentProduct.map(product =>
        <ProductItem key={product.id} productt={product}/>
        )}
    </div>
  )
})

export default ProductsList