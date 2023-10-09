import './AllSet.scss';
import { useState, useEffect } from 'react';

import checkmark from '../../assets/icons/evaCheckmarkCircleFill1.svg';
import TopBar from '../../components/TopBar/TopBar';

function AllSet() {
    const [showCompleted, setShowCompleted] = useState(false);
    const [count, setCount] = useState(3);

    useEffect(() => {
        setTimeout( () => {
            setCount(count - 1)
        }, 1000);
    }, [count, count > 0]);

    setTimeout(() => {
        setShowCompleted(true);
    }, 3000);

    return (
        <main className='all-set'>
            <TopBar home={true} />

            <section className={showCompleted ? 'off' : 'all-set__countdown'}>
                <h1>{count}</h1>
            </section>

            <section className={showCompleted ? 'all-set__completed' : 'off'}>
                <h2 className='all-set__heading'>
                    Lift Off!
                </h2>
                <div className='all-set__completed-container'>
                    <img className='all-set__checkmark' src={checkmark}></img>
                    <h2 className='all-set__description'>
                        You are all set!
                    </h2>
                    <div className='all-set__confirmation'>
                        <p className='all-set__confirmation-description'>
                            Confirmation number: Ab34d-223
                        </p>
                        <p className='all-set__confirmation-description'>
                            Check your email for more details.
                        </p>
                    </div>  
                </div>
                <button className='all-set__button'>
                    What to Bring
                </button>
            </section>
            
        </main>
    )
}

export default AllSet;