import React,{useState} from 'react'
import Nav from '../Nav/Nav'
import './Section.css'
import StoreData from '../Data/StoreData'

function Section({setInputCategories,inputCategories, inputNewPrices, setInputNewPrices, handleHide, hide}) {

  // PICKING EACH OF THE CONTENT FROM AN INPUT VALUE 
  const [inputValue, setInputValue] = useState("");
  function handleChange(event){
       const {value} = event.target
       setInputValue(value)
  };
  function handleSubmit(event) {
       event.preventDefault()
  };
  return (
    <div className='section__divs'>
         <Nav handleChange={handleChange} handleSubmit={handleSubmit} inputValue={inputValue} handleHide={handleHide} hide={hide}/>
         <div className='h2'> 
              <h2>Recommended</h2>
              <StoreData inputValue={inputValue}  setInputNewPrices={setInputNewPrices} inputNewPrices={inputNewPrices} setInputCategories={setInputCategories} inputCategories={inputCategories} />
         </div>
         
    </div>
  )
}

export default Section