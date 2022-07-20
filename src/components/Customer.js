import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'


const Customer = observer(() => {
    const {product} = useContext(Context)
    const [customer, setCustomer] = useState({name:'', phone:'', mail:'', org:''})
    const showCustomer=()=>{
        product.setCustomer(false)
    }
    const sendOrder = () => {
        console.log("Заказ на сумму", product.total)
        console.log("Данные покупателя")
        console.log(customer.name)
        console.log(customer.phone)
        console.log(customer.mail)
        console.log(customer.org)
        console.log("Товары в корзине")
        for (let i=0; i<product.cart.length; i++){
            console.log(product.cart[i].id, product.cart[i].name, product.cart[i].price)
        }
        setCustomer({name:'', phone:'', mail:'', org:''})
        product.setCart('')
    }
  return (
    <div className='m'>
        <div className='customer'>
            <div className='customer__close' onClick={showCustomer}>x</div>
            <div className='customer__header'>Заказ</div>
            <div className='customer__inner'>
                <div className='customer__txt'>Контактная информация</div>
                <form className='customer__form'>
                    <div className='customer__item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M11.6668 12.25V11.0833C11.6668 10.4645 11.421 9.871 10.9834 9.43342C10.5458 8.99583 9.95233 8.75 9.3335 8.75H4.66683C4.04799 8.75 3.4545 8.99583 3.01691 9.43342C2.57933 9.871 2.3335 10.4645 2.3335 11.0833V12.25" stroke="#C93E33" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6.99984 6.41667C8.2885 6.41667 9.33317 5.372 9.33317 4.08333C9.33317 2.79467 8.2885 1.75 6.99984 1.75C5.71117 1.75 4.6665 2.79467 4.6665 4.08333C4.6665 5.372 5.71117 6.41667 6.99984 6.41667Z" stroke="#C93E33" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <input 
                        type='text' 
                        className='customer__inprut' 
                        placeholder='ФИО' 
                        value={customer.name} 
                        onChange={e => setCustomer({...customer, name:e.target.value})}
                        />
                    </div>
                    <div className='customer__item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M12.8333 9.86999V11.62C12.834 11.7824 12.8007 11.9433 12.7356 12.0921C12.6705 12.241 12.5751 12.3746 12.4554 12.4844C12.3357 12.5942 12.1943 12.6779 12.0404 12.7299C11.8865 12.7819 11.7235 12.8013 11.5617 12.7867C9.76666 12.5916 8.04242 11.9782 6.5275 10.9958C5.11807 10.1002 3.92311 8.90525 3.0275 7.49582C2.04166 5.97402 1.42814 4.2414 1.23667 2.43832C1.22209 2.27701 1.24126 2.11443 1.29296 1.96093C1.34466 1.80744 1.42775 1.66639 1.53695 1.54676C1.64615 1.42714 1.77905 1.33157 1.92721 1.26612C2.07537 1.20068 2.23553 1.1668 2.3975 1.16665H4.1475C4.4306 1.16387 4.70505 1.26411 4.9197 1.44871C5.13435 1.63331 5.27455 1.88966 5.31417 2.16999C5.38803 2.73002 5.52501 3.27991 5.7225 3.80915C5.80099 4.01794 5.81797 4.24485 5.77145 4.463C5.72492 4.68115 5.61684 4.88138 5.46 5.03999L4.71917 5.78082C5.54958 7.24122 6.75877 8.45041 8.21917 9.28082L8.96 8.53999C9.1186 8.38315 9.31884 8.27506 9.53699 8.22854C9.75514 8.18202 9.98205 8.199 10.1908 8.27749C10.7201 8.47497 11.27 8.61196 11.83 8.68582C12.1134 8.72579 12.3722 8.86852 12.5571 9.08686C12.7421 9.30519 12.8404 9.5839 12.8333 9.86999Z" stroke="#C93E33" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <input type='text' className='customer__inprut' placeholder='Контактный телефон' value={customer.phone} onChange={e => setCustomer({...customer, phone:e.target.value})}/>
                    </div>
                    <div className='customer__item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <g opacity="0.5">
                        <path d="M6.99984 9.33332C8.2885 9.33332 9.33317 8.28865 9.33317 6.99999C9.33317 5.71133 8.2885 4.66666 6.99984 4.66666C5.71117 4.66666 4.6665 5.71133 4.6665 6.99999C4.6665 8.28865 5.71117 9.33332 6.99984 9.33332Z" stroke="#C93E33" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.33318 4.66666V7.58333C9.33318 8.04746 9.51755 8.49258 9.84574 8.82076C10.1739 9.14895 10.619 9.33333 11.0832 9.33333C11.5473 9.33333 11.9924 9.14895 12.3206 8.82076C12.6488 8.49258 12.8332 8.04746 12.8332 7.58333V6.99999C12.8331 5.68343 12.3876 4.40561 11.5693 3.3743C10.7509 2.343 9.60767 1.61888 8.32555 1.31967C7.04343 1.02046 5.6978 1.16377 4.50746 1.72629C3.31712 2.28881 2.35207 3.23747 1.76924 4.418C1.18641 5.59853 1.02007 6.94151 1.29727 8.22856C1.57447 9.51561 2.27891 10.671 3.29604 11.507C4.31318 12.3429 5.58318 12.8102 6.89955 12.8328C8.21592 12.8555 9.50124 12.4321 10.5465 11.6317" stroke="#C93E33" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        </svg>
                        <input type='text' className='customer__inprut' placeholder='Email' value={customer.mail} onChange={e => setCustomer({...customer, mail:e.target.value})}/>
                    </div>
                    <div className='customer__item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path opacity="0.5" d="M11.6665 4.08334H2.33317C1.68884 4.08334 1.1665 4.60568 1.1665 5.25001V11.0833C1.1665 11.7277 1.68884 12.25 2.33317 12.25H11.6665C12.3108 12.25 12.8332 11.7277 12.8332 11.0833V5.25001C12.8332 4.60568 12.3108 4.08334 11.6665 4.08334Z" stroke="#C93E33" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path opacity="0.5" d="M9.33317 12.25V2.91667C9.33317 2.60725 9.21025 2.3105 8.99146 2.09171C8.77267 1.87292 8.47592 1.75 8.1665 1.75H5.83317C5.52375 1.75 5.22701 1.87292 5.00821 2.09171C4.78942 2.3105 4.6665 2.60725 4.6665 2.91667V12.25" stroke="#C93E33" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <input type='text' className='customer__inprut' placeholder='Организация / ИНН' value={customer.org} onChange={e => setCustomer({...customer, org:e.target.value})}/>
                    </div>
                </form>
                <div className='customer__footer'>
                    <div className='customer__total'>
                        <div className='customer__total-txt'>Итого</div>
                        <p>{product.total} руб.</p>
                    </div>
                    <div className='customer__btn' onClick={sendOrder}>
                    <svg width="20" height="18" className='customer__btnsvg' viewBox="0 0 20 18" fill="#C93E33" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.416748 1.50002C0.416748 1.03978 0.789844 0.666687 1.25008 0.666687H2.70842C3.0908 0.666687 3.42412 0.926935 3.51687 1.29791L3.98406 3.16669H18.3334C18.59 3.16669 18.8323 3.28491 18.9903 3.48718C19.1482 3.68944 19.2041 3.95318 19.1419 4.20213L17.0585 12.5355C16.9658 12.9064 16.6325 13.1667 16.2501 13.1667H5.41675C5.03436 13.1667 4.70104 12.9064 4.6083 12.5355L2.05777 2.33335H1.25008C0.789844 2.33335 0.416748 1.96026 0.416748 1.50002ZM4.40073 4.83335L6.0674 11.5H15.5994L17.2661 4.83335H4.40073Z" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.41675 13.1667C6.56734 13.1667 7.50008 14.0994 7.50008 15.25C7.50008 16.4006 6.56734 17.3334 5.41675 17.3334C4.26616 17.3334 3.33342 16.4006 3.33342 15.25C3.33342 14.0994 4.26616 13.1667 5.41675 13.1667ZM5.41675 14.8334C5.18663 14.8334 5.00008 15.0199 5.00008 15.25C5.00008 15.4801 5.18663 15.6667 5.41675 15.6667C5.64687 15.6667 5.83342 15.4801 5.83342 15.25C5.83342 15.0199 5.64687 14.8334 5.41675 14.8334Z"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.2501 13.1667C17.4007 13.1667 18.3334 14.0994 18.3334 15.25C18.3334 16.4006 17.4007 17.3334 16.2501 17.3334C15.0995 17.3334 14.1667 16.4006 14.1667 15.25C14.1667 14.0994 15.0995 13.1667 16.2501 13.1667ZM15.8334 15.25C15.8334 15.0199 16.02 14.8334 16.2501 14.8334C16.4802 14.8334 16.6667 15.0199 16.6667 15.25C16.6667 15.4801 16.4802 15.6667 16.2501 15.6667C16.02 15.6667 15.8334 15.4801 15.8334 15.25Z" />
                    </svg>
                        <p>Оформить заказ</p>
                    </div>
                    <div className='customer__btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="37" viewBox="0 0 32 37"  className='customer__btnsvg' fill="none">
                        <rect opacity="0.1" width="26" height="30" rx="2" />
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
        </div>
    </div>
  )
})

export default Customer