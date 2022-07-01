import Ship1 from '../src/img/1.png';
import Ship2 from '../src/img/2.png';
import Ship3 from '../src/img/3.png';
import './App.css';
import React from 'react';
import Header from './Header';

function Starships() {
    return (


        

            <div class="content__Container">
                <Header/>
                <div class="contentTitle">Starships</div>
                <div class="contentSort">
                    <div class="contentSort__sort"><p>Sort by:</p> </div>
                    <div class="contentSort__chooser">
                        <form action="" method="post">
                            <select name="SortBy" id="">
                                <option value="Name">Name</option>
                                <option value="Length">Length</option>
                                <option value="Cost">Cost</option>
                                <option value="Created">Created</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div class="content__row">
                <a href='/starships/1'>  <div class="contetn__colum">
                        <div class="content_columRow">
                            <div class="content_columImg"> <img src={Ship1} alt="noimg"></img></div>
                            <div class="content_columCost">
                                <div class="content_character">Cost:</div>
                                <div class="content_set">$2.000.000.000</div>
                            </div>
                            <div class="content_columName">
                                <div class="content_character">Name:</div>
                                <div class="content_set">Millennium Falcon</div>
                            </div>

                        </div>
                    </div></a>
                    <a href='/starships/2'>  <div class="contetn__colum">
                        <div class="content_columRow">
                            <div class="content_columImg"><img src={Ship2} alt="noimg"></img> </div>
                            <div class="content_columCost">
                                <div class="content_character">Cost:</div>
                                <div class="content_set">$950.000.000.000</div>
                            </div>
                            <div class="content_columName">
                                <div class="content_character">Name:</div>
                                <div class="content_set">Death Star</div>
                            </div>

                        </div>
                    </div></a>
                   <a href='/starships/3'>  <div class="contetn__colum">
                        <div class="content_columRow">
                            <div class="content_columImg"> <img src={Ship3} alt="noimg"></img></div>
                            <div class="content_columCost">
                                <div class="content_character">Cost:</div>
                                <div class="content_set">$30.000.000.000</div>
                            </div>
                            <div class="content_columName">
                                <div class="content_character">Name:</div>
                                <div class="content_set">Millennium Falcon</div>
                            </div>

                        </div>
                    </div></a>
                   <a href='/starships/4'>  <div class="contetn__colum">
                        <div class="content_columRow">
                            <div class="content_columImg"> <img src={Ship2} alt="noimg"></img></div>
                            <div class="content_columCost">
                                <div class="content_character">Cost:</div>
                                <div class="content_set">$950.000.000.000</div>
                            </div>
                            <div class="content_columName">
                                <div class="content_character">Name:</div>
                                <div class="content_set">Death Star</div>
                            </div>

                        </div>
                    </div></a>
                   <a href='/starships/5'>  <div class="contetn__colum">
                        <div class="content_columRow">
                            <div class="content_columImg"><img src={Ship1} alt="noimg"></img> </div>
                            <div class="content_columCost">
                                <div class="content_character">Cost:</div>
                                <div class="content_set">$2.000.000.000</div>
                            </div>
                            <div class="content_columName">
                                <div class="content_character">Name:</div>
                                <div class="content_set">Millennium Falcon</div>
                            </div>

                        </div>
                    </div></a>
                   <a href='/starships/6'>  <div class="contetn__colum">
                        <div class="content_columRow">
                            <div class="content_columImg"><img src={Ship3} alt="noimg"></img></div>
                            <div class="content_columCost">
                                <div class="content_character">Cost:</div>
                                <div class="content_set">$30.000.000.000</div>
                            </div>
                            <div class="content_columName">
                                <div class="content_character">Name:</div>
                                <div class="content_set">Millennium Falcon</div>
                            </div>

                        </div>
                    </div></a>
                    <a href='/starships/7'> <div class="contetn__colum">
                        <div class="content_columRow">
                            <div class="content_columImg"> <img src={Ship1} alt="noimg"></img></div>
                            <div class="content_columCost">
                                <div class="content_character">Cost:</div>
                                <div class="content_set">$2.000.000.000</div>
                            </div>
                            <div class="content_columName">
                                <div class="content_character">Name:</div>
                                <div class="content_set">Millennium Falcon</div>
                            </div>

                        </div>
                    </div></a>
                    <a href='/starships/8'><div class="contetn__colum">
                        <div class="content_columRow">
                            <div class="content_columImg"> <img src={Ship2} alt="noimg"></img></div>
                            <div class="content_columCost">
                                <div class="content_character">Cost:</div>
                                <div class="content_set">$950.000.000.000</div>
                            </div>
                            <div class="content_columName">
                                <div class="content_character">Name:</div>
                                <div class="content_set">Death Star</div>
                            </div>

                        </div>
                    </div></a>

                </div>
            </div>





        


    );
}

export default Starships;
