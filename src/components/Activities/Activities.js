import chevronDownWhite from '../../assets/icons/arrowdownwhite.svg';
import marsRover from '../../assets/images/F57BF28B-33AC-4A34-AC66-C4FD58EDC4CE.png';
import './Activities.scss';

import { useState } from 'react';

function Activities({act}) {
    const [olympusMons, setOlympusMons] = useState(false);

    function handleActivityClick(num) {
        
        switch (num) {
            case 1:
                setOlympusMons(true);
        }
    }

    return (
        <section onClick={() => handleActivityClick(act.id)} className='activity'>
            <div key={act.key} className={olympusMons ? `${act.class} activity__selected` : act.class}>
                <p>{act.name}</p>
                <div className='add-activities__chevron-container'>
                    <img src={chevronDownWhite}></img>
                </div>
            </div>
            <div className={olympusMons ? 'activity__dropdown' : 'off'}>
                <img className='activity__dropdown-image' src={marsRover}></img>
                <p className='activity__dropdown-writing'>Explore the highest mountain in our solar system aboard the Mars Rover Vehicle Navigator®. The hour drive adventure is like nothing you’ve experienced before.</p>
            </div>
        </section>
    )
}

export default Activities;