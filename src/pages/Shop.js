import React from 'react'
import Desription from '../components/Desription'
import ShopCards from '../components/ShopCards'
import ShopFilter from '../components/ShopFilter'
import ShopFooter from '../components/ShopFooter'
import ShopHeader from '../components/ShopHeader'

const Shop = () => {
  return (
    <div className='shop'>
      <div className='container'>
        <ShopHeader/>
        <div className='shop__inner'>
          <ShopFilter/>
          <ShopCards/>
        </div>
        <ShopFooter/>
        <Desription/>
      </div>
    </div>
  )
}

export default Shop