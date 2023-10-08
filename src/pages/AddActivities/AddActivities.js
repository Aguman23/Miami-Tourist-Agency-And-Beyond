import './AddActivities.scss';
import { useState } from 'react';

import chevronDownWhite from '../../assets/icons/arrowdownwhite.svg';

function AddActivities() {
    // const [dropMenu, setDropMenu] = useState('add-activities__activities-activity');
    const activities = [
        {
            id: 1,
            name: 'Olympus Mons',
            description: 'Explore the highest mountain in our solar system aboard the Mars Rover Vehicle Navigator®. The (X) day adventure is like nothing you’ve experienced before.',
            price: '500,000',
            class: 'add-activities__activities-activity'
        },
        {
            id: 2,
            name: 'Valles Marineris',
            description: 'COMING SOON',
            price: 'N/A',
            class: 'add-activities__activities-activity'
        },
        {
            id: 3,
            name: 'Activity 3',
            description: 'COMING SOON',
            price: 'N/A',
            class: 'add-activities__activities-activity'
        },
        {
            id: 4,
            name: 'Activity 4',
            description: 'COMING SOON',
            price: 'N/A',
            class: 'add-activities__activities-activity'
        },
        {
            id: 5,
            name: 'Activity 5',
            description: 'COMING SOON',
            price: 'N/A',
            class: 'add-activities__activities-activity'
        },
        {
            id: 6,
            name: 'Indoor Activities',
            description: 'COMING SOON',
            price: 'N/A',
            class: 'add-activities__activities-activity'
        }
    ];

    function spreadActivityMenu(num) {
        activities[0].class = 'add-activities__activities-activity test';
    }

    return (
        <main className='add-activities add-activities__background'>
            <h1 className='add-activities__heading'>Explore Mars</h1>

            <article className='add-activities__container'>
                <h2 className='add-activites__container-heading'>
                    Add Activites
                </h2>
                <div className='add-activities__activities'>
                    {
                        activities.map( act => {
                            return (
                                <div key={act.key} className={act.class}>
                                    <p>{act.name}</p>
                                    <div onClick={() => spreadActivityMenu(act.key)} className='add-activities__chevron-container'>
                                        <img src={chevronDownWhite}></img>
                                    </div>
                                </div>
                            )    
                        })
                    }
                </div>
            </article>

            <div className='add-activities__buttons'>
                <button className='add-activities__buttons-button'>
                    Previous
                </button>
                <button className='add-activities__buttons-button'>
                    Next
                </button>
            </div>
        </main>
    )
}

export default AddActivities;