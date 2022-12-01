import React from 'react'
import { useSelector } from 'react-redux'

export const Card = () => {
   
  const data = useSelector((state) => state.teacher.value)
  const userName = useSelector(((state) => state.teacher.userName))

  return (
    <>
      <h2 className='lovestory'>Lovestory <span>{data.name.split(' ')[1]}</span>&<span>{userName}</span></h2>
      <div className='card-image'>
        <img src={data.imagePath} alt="" />
      </div>
      <p className='teacher-info'>Ім'я: {data.name}</p>
      <p className='teacher-info'>Вік: {data.age}</p>
      <p className='teacher-info'>Знак Зодіаку: {data.zodiac}</p>
      <p className='teacher-info'>Опис цієї секс-машини: {data.description}</p>
      <div>
        <h3 className='love'>Ваша сумісність: <span>{data.lovePercentage}%</span> </h3>
      </div>
      <p className='teacher-info'></p>
    </>
  )
}
