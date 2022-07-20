import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'

const CartItem = observer(({item}) => {
  const {product} = useContext(Context)

  return (
    <div  key={item.id}  className='cart__item'>
                <img src={item.img} alt='' className='cart__img'/>
                <div className='cart__txt'>
                    <p> {item.name}</p>
                    <p  className='cart__price'>{item.price} руб.</p>
                </div>
                <div onClick={()=>
                {
                  product.setTotal( product.total - +item.price)
                  product.setCart(product.cart.filter((el) => el.id !== item.id))
                }
                }>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="10" viewBox="0 0 8 10" fill="none">
                    <path d="M2.33301 2.49998V1.66665C2.33301 1.44563 2.42081 1.23367 2.57709 1.07739C2.73337 0.92111 2.94533 0.833313 3.16634 0.833313H4.83301C5.05402 0.833313 5.26598 0.92111 5.42226 1.07739C5.57854 1.23367 5.66634 1.44563 5.66634 1.66665V2.49998M6.91634 2.49998V8.33331C6.91634 8.55433 6.82854 8.76629 6.67226 8.92257C6.51598 9.07885 6.30402 9.16665 6.08301 9.16665H1.91634C1.69533 9.16665 1.48337 9.07885 1.32709 8.92257C1.17081 8.76629 1.08301 8.55433 1.08301 8.33331V2.49998H6.91634Z" stroke="#C93E33" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </div>
    </div>
  )
})

export default CartItem