import TopBar from '../../components/TopBar/TopBar';
import './ReviewDetails.scss';
import { Link } from 'react-router-dom';

function ReviewDetails() {
    return (
        <main className='review-details'>
            <TopBar home={false} />
            <h1 className='review-details__heading'>Explore Mars</h1>
            <section className='review-details__main'>
                <h2 className='review-details__main-title'>Review Your Trip Details</h2>
                <section className='review-details__review'>
                    <div className='review-details__writing'>
                        <p className='review-details__writing--bold'>Experience:</p>
                        <p>Explore Mars</p>

                        <p className='review-details__writing--bold'>Speed:</p>
                        <p>Scenic Route</p>

                        <p className='review-details__writing--bold'>Dates:</p>
                        <p>June 6, 2123 - Feb 19, 2124</p>

                        <p className='review-details__writing--bold'>Passengers:</p>
                        <div className='review-details__together'>
                            <p>2 Adults</p>
                            <p>ñ FILL IN (x2)</p>
                        </div>

                        <p className='review-details__writing--bold'>Accommodations:</p>
                        <div className='review-details__together'>
                            <p>Suite</p>
                            <p>ñ 300.00 (x2)</p>
                        </div>

                        <p className='review-details__writing--bold'>Activities:</p>
                        <div className='review-details__together'>
                            <p>Olympus Mons</p>
                            <p>ñ 500.00 (x2)</p>
                        </div>
                    </div>

                    <div className='review-details__together super-extra'>
                        <p className='review-details__writing--bold'>Total:</p>
                        <p>TOTAL HERE</p>
                    </div>
                </section>

                <div className='review-details__buttons'>
                    <button className='review-details__buttons-button'>
                        Previous
                    </button>
                    <Link to='/allset' className='review-details__buttons-button'>
                        Confirm
                    </Link>
                </div>
            </section>

        </main>
    )
}

export default ReviewDetails;