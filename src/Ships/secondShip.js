import Ship2 from '../../src/img/2.png';
import '../App.css';
import React from 'react';
import Header from '../Header';

function SecondStarship() {
    return (



        <div>
            <Header/>
            <div class="containerShip">
                <div class="shipTitle">Millennium Falcon</div>
                <div class="ship_row">
                    <div class="ship_colum" id="ship_colum0"> <img src={Ship2} alt="&"></img></div>
                    <div class="ship_colum" id="ship_colum1">
                        <div class="ship_columRow">
                            <div class="ship_characters">
                                <div class="ship_character1">Model:</div>
                                <div class="ship_characterSet">Underfindet</div>
                            </div>
                            <div class="ship_characters">
                                <div class="ship_character1">Name:</div>
                                <div class="ship_characterSet">Death Star</div>
                            </div>
                            <div class="ship_characters">
                                <div class="ship_character1">Length:</div>
                                <div class="ship_characterSet">50</div>
                            </div>
                            <div class="ship_characters">
                                <div class="ship_character1">Cost:</div>
                                <div class="ship_characterSet">$950.000.000.000</div>
                        </div>
                            <div class="ship_characters">
                                <div class="ship_character1">Created:</div>
                                <div class="ship_characterSet">11.11.2011</div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div class="shipText">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim</div>





        </div>





    );
}

export default SecondStarship;
