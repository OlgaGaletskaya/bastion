import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'

const ProductItem = observer(({productt}) => {
  const {product} = useContext(Context)
  
  const action = productt.name.includes('а');
  const hit = productt.name.includes('о');
  const [col, setCol] = useState(1)
  const increament = (e) => {
    setCol(col+1)
  }
  const decreament = (e) => {
    setCol(col-1)
  }
  const addCart = (e) => {
    for (let i=0; i<col; i++){
    product.setCart([...product.cart, {img:productt.img, name:productt.name, price:productt.price, id: product.cart.length+1}])
    product.setTotal(+product.total + productt.price)
  }
  }

  return (
    <div className='card'>
      <div className='card__inner'>
      <div className='card__img'>
        <img src={productt.img} alt=""/>
      </div>
      <div className='card__cont'>
        <div className='card__gost'> {productt.gost} </div>
        <div className='card__name'> {productt.name} </div>
        <div className='card__price-col'>
          <div className='card__price'> {productt.price} руб.</div>
          <div>
            <div className='card__col'>
              <div className='card__colplus' onClick={increament}>+</div>
              <div className='card__colnum'>{col}</div>
              <div className='card__colplus' onClick={decreament}>-</div>
            </div>
          </div>
          
        </div>
        
      </div>
      <div className='card__btns'>
        <button className='card__btn' onClick={addCart}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.333374 1.00001C0.333374 0.63182 0.631851 0.333344 1.00004 0.333344H2.16671C2.47262 0.333344 2.73927 0.541542 2.81347 0.83832L3.18723 2.33334H14.6667C14.872 2.33334 15.0658 2.42792 15.1922 2.58974C15.3185 2.75155 15.3633 2.96254 15.3135 3.1617L13.6468 9.82837C13.5726 10.1251 13.306 10.3333 13 10.3333H4.33337C4.02746 10.3333 3.76081 10.1251 3.68661 9.82837L1.64619 1.66668H1.00004C0.631851 1.66668 0.333374 1.3682 0.333374 1.00001ZM4.33337 10.3333C3.4129 10.3333 2.66671 11.0795 2.66671 12C2.66671 12.9205 3.4129 13.6667 4.33337 13.6667C5.25385 13.6667 6.00004 12.9205 6.00004 12C6.00004 11.0795 5.25385 10.3333 4.33337 10.3333ZM13 10.3333C12.0796 10.3333 11.3334 11.0795 11.3334 12C11.3334 12.9205 12.0796 13.6667 13 13.6667C13.9205 13.6667 14.6667 12.9205 14.6667 12C14.6667 11.0795 13.9205 10.3333 13 10.3333ZM3.52056 3.66668L4.85389 9.00001H12.4795L13.8129 3.66668H3.52056ZM8.66671 4.33334C9.0349 4.33334 9.33337 4.63182 9.33337 5.00001V5.66668H10C10.3682 5.66668 10.6667 5.96515 10.6667 6.33334C10.6667 6.70153 10.3682 7.00001 10 7.00001H9.33337V7.66668C9.33337 8.03487 9.0349 8.33334 8.66671 8.33334C8.29852 8.33334 8.00004 8.03487 8.00004 7.66668V7.00001H7.33337C6.96518 7.00001 6.66671 6.70153 6.66671 6.33334C6.66671 5.96515 6.96518 5.66668 7.33337 5.66668H8.00004V5.00001C8.00004 4.63182 8.29852 4.33334 8.66671 4.33334ZM4.33337 11.6667C4.14928 11.6667 4.00004 11.8159 4.00004 12C4.00004 12.1841 4.14928 12.3333 4.33337 12.3333C4.51747 12.3333 4.66671 12.1841 4.66671 12C4.66671 11.8159 4.51747 11.6667 4.33337 11.6667ZM13 11.6667C12.8159 11.6667 12.6667 11.8159 12.6667 12C12.6667 12.1841 12.8159 12.3333 13 12.3333C13.1841 12.3333 13.3334 12.1841 13.3334 12C13.3334 11.8159 13.1841 11.6667 13 11.6667Z" className='card__btn-icon'/>
          </svg>
          <p> В корзину </p>
        </button>
        <button className='card__btn'>
          <p> Подробнее </p>
        </button>
        <div className='card__best'>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M6.4982 0.812502C6.70445 0.811972 6.8931 0.928616 6.98479 1.11336L8.5358 4.23847L11.9948 4.74284C12.1985 4.77255 12.3678 4.91521 12.4316 5.11098C12.4955 5.30675 12.4427 5.52176 12.2956 5.66583L9.77969 8.12981L10.3771 11.5527C10.4127 11.7566 10.329 11.963 10.1613 12.0845C9.99365 12.2059 9.77144 12.2212 9.58875 12.1238L6.49962 10.4773L3.41119 12.1238C3.22839 12.2213 3.00602 12.2059 2.83834 12.0843C2.67065 11.9627 2.58702 11.7561 2.62289 11.552L3.22463 8.1298L0.704646 5.66616C0.557298 5.52211 0.50445 5.30692 0.568301 5.111C0.632153 4.91507 0.801643 4.77235 1.00558 4.74278L4.48334 4.23848L6.01317 1.11586C6.10391 0.930643 6.29196 0.813032 6.4982 0.812502ZM6.50274 2.57893L5.33042 4.97183C5.25171 5.13247 5.09877 5.2439 4.92172 5.26958L2.2456 5.65763L4.18626 7.55489C4.31411 7.67988 4.37204 7.85992 4.34108 8.03602L3.88233 10.645L6.24478 9.38555C6.40403 9.30065 6.59511 9.30064 6.75437 9.38552L9.11915 10.6459L8.6635 8.03535C8.63282 7.85961 8.69065 7.68004 8.8181 7.55522L10.7563 5.65704L8.09863 5.26951C7.92273 5.24387 7.77061 5.13355 7.69159 4.97432L6.50274 2.57893Z" fill="#B3B3B3"/>
        </svg>
        <p>В избранное</p>
        </div>
      </div>
      <div className='card__plus'>
        {
          hit ?
          <div className='card__hit'>хит</div>:
          <div></div>
        }
        {
          action ?
          <div className='card__action'>акция</div>:
          <div></div>
        }
        
      </div>
      </div>
      


    </div>
  )
})

export default ProductItem