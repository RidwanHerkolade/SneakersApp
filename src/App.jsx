import { useState } from 'react'
import SideNav from './Component/SideNav/SideNav'
import './App.css'

function App() {
  const [inputCategories, setInputCategories] = useState("")
  const[inputNewPrices, setInputNewPrices] = useState(null);
  const [hide, setHide] = useState(true) 
  const [colors, setColors] = useState();

  const handleChangeCat = (categories) => {
     setInputCategories( categories)
    };
    const handlePrices = (newPrices) => {
        setInputNewPrices( newPrices)
        
    };
    const handleColors = (color) => {
        setColors( color)
        
    };
   
     const handleHide = () => {
          setHide(!hide)
     }


  return (
    <div>
        <SideNav handleChangeCat={handleChangeCat} handlePrices={handlePrices} handleColors={handleColors} inputCategories={inputCategories} inputNewPrices={inputNewPrices} handleHide={handleHide} hide={hide}/>
    </div>
  )
}

export default App
