import Ship3 from '../../src/img/3.png';
import '../App.css';
import React from 'react';
import Header from '../Header';

function FirstStarship() {
    return (



        <div>
            <Header/>
            <div class="containerShip">
                <div class="shipTitle">Millennium Falcon</div>
                <div class="ship_row">
                    <div class="ship_colum" id="ship_colum0"> <img src={Ship3} alt="&"></img></div>
                    <div class="ship_colum" id="ship_colum1">
                        <div class="ship_columRow">
                            <div class="ship_characters">
                                <div class="ship_character1">Model:</div>
                                <div class="ship_characterSet">YT-1300 light freighter</div>
                            </div>
                            <div class="ship_characters">
                                <div class="ship_character1">Name:</div>
                                <div class="ship_characterSet">Millennium Falcon</div>
                            </div>
                            <div class="ship_characters">
                                <div class="ship_character1">Length:</div>
                                <div class="ship_characterSet">34.37</div>
                            </div>
                            <div class="ship_characters">
                                <div class="ship_character1">Cost:</div>
                                <div class="ship_characterSet">$30.000.000.000</div>
                            </div>
                            <div class="ship_characters">
                                <div class="ship_character1">Created:</div>
                                <div class="ship_characterSet">10.12.2014</div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div class="shipText">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim</div>





        </div>





    );
}

export default FirstStarship;
