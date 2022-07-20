import React from 'react'
import { observer } from 'mobx-react-lite'
import Categories from './Categories'
import Filter from './Filter'

const ShopFilter = observer(() => {
  return (
    <div className='shop__filter'>
      <Categories/>
      <Filter/>
    </div>
  )
})

export default ShopFilter