import './YourStay.scss';

import arrowRight from '../../assets/icons/arrow-right.svg';
import TopBar from '../../components/TopBar/TopBar';

import { Link } from 'react-router-dom';

function YourStay() {
    const selection = [
        {
            id: 1,
            name: 'Cabin',
            price: 'included in price',
            class: 'your-stay__card your-stay__card--cabin'
        },
        {
            id: 2,
            name: 'Suites',
            price: '+ ñ 300.00 per person',
            class: 'your-stay__card your-stay__card--suites'
        },
        {
            id: 3,
            name: 'Luxury Suites',
            price: '+ ñ 1,500.00 per person',
            class: 'your-stay__card your-stay__card--luxury-suites'
        }
    ];

    return (
        <main className='your-stay'>
            <TopBar home={false} />
            <h1 className='your-stay__heading'>Explore Mars</h1>
            <h2 className='your-stay__secondary-heading'>Your Stay on Mars</h2>
            <p className='your-stay__description'>Pick a room at the Opus Lodge the first and only Martian Hotel.</p>

            <section className='your-stay__pick-room'>
                <h2 className='your-stay__secondary-heading'>Pick a Room</h2>
                {
                    selection.map( x => {
                        return(
                            <div key={x.id} className={x.class}>
                                <h2 className='your-stay__card-heading'>{x.name}</h2>
                                <div className='your-stay__card-writing'>
                                    <p className='your-stay__card-price'>{x.price}</p>
                                    <div className='your-stay__card-select'>
                                        <p className='your-stay__card-select-writing'>Select</p>
                                        <img src={arrowRight}></img>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </section>

            <section className='your-stay__buttons'>
                <Link to='/pickdates' className='your-stay__buttons-button'>
                    Previous
                </Link>
                <Link to='/addactivities' className='your-stay__buttons-button'>
                    Next
                </Link>
            </section>
        </main>
    )
}

export default YourStay;