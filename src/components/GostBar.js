import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'


const GostBar = observer(() => {
  const {product} = useContext(Context)
  return (
    <div className='shop__header shop__item gost'>
      {product.gost.map (gost =>
        < div 
        key ={gost.id}
        onClick = {() => {
          product.setSelectedGost(gost)
          product.setCurentProduct(product.product.filter((el) => product.selectedGost.name === el.gost))
        }}
        className = {gost.id === product.selectedGost.id ? 'shop__gost shop__gost-active' : 'shop__gost'}
        >
          {gost.name}
        </div>
        )}
    </div>
  )
})

export default GostBar