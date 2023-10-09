import './TravelerDetails.scss';
import { Link } from 'react-router-dom';

import editPen from '../../assets/icons/editpen.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';
import TopBar from '../../components/TopBar/TopBar';

function TravelerDetails() {
    const passengers = [
        {
            id: 1,
            name: 'Frank Farmer',
            age: 37,
            weight: 195,
            lugWeight: 52,
            disclosures: true,
            training: true,
            phoneNum: '(323) 123 - 4567',
            email: 'bodyguard92@gmail.com',
            address: '123 Main Road Los Angeles, California, USA'
        },
        {
            id: 2,
            name: 'Rachel Marron',
            age: 29,
            weight: 120,
            lugWeight: 84,
            disclosures: true,
            training: true,
            phoneNum: '(323) 675 - 1234',
            email: 'iwaly@gmail.com',
            address: '123 Main Road Los Angeles, California, USA'
        }
    ]
    return (
        <>
            <TopBar home={false} />
            <main className='traveler-details'>
                <h1 className='traveler-details__heading'>
                    Explore Mars
                </h1>
                <article className='traveler-details__main'>
                    <h2 className='traveler-details__main-heading'>
                        Traveler's Details
                    </h2>
                    <div className='traveler-details__cards'>
                        {
                            passengers.map( person => {
                                return (
                                    <div key={person.id} className='traveler-details__cards-card'>
                                        <div className='traveler-details__cards-card-top'>
                                            <p>Passenger {person.id}:</p>
                                            <img src={editPen}></img>
                                        </div>
                                        <div className='traveler-details__cards-card-writing'>
                                            <p>
                                                <span>Name: </span>
                                                {person.name}
                                            </p>
                                            <p>
                                                <span>Age: </span>
                                                {person.age} Earth years
                                            </p>
                                            <p>
                                                <span>Weight: </span>
                                                {person.weight} Newtons
                                            </p>
                                            <p>
                                                <span>Luggage Weight: </span>
                                                {person.lugWeight} Newtons
                                            </p>
                                            <p>
                                                <span>Mandatory disclosures: </span>
                                                Completed
                                            </p>
                                            <p>
                                                <span>Mandatory training: </span>
                                                Completed
                                            </p>
                                            <p>
                                                <span>Phone number: </span>
                                                {person.phoneNum}
                                            </p>
                                            <p>
                                                <span>Email: </span>
                                                {person.email}
                                            </p>
                                            <p>
                                                <span>Address: </span>
                                                {person.address}
                                            </p>
                                        </div>
                                        <div className='traveler-details__cards-card-confirm'>
                                            <p className='traveler-details__cards-card-confirm-writing'>
                                                Confirm
                                            </p>
                                            <img src={arrowRight}></img>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </article>

                <section className='traveler-details__wallet'>
                    <h2 className='traveler-details__main-heading'>
                        Newton Wallet Details
                    </h2>
                    <div className='traveler-details__wallet-section'>
                        <div className='traveler-details__wallet-section-number'>
                            <p>S$tghrjwññcef. shisehihcsjsk hcieohfsiohf</p>
                            <img src={editPen}></img>
                        </div>
                        <div className='traveler-details__wallet-confirm'>
                            <p className='traveler-details__wallet-confirm-writing'>
                                Confirm
                            </p>
                            <img src={arrowRight}></img>                
                        </div>
                    </div>
                </section>

                <section className='traveler-details__buttons'>
                    <button className='traveler-details__buttons-button'>
                        Previous
                    </button>
                    <Link to='/reviewdetails' className='traveler-details__buttons-button'>
                        Next
                    </Link>
                </section>

            </main>
        </>
        
    )
}

export default TravelerDetails;