import React from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import './App.css';
import Gate from './Gate';
import Starships from './starships';
import FirstStarship from './Ships/oneShip';
import Header from './Header';
import PhoneMenu from './PhoneMenu';
import SecondStarship from './Ships/secondShip';
import ThirdStarship from './Ships/thirdShip';
function Home() {
  return (<BrowserRouter>
   


    <div class="allContent">
      <div class="content">
    
        
        <Routes>
          <Route path="" element={<Gate/>}/>
          <Route path ="/starships" element={<Starships/>}/>
          <Route path ="/starships/3" element={<FirstStarship/>}/>
          <Route path ="/starships/6" element={<FirstStarship/>}/>
          <Route path ="/starships/2" element={<SecondStarship/>}/>
          <Route path ="/starships/4" element={<SecondStarship/>}/>
          <Route path ="/starships/8" element={<SecondStarship/>}/>
          <Route path ="/starships/1" element={<ThirdStarship/>}/>
          <Route path ="/starships/5" element={<ThirdStarship/>}/>
          <Route path ="/starships/7" element={<ThirdStarship/>}/>
          <Route path ="/PhoneMenu" element={<PhoneMenu/>}/>
        </Routes>
       
        



        
      </div>
    </div>
    
  
    
    </BrowserRouter>

  );
}

export default  Home;
