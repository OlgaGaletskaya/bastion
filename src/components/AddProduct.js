import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'

const AddProduct = observer(() => {
    const {product} = useContext(Context)
    const [products, setProducts] = useState({id: '', gost:'', type: '', name: '', price: '', img:"./img/product.png"})
    const addNewProducts=(e) => {
        const newProducts ={
            ...products
        }
        product.setProduct([...product.product, newProducts])
        setProducts({id: '', gost:'', type: '', name: '', price: '', img:"./img/product.png"})
    }

  return (
    <div>
        <form className='form'>
            <input type='text' placeholder='id' value={products.id} className='form__input'
            onChange = {e => setProducts({...products, id: e.target.value})}
            />
            <select name="type"  className='form__input'
            value={products.type}
            onChange = {e => setProducts({...products, type: e.target.value})}
            >
                <option value='' disabled defaultValue >Тип продукта</option>
                {product.types.map(type =>
                    <option value={type.id}  key={type.id}>{type.name}</option>
                    )}
            </select>                
            <input type='text' placeholder='Название' value={products.name} className='form__input'
            onChange = {e => setProducts({...products, name: e.target.value})}
            />
            <input type='text' placeholder='цена' value={products.price} className='form__input'
            onChange = {e => setProducts({...products, price: e.target.value})}
            />
            <input type='file' />
            <select name="type"  className='form__input'
            value={products.gost}
            onChange = {e => setProducts({...products, gost: e.target.value})}
            >
                <option value='' disabled defaultValue >ГОСТ</option>
                {product.gost.map(gost =>
                    <option value={gost.name} key={gost.id}>{gost.name}</option>
                    )}
            </select>
            <div className='btn' onClick={addNewProducts}>Добавить</div>
        </form>
    </div>
  )
})

export default AddProduct