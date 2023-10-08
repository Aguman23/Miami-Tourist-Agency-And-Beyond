import './PickDates.scss';
import calendar from '../../assets/icons/Calendar white.svg';

import { useState } from 'react';

function PickDates() {

    const [passengerCount, setPassengerCount] = useState(0);

    function handleChangePassengerNum(symb) {
        switch (symb) {
            case '-':
                setPassengerCount(passengerCount - 1);
                break;
            case '+':
                setPassengerCount(passengerCount + 1);
                break;
            default:
                break;
        }
    }

    return (
        <main className='pick-dates  pick-dates__background'>
            <h1 className='pick-dates__heading'>Explore Mars</h1>

            <section className='pick-dates__pick-dates'>
                <h2 className='pick-dates__secondary-heading'>
                    Pick Your Travel Dates
                </h2>
                <p className='pick-dates__description'>
                    Good choice! The scenic route aboard Voyager 123 is a life-changing, 7-10 month experience of luxury in space, complete with breathtaking views of the cosmos from every window.
                </p>
            </section>

            <div className='pick-dates__container extra'>
                <p className='pick-dates__description'>
                    Number of Passengers
                </p>
                <div className='pick-dates__plus-minus-container'>
                    <div onClick={() => handleChangePassengerNum('-')} className='pick-dates__plus-minus'>
                        -
                    </div>
                    <div className='pick-dates__plus-minus'>
                        {passengerCount}
                    </div>
                    <div onClick={() => handleChangePassengerNum('+')} className='pick-dates__plus-minus'>
                        +
                    </div>
                </div>
            </div>

            <div className='pick-dates__select-dates extra'>
                <h2 className='pick-dates__secondary-heading'>
                    Select Travel Date
                </h2>
                <div className='pick-dates__container'>
                    <p>

                    </p>
                    <img src={calendar}></img>
                </div>
            </div>

            <section className='pick-dates__prices'>
                <p className='pick-dates__description'>
                    Prices starting at: 
                </p>
                <div className='pick-dates__container'>
                    <p className='pick-dates__description'>
                        ñ
                    </p>
                    <p className='pick-dates__description'>
                        per person
                    </p>
                </div>
            </section>

            <div className='pick-dates__buttons extra'>
                <button className='pick-dates__buttons-button'>
                    Previous
                </button>
                <button className='pick-dates__buttons-button'>
                    Next
                </button>
            </div>

            <section className='pick-dates__amenities extra'>
                <h2 className='pick-dates__secondary-heading'>
                    Voyager 123's Amenities
                </h2>
                <div className='pick-dates__amenities-container'>
                    <div className='pick-dates__amenities-amenity'>

                    </div>
                    <div className='pick-dates__amenities-amenity'>
                        
                    </div>
                    <div className='pick-dates__amenities-amenity'>
                        
                    </div>
                    <div className='pick-dates__amenities-amenity'>
                        
                    </div>
                </div>
            </section>
        </main>
    )
}

export default PickDates;