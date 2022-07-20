import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'

const AddType = observer(() => {
    const {product} = useContext(Context)
    const [type, setType] = useState({id:'', name:'', series:''})
    const addNewType=(e) => {
        const newType ={
            ...type
        }
        product.setTypes([...product.types, newType])
        setType({id:'', name:'', series:''})
    }

  return (
    <div>
        <form className='form'>
            <input type='text' placeholder='id' value={type.id} className='form__input'
            onChange = {e => setType({...type, id: e.target.value})}
            />
            <input type='text' placeholder='Название' value={type.name} className='form__input'
            onChange = {e => setType({...type, name: e.target.value})}
            />
            <div className='btn' onClick={addNewType}>Добавить</div>
        </form>
    </div>
  )
})

export default AddType