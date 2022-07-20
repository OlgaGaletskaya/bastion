import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'
import { Context } from '../index'
import { PRODUCTS, PRODUCTS_TYPE, SHOP } from '../utils/consts'
import ShopCart from './ShopCart'
import Customer from './Customer'

const Header = observer(() => {
    const {product} = useContext(Context)
    const [cartDisplay, setCartDisplay] = useState(false)

    const showCart = () =>{
        if (cartDisplay)
        {setCartDisplay(false)}
        else 
        {setCartDisplay(true)}
    }
  return (
<div className="header">
        {product.customer ?
        <Customer/> :
        <div></div>
        }
    <div>
        <div className="container">
            <div className="header__inner">
                <nav className="header__nav">
                    <NavLink to={SHOP} className="header__link">Главная</NavLink>
                    <NavLink to={PRODUCTS} className="header__link">Продукты</NavLink>
                    <NavLink to={PRODUCTS_TYPE} className="header__link">Типы продуктов</NavLink>
                </nav>
                <div className="header__contacts">
                    <div className="header__cont">
                        <img src="./img/phone.svg" alt=""/>
                        <div className="header__phone">+7 (499) 380-78-90</div>
                    
                    </div>
                    <div className="header__cont">
                        <img src="./img/location.svg" alt=""/>
                        <div className="header__location">Москва</div>
                    </div>
                    <div className="header__cont">
                        <img src="./img/mail.svg" alt=""/>
                        <div>info@bastion.pro</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div className="header__main">
            <div className="container">
                <div className="header__inner">
                    <img src="./img/logo.png" alt=""/>
                    <p className="header__name">
                        Производитель металлических изделий №1
                    </p>
                    <NavLink to={SHOP}  className="btn">
                        <img src="./img/btn_svg.svg" alt=""/>
                        Каталог
                    </NavLink>
                    <form action="get" className="search">
                        <img src="./img/search.svg" alt="" className="search__icon"/>
                        <input type="text" className="search__input"/>
                        <img src="./img/search-ent.svg" alt="" className="search__enter"/>
                    </form>
                    <div className="header__favour">
                        <img src="./img/star.svg" alt=""/>
                        <p>Избранное</p> 
                    </div>
                    <div className="header__favour">
                    <div className='cart__img' onClick={showCart}>
                        <img src="./img/Cart.svg" alt=""/>
                        <p className='cart__num'>{product.cart.length}</p>
                        {cartDisplay?
                            <ShopCart/>  
                            :
                            <div></div>  
                        }
                    </div>
                        <p>Корзина</p> 
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="container">
                <div className="header__breadcrumbs">
                <p>Главная</p> 
                <p> Интернет-магазин </p>
                <p className="header__breadcrumb-active">Опоры трубопроводов</p>
                </div>
            </div>
            
        </div>
    </div>
  )
})

export default Header