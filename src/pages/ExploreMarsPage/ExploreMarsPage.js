import './ExploreMarsPage.scss';
import Info from "../../assets/icons/Info.svg"

function ExploreMarsPage() {
    return (
        <main className='mars-explore__main-background'>
            
            <div  className='mars-explore__title-container'>
            <h2 className="mars-explore__title">Explore Mars</h2>
            </div>
            
            <p className="mars-explore__description">Embark on a journey to the enigmatic Red Planet, where adventure beckons at your own pace. Choose the high-speed sprint for a thrilling arrival within hours, or indulge in a luxurious, leisurely cruise through space. Whichever you pick, the allure of Mars awaits.</p>
        

            <h3 className="mars-explore__subtitle">Choose your speed:</h3>


            <div className="mars-explore__route-container-1">

                <div>
                    <Info />
                </div>
                
                <h3>Direct Route</h3>
                
                <div>
                    <p>Select</p>
                </div>

            </div>

            <div className="mars-explore__route-container-2">

                <div>
                    {/* <img className="" src="" /> */}
                </div>

                <div>
                    <h3>Scenic Route</h3>
                </div>

                <div>
                    <p>Select</p>
                </div>

            </div>
        
        <h3>More about Mars</h3>
        
        <p>Views</p>

        <div>
        </div>

        <p>Diameter...........................6,791 km / 4,220 mi</p>
        <p>Day Length.................................24 hrs 37 min</p>
        <p>Force of Gravity...........................38% of Earth</p>
        <p>Distance from Earth..........225Mkm / 140Mmi</p>
        <p>Age..........................................4.5 billion years</p>

        <div>
            <p>Learn More</p>
        </div>

        </main>
    )
}

export default ExploreMarsPage;