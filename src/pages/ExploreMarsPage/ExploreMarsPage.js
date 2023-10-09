import './ExploreMarsPage.scss';
import info from "../../assets/icons/Info white.svg"
import rightarrow from "../../assets/icons/Sec button arrow (2).svg"
import marsimage from "../../assets/images/moons of mars nasa photo.webp"
import DirectRoute from '../../components/DirectRoute/DirectRoute';
import ScenicRoute from '../../components/ScenicRoute/ScenicRoute';
import React, { useState } from 'react';


function ExploreMarsPage() {
    const [directRoute, setDirectRoute] = useState(false);
    const [scenicRoute, setScenicRoute] = useState(false);
    return (
        <main className='mars-explore__main-background'>
            <DirectRoute 
                        open={directRoute} 
                        onClose={() => setDirectRoute(false)} />
            <ScenicRoute 
                        open={scenicRoute} 
                        onClose={() => setScenicRoute(false)} />
            <div  className='mars-explore__title-container'>
                <h2 className="mars-explore__title">Explore Mars</h2>
            </div>
            
            <p className="mars-explore__description">Embark on a journey to the enigmatic Red Planet, where adventure beckons at your own pace. Choose the high-speed sprint for a thrilling arrival within hours, or indulge in a luxurious, leisurely cruise through space. Whichever you pick, the allure of Mars awaits.</p>
        

            <h3 className="mars-explore__subtitle-1">Choose your speed:</h3>


            <div className="mars-explore__route-container-1">

                <div className="format-container">
                
                    <div className="format-left">
                        <h3 className="mars-explore__subtitle-2">Direct Route</h3>
                    </div>

                    <div  className="format-right">
                        <img className="mars-explore__info" onClick={() => setDirectRoute(true)} src={info} alt="info"/>
                    </div>

                </div>

                <div className="format-bottom-right">
                    <button className="mars-explore__select-button" >Select</button>
                    <img src={rightarrow} alt="right arrow"/>
                </div>

            </div>

            <div className="mars-explore__route-container-2">

                <div className="format-container">

                    <div className="format-left">
                        <h3 className="mars-explore__subtitle-2">Scenic Route</h3>
                    </div>

                    <div className="format-right">
                        <img src={info}  onClick={() => setScenicRoute(true)} alt="info"/>
                        
                    </div>

                </div>

                <div className="format-bottom-right">
                    <button className="mars-explore__select-button">Select</button>
                    <img src={rightarrow} alt="right arrow"/>
                </div>

            </div>
            
        
        <div className="mars-explore__buttons-container">
            <div>
                <button className="mars-explore__red-buttons">Previous</button>
            </div>
            <div>
                <button className="mars-explore__red-buttons">Next</button>
            </div>
        </div>
        <h3 className="mars-explore__more">More about Mars</h3>
        
        <p className="mars-explore__description-2">Views</p>

        <img className="mars-explore__moon" src={marsimage} alt="mars"/>

        <p className="mars-explore__description-2">Martian Facts</p>

        <div className="format-facts">
        <div><p className="mars-explore__description-3">Diameter</p></div>
        <div><p className="mars-explore__description-3">6,791 km / 4,220 mi</p></div>
        </div>
        
        <div className="format-facts">
        <div><p className="mars-explore__description-3">Day Length</p></div>
        <div><p className="mars-explore__description-3">24 hrs 37 min</p></div>
        </div>
        
        <div className="format-facts">
        <p className="mars-explore__description-3">Force of Gravity</p>
        <p className="mars-explore__description-3">38% of Earth</p>
        </div>
        
        <div className="format-facts">
        <p className="mars-explore__description-3">Distance from Earth</p>
        <p className="mars-explore__description-3">225Mkm / 140Mmi</p>
        </div>

        <div className="format-facts">
        <p className="mars-explore__description-3">Age</p>
        <p className="mars-explore__description-3">4.5 billion years</p>
        </div>

        <div className="format__learn">
        <a href="https://science.nasa.gov/mars/facts/" target="_blank" rel="noopener noreferrer"><button className="mars-explore__select-button">LearnMore </button></a>
                    <img src={rightarrow} alt="right arrow"/>
        </div>

        </main>
    )
}

export default ExploreMarsPage;