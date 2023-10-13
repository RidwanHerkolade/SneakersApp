import React,{useState} from 'react'
import Form from './Form'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import './Nav.css'
import ListIcon from '@mui/icons-material/List';
import CloseIcon from '@mui/icons-material/Close';

export default function Nav({handleChange, handleSubmit, inputValue,handleHide,hide}) {
  return (
    <div className='nav__divs'>
       <div className='nav__div'>
            <div className='hhide' >{hide ? <CloseIcon style={{fontSize: "2rem", color:"black", cursor:"pointer"}} onClick={handleHide}/>:<ListIcon style={{fontSize: "2rem", color:"black" ,cursor:"pointer"}} onClick={handleHide}/>}</div>
            <Form handleChange={handleChange} handleSubmit={handleSubmit} inputValue={inputValue}/> 
           <div className='nav__icons'>
                 <FavoriteBorderIcon/>
                 <AddShoppingCartIcon/>
                 <PersonOutlineIcon/>
           </div>
       </div>
    </div>
  )
}
