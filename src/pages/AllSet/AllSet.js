import './AllSet.scss';
import { useState } from 'react';

import checkmark from '../../assets/icons/evaCheckmarkCircleFill1.svg';

function AllSet() {
    const [showCompleted, setShowCompleted] = useState(false);
    const [count, setCount] = useState(3);

    // while(count != 0){
    //     setTimeout( () => {
    //         setCount(count - 1)
    //     }, 1000);
    // }

    function countDown(){

    }
    return (
        <main className='all-set'>

            <section className={showCompleted ? 'off' : 'all-set__countdown'}>
                <h1>hiii</h1>
            </section>

            <section className={showCompleted ? 'all-set__completed' : 'off'}>
                <h2 className='all-set__heading'>
                    Start Packing!
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