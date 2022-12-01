import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { findPair } from '../Features/teacher'

const Input = () => {

   const dispatch = useDispatch()

   const inputName = useRef(null)

   const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(findPair(inputName.current.value))
      console.log(inputName.current.value);
   }

   return (
    <div className='start-block'>
      <p></p>
      <form onSubmit={handleSubmit}>
         <p>Ваше ім'я</p>
         <div>
            <input type="text" ref={inputName} className='input-name'/>
         </div>
         <p>Ваша дата народження</p>
         <div>
            <input type="text" className='input-birth'/>
         </div>
         <p>Вкажіть вашу стать :3</p>
         <div>
            <select className="sex-select">
               <option value="hermafrodit">Гермафродит</option>
               <option value="male">Чоловік</option>
               <option value="female">Баба</option>
            </select>
         </div>
         <div>
            <button className='find-button'>Знайти пару!</button>
         </div>
      </form>
    </div>
   )
}

export default Input