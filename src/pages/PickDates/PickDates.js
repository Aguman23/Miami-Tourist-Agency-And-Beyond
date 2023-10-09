import './PickDates.scss';
import calendar from '../../assets/icons/Calendar white.svg';
import ex from '../../assets/icons/EX.svg';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import TopBar from '../../components/TopBar/TopBar';

function PickDates() {
    const [selectedDates, setSelectedDates] = useState('');
    const [showCalendar, setShowCalendar] = useState(false);
    const [passengerCount, setPassengerCount] = useState(0);

    const dates = [
        {
            id: 1,
            dates: 'June 2123 - Jan 2124'
        },
        {
            id: 2, 
            dates: 'July 2123 - Feb 2124'
        },
        {
            id: 3,
            dates: 'Aug 2123 - April 2124'
        },
        {
            id: 4,
            dates: 'Sept 2123 - June 2124'
        },
        {
            id: 5,
            dates: 'Oct 2123 - Sept 2124'
        }
    ];

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

    function handleCalendarClick() {
        setShowCalendar(true);
    }

    function handleChooseDates(date) {
        setSelectedDates(date);
        setShowCalendar(false);
    }

    return (
        <main className='pick-dates  pick-dates__background'>
            <TopBar home={false} />
            <section className={showCalendar ? 'calendar' : 'off'}>
                <section className='calendar__card'>
                    <div className='calendar__card-top'>
                        <img onClick={() => setShowCalendar(false)} src={ex}></img>
                    </div>
                    <h2 className='calendar__card-heading'>Available Dates*</h2>
                    <div className='calendar__card-list'>
                        {
                            dates.map( date => {
                                return (
                                    <div onClick={() => handleChooseDates(date.dates)} key={date.id} className='calendar__card-card'>
                                        {date.dates}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <p className='calendar__card-writing'>
                        *Prices and travel times vary depending on the time of the year due to the changes in distance between Earth and Mars.
                    </p>
                </section>
            </section>

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
                        {selectedDates}
                    </p>
                    <img onClick={handleCalendarClick} src={calendar}></img>
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
                <Link to='/exploreMars' className='pick-dates__buttons-button'>
                    Previous
                </Link>
                <Link to='/yourstay' className='pick-dates__buttons-button'>
                    Next
                </Link>
            </div>
        </main>
    )
}

export default PickDates;