import React from 'react'

const ShopFooter = () => {
  return (
    <div className='shop-footer'>
        <div className='shop-footer__nums'>
            <div>Выводить по</div>
            <div className='shop-footer__num'>9</div>
            <div>15</div>
            <div>21</div>
        </div>
        <div className='shop-footer__pages'>
            <div className='shop-footer__page'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.60381 1.08754C4.83162 1.31534 4.83162 1.68469 4.60381 1.9125L2.09965 4.41669H11.1914C11.5135 4.41669 11.7747 4.67786 11.7747 5.00002C11.7747 5.32219 11.5135 5.58335 11.1914 5.58335H2.09965L4.60381 8.08754C4.83162 8.31535 4.83162 8.6847 4.60381 8.9125C4.376 9.14031 4.00666 9.14031 3.77885 8.9125L0.278885 5.4125C0.0510814 5.18469 0.0510814 4.81535 0.278885 4.58754L3.77885 1.08754C4.00666 0.859736 4.376 0.859735 4.60381 1.08754Z" fill="#B3B3B3"/>
                </svg>
            </div>
            <div className='shop-footer__page shop-footer__page-select'>1</div>
            <div className='shop-footer__page'>2</div>
            <div className='shop-footer__page'>3</div>
            <div className='shop-footer__page'>4</div>
            <div className='shop-footer__page'>5</div>
            <div className='shop-footer__page'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.39619 8.91246C7.16838 8.68466 7.16838 8.31531 7.39619 8.0875L9.90035 5.58331L0.808636 5.58331C0.486471 5.58331 0.225303 5.32215 0.225303 4.99998C0.225303 4.67781 0.486471 4.41665 0.808636 4.41665L9.90035 4.41665L7.39619 1.91246C7.16838 1.68465 7.16838 1.3153 7.39619 1.0875C7.624 0.859693 7.99334 0.859695 8.22115 1.0875L11.7211 4.5875C11.9489 4.81531 11.9489 5.18465 11.7211 5.41246L8.22115 8.91246C7.99334 9.14026 7.624 9.14027 7.39619 8.91246Z" fill="#B3B3B3"/>
                </svg>
            </div>
        </div>
        <div className='shop-footer__more'>
        Показать все товары
        </div>
    </div>
  )
}

export default ShopFooter