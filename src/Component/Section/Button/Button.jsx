import React from 'react'
import './Button.css'

const Button = ({setGetDatas, filterComs, shoeData }) => {
  return (
    <div className='btn__div'>
         <button className='btn' onClick={() => setGetDatas(shoeData)}>All Product</button>
         <button className='btn' onClick={() => filterComs("Adidas")}>Adidas</button>
         <button className='btn' onClick={() => filterComs("Nike")}>Nike</button>
         <button className='btn' onClick={() => filterComs("Jordan")}>Jordan</button>
    </div>
  )
}

export default Button