import React,{useState, useEffect} from 'react'
import { shoeData } from './ShoeData'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import './StoreData.css'
import Button from '../Section/Button/Button';

function StoreData({inputValue,inputCategories, inputNewPrices, setInputNewPrices}) {

      // GETTINFG EACH OF THE DATA USING THERE COMPANY NAME
    
      const [getDatas, setGetDatas] = useState(shoeData);
      const [rating, setRating]  = useState(0);
      const handleRatingClick = (selectedRating) => {
           setRating(selectedRating + 1);
      };
        // GETTINFG EACH OF THE DATA USING THERE COMPANY NAME
      
      const filterComs = (company) => {
              setGetDatas(
                  shoeData.filter((item) => {
                      return (
                        item.company === company
                      )
                  })
              );
      };
// HANDLING OF EACH OF THE RADIO BUTTON ONCLICKED
      const handleFilters = () => {
        let filteredDatas = shoeData;
        if (inputCategories !== "all") {
            filteredDatas = filteredDatas.filter((item) =>  item.categories === inputCategories);
        };
        if (inputNewPrices !== null) {
          filteredDatas = filteredDatas.filter((item) => item.newPrices <= inputNewPrices );
       }
          setGetDatas(filteredDatas);
      }

       useEffect(() => {
           handleFilters();
        }, [inputCategories, inputNewPrices]);
  
    
    return (
    <div>
    <Button filterComs={filterComs} setGetDatas={setGetDatas} shoeData={shoeData}/>
    <div className="data__div">
      {/* FOR DISPLAYING AND FILTERING OUT DATA FROM  */}
         {getDatas.filter((dat) => {
             return (
                 dat.name.toLocaleLowerCase().includes(inputValue)

             )
         })
         .map((dat) => {
             return (
                <div className='data__grids' key={dat.id}>
                   
                           <div className='data__img'>
                                <img src={dat.image} />
                           </div>
                           <div className='grid__Data'>
                           <div className='name'>{dat.name}</div>
                           <div>
                               <div className='starr'>
                                     {[...Array(5)].map((star) => {
                                         return (
                                             <span className="cart__inp" 
                                                 key={star}
                                                 onClick={() => handleRatingClick(star)}
                                                 style={{cursor: "pointer"}}
                                                 
                                                 >
                                                {star <= rating ? <StarIcon /> : <StarOutlineIcon style={{color:'#f8b310'}}/> }    

                                           
                                             </span>
                                        )
                                    })}
                               </div>
                                <div></div>
                           </div>
                           <div className='cost__price'>
                                 <div className='old__price'>{dat.prevPrice}</div>
                                 <div className='new__price'>{dat.newPrices}</div>
                             </div>
                             </div>
                        
                 </div>
             )
         })}
    </div>
    </div>
  )
}

export default StoreData