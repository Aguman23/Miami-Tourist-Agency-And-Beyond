import chevronDownWhite from '../../assets/icons/arrowdownwhite.svg';
import chevronDown from '../../assets/icons/arrow down.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';
import marsRover from '../../assets/images/F57BF28B-33AC-4A34-AC66-C4FD58EDC4CE.png';
import './Activities.scss';

import { useState } from 'react';

function Activities({act}) {
    const [olympusMons, setOlympusMons] = useState(false);
    const [comingSoon, setComingSoon] = useState(false);

    function handleActivityClick(num) {
        
        switch (num) {
            case 1:
                setOlympusMons(true);
                break;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                setComingSoon(true);
                break;
            default:
                break;
        }
    }

    function turnAllOff() {
        setOlympusMons(false);
        setComingSoon(false);
    }

    return (
        <section onClick={() => handleActivityClick(act.id)} className='activity'>
            <div key={act.key} className={olympusMons ? `${act.class} activity__selected` : act.class}>
                <p>{act.name}</p>
                <div onClick={turnAllOff} className={olympusMons ? 'add-activities__chevron-container activity__dark' : 'add-activities__chevron-container'}>
                    <img src={olympusMons ? chevronDown : chevronDownWhite}></img>
                </div>
            </div>
            <div className={olympusMons ? 'activity__dropdown' : 'off'}>
                <img className='activity__dropdown-image' src={marsRover}></img>
                <p className='activity__dropdown-writing'>Explore the highest mountain in our solar system aboard the Mars Rover Vehicle Navigator®. The hour drive adventure is like nothing you’ve experienced before.</p>
                <div className='activity__dropdown-bottom'>
                    <p>+ ñ 500.00 per person</p>
                    <div className='activity__add'>
                        <p className='activity__add-writing'>Add</p>
                        <img src={arrowRight}></img>
                    </div>
                </div>
            </div>
            <div className={comingSoon ? 'activity__dropdown' : 'off'}>
                <p className='activity__dropdown-writing'>{act.description}</p>
            </div>
        </section>
    )
}

export default Activities;