import React from 'react';
import './App.css';
import Header from './Header';

function PhoneMenu() {
  return (<div>
     <header class="Header">
            <div class="Header__conteiner">
              <div class="Header__row">
                <div class="Header__colum1"><a href="../" class="Header__icon">StarDB</a></div>
                <div class="Header__colum2"><a href=" ../starships" class="Header__starshipIcon">starships</a></div>
  
              </div>
              <div class="Header__burgerPhone"><a href="../PhoneMenu" class="phoneMenu">
                <span></span>
              </a>
              </div>
  
            </div>
  
          </header>


    <div class="allContent">
      <div class="content">
        


        <div class="Menu_punkt"><a href="starships"> Starships</a></div>






      </div>
    </div>
    </div>




  );
}

export default PhoneMenu;
