import React from 'react'
import { observer } from 'mobx-react-lite'

const Categories = observer(() => {
  return (
    <ul>
        <div className='shop__header drop-list filter shop__item'>
            <div className='filter__header'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 18 18" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.666748 2.33335C0.666748 1.41288 1.41294 0.666687 2.33342 0.666687H6.50008C7.42056 0.666687 8.16675 1.41288 8.16675 2.33335V6.50002C8.16675 7.4205 7.42056 8.16669 6.50008 8.16669H2.33342C1.41294 8.16669 0.666748 7.4205 0.666748 6.50002V2.33335ZM6.50008 2.33335H2.33342V6.50002H6.50008V2.33335ZM9.83342 2.33335C9.83342 1.41288 10.5796 0.666687 11.5001 0.666687H15.6668C16.5872 0.666687 17.3334 1.41288 17.3334 2.33335V6.50002C17.3334 7.4205 16.5872 8.16669 15.6668 8.16669H11.5001C10.5796 8.16669 9.83342 7.4205 9.83342 6.50002V2.33335ZM15.6668 2.33335H11.5001V6.50002H15.6668V2.33335ZM0.666748 11.5C0.666748 10.5795 1.41294 9.83335 2.33342 9.83335H6.50008C7.42056 9.83335 8.16675 10.5795 8.16675 11.5V15.6667C8.16675 16.5872 7.42056 17.3334 6.50008 17.3334H2.33342C1.41294 17.3334 0.666748 16.5872 0.666748 15.6667V11.5ZM6.50008 11.5H2.33342V15.6667H6.50008V11.5ZM9.83342 11.5C9.83342 10.5795 10.5796 9.83335 11.5001 9.83335H15.6668C16.5872 9.83335 17.3334 10.5795 17.3334 11.5V15.6667C17.3334 16.5872 16.5872 17.3334 15.6668 17.3334H11.5001C10.5796 17.3334 9.83342 16.5872 9.83342 15.6667V11.5ZM15.6668 11.5H11.5001V15.6667H15.6668V11.5Z" fill='#C93E33'/>
                </svg>
                <p>Категории</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                <path d="M7.5 4.75L4 1.25L0.5 4.75" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <div className='filter filter__inner shop__item'>
            <div className='filter__items'>
                
                    <li className = 'filter__item'>
                        <p className='filter__series'>Серия 5.904-1 выпуск 1:</p>
                        <p>Детали крепления воздуховодов <strong className='filter__num'>95</strong></p>
                    </li>

                    <li className = 'filter__item'>
                        <p className='filter__series'>Серия 4.903-10 Выпуск 4,5,6:</p>
                        <p>Изделия и детали трубопроводов для тепловых сетей <strong className='filter__num'>15</strong></p>
                    </li>

                    <li className = 'filter__item'>
                        <p className='filter__series'>Серия 4.900-9 Выпуск 1: </p>
                        <p>Узлы и детали трубопроводов из пластмассовых труб для систем водоснабжения и канализации <strong className='filter__num'>247</strong></p>
                    </li>

                    <li className = 'filter__item'>
                        <p className='filter__series'>Серия 3.900-9: </p>
                        <p>Опорные конструкции и средства крепления трубопроводов <strong className='filter__num'>2</strong></p>
                    </li>

                    <li className = 'filter__item'>
                        <p className='filter__series'>Л8-508.000 - Л8-524.000: </p>
                        <p>Опоры и подвески трубопроводов Дн &lt; 89мм <strong className='filter__num'>15</strong></p>
                    </li>

                    <li className = 'filter__item'>
                        <p className='filter__series'>Л8-138.000 - Л8-200.000: :</p>
                        <p>Опоры и подвески станционных трубопроводов <strong className='filter__num'>247</strong></p>
                    </li>
            
                
            </div>
            <div className='filter__more'>
                <p> Показать все</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="4" viewBox="0 0 6 4" fill="none">
                <path d="M0.5 0.75L3 3.25L5.5 0.75" stroke="#C93E33" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    </ul>
  )
})

export default Categories