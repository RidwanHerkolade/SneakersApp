import React,{useState} from 'react'
import './Nav.css'

const Form = ({handleChange, handleSubmit, inputValue}) => {
  return (
       <form style={{}} className='form' onSubmit={handleSubmit}>
            <input placeholder='search' onChange={handleChange} value={inputValue} />
       </form>
  )
}
export default Form