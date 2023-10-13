import React, { useState } from 'react'
import Section from '../Section/Section'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import './SideNav.css'

function SideNav({handleChangeCat, handlePrices, handleColors, inputNewPrices, setInputNewPrices, inputCategories, setInputCategories, handleHide, hide}) {
     
  return (
    <div className='side__divs'>
        <div className='side__div'>
                
         {hide && <aside>
                 <div className='side__logo'>
                        <ProductionQuantityLimitsIcon/>
                  </div>
                <div className='side__input'>
                    <div className='side__inputs'>
                         <h1>category</h1>
                         <div className='inp'>
                                 <input type='radio' checked={inputCategories === "all"} onChange={() => handleChangeCat("all")} value="all" title='test'/>
                                 <label>all</label>
                         </div>
                         <div className='inp'>
                                 <input type='radio'  checked={inputCategories === "sneaker"} onChange={() => handleChangeCat("sneaker")} value="sneaker" name='sneaker' title='test' />
                                <label>sneakers</label>
                         </div>
                         <div className='inp'>
                                  <input type='radio' checked={inputCategories === "flat"} onChange={() => handleChangeCat("flat")} value="flat" name='flat' title='test'/>
                                 <label>flat</label>
                         </div>
                         <div className='inp'>
                                 <input type='radio'  checked={inputCategories === "sandal"} onChange={() => handleChangeCat("sandal")} value="sandal" name='sandal' title='test'/>
                                 <label>sandal</label>
                         </div>
                         <div className='inp'>
                                 <input type='radio'  checked={inputCategories === "heels"} onChange={() => handleChangeCat("heels")} value="heels" name='sandal' title='test'/>
                                 <label>Heel</label>
                         </div>

                    </div>
                    <div className='side__inputs'>
                         <h1>price</h1>
                         <div className='inp'>
                                 <input type='radio' checked={inputNewPrices === 50} onChange={() => handlePrices(50)} value={50} title='test1'/>
                                 <label>$0 - $50 </label>
                         </div>
                         <div className='inp'>
                                 <input type='radio' title='test1' value={100} checked={inputNewPrices === 100} onChange={() => handlePrices(100)} />
                                 <label>$50 - $100</label>
                         </div>
                         <div className='inp'>
                                  <input type='radio' value={150} title='test1' checked={inputNewPrices === 150} onChange={() => handlePrices(150)}  />
                                 <label>$100 - $150</label>
                         </div>
                         <div className='inp'>
                                 <input type='radio' title='test1' value={200} checked={inputNewPrices === 200} onChange={() => handlePrices(200)} />
                                 <label>Over $200</label>
                         </div>

                    </div>
                    <div className='side__inputs'>
                         <h1>color</h1>
                         <div className='inp'>
                                 <input type='radio' onChange={handleColors}/>
                                 <label>Black</label>
                         </div>
                         <div className='inp'>
                                 <input type='radio' onChange={handleColors}/>
                                 <label>Blue</label>
                         </div>
                         <div className='inp'>
                                  <input type='radio' onChange={handleColors}/>
                                 <label>Red</label>
                         </div>
                         <div className='inp'>
                                 <input type='radio' onChange={handleColors}/>
                                 <label>Green</label>
                         </div>
                         <div className='inp'>
                                 <input type='radio' onChange={handleColors}/>
                                 <label>White</label>
                         </div>
                    </div>
                </div>
          </aside> }
          <div className='section'> <Section setInputNewPrices={setInputNewPrices} inputNewPrices={inputNewPrices} setInputCategories={setInputCategories} inputCategories={inputCategories} handleHide={handleHide} hide={hide}/></div>
          </div>
    </div>
  )
}

export default SideNav