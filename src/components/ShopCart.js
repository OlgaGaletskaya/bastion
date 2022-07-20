import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import CartItem from './CartItem'


const ShopCart = observer(() => {
    const {product} = useContext(Context)
    const showCustomer=()=>{
        product.setCustomer(true)
    }

  return (
    
    <div className='cart'>
        <div className='cart__item'>
            <div className='cart__txt'>
                <p>Итого в корзине</p>
                <p className='cart__total'>{product.total} руб.</p>
            </div>
            <div className='cart__img'>
                <img src="./img/Cart.svg" alt=""/>
                <p className='cart__num'>{product.cart.length}</p>
            </div>
            
        </div>
        {product.cart.map(item =>
            <CartItem item={item} key={item.id}/>
            )}
        <div className='cart__footer'>
            <div className='cart__btn' onClick={showCustomer}>Оформить заказ</div>
            <div className='cart__offer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="37" viewBox="0 0 32 37" fill="none">
            <rect opacity="0.1" width="26" height="30" rx="2" fill="#C93E33"/>
            <path d="M14.5 7.5H8.5C8.10218 7.5 7.72064 7.65804 7.43934 7.93934C7.15804 8.22064 7 8.60218 7 9V21C7 21.3978 7.15804 21.7794 7.43934 22.0607C7.72064 22.342 8.10218 22.5 8.5 22.5H17.5C17.8978 22.5 18.2794 22.342 18.5607 22.0607C18.842 21.7794 19 21.3978 19 21V12L14.5 7.5Z" stroke="#C93E33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.5 7.5V12H19" stroke="#C93E33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 15.75H10" stroke="#C93E33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 18.75H10" stroke="#C93E33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.5 12.75H10.75H10" stroke="#C93E33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <g filter="url(#filter0_d_2921_2)">
            <circle cx="22.5" cy="25.5" r="7.5" fill="white"/>
            </g>
            <path d="M25.125 26.375V27.5417C25.125 27.6964 25.0635 27.8447 24.9541 27.9541C24.8447 28.0635 24.6964 28.125 24.5417 28.125H20.4583C20.3036 28.125 20.1553 28.0635 20.0459 27.9541C19.9365 27.8447 19.875 27.6964 19.875 27.5417V26.375" stroke="#C93E33" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.042 24.9167L22.5003 26.375L23.9587 24.9167" stroke="#C93E33" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22.5 26.375V22.875" stroke="#C93E33" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
            <filter id="filter0_d_2921_2" x="13" y="18" width="19" height="19" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2921_2"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2921_2" result="shape"/>
            </filter>
            </defs>
            </svg>
            <p>Коммерческое предложение</p>
            </div>
        </div>
    </div>
  )
})

export default ShopCart