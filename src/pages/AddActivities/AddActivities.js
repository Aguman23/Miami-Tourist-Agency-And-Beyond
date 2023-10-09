import './AddActivities.scss';
import { Link } from 'react-router-dom';

import TopBar from '../../components/TopBar/TopBar';
import Activities from '../../components/Activities/Activities';

function AddActivities() {
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
            name: 'Rabe Crater Sand Dunes',
            description: 'COMING SOON',
            price: 'N/A',
            class: 'add-activities__activities-activity'
        },
        {
            id: 4,
            name: 'Curiosity Rover Site',
            description: 'COMING SOON',
            price: 'N/A',
            class: 'add-activities__activities-activity'
        },
        {
            id: 5,
            name: 'MRVN® Ride',
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
            <TopBar home={false} />
            <h1 className='add-activities__heading'>Explore Mars</h1>

            <article className='add-activities__container'>
                <h2 className='add-activities__container-heading'>
                    Add Activites
                </h2>
                <div className='add-activities__activities'>
                    {
                        activities.map( act => {
                            return (
                                <Activities act={act} />
                            )   
                        })
                    }
                </div>
            </article>

            <div className='add-activities__buttons'>
                <button className='add-activities__buttons-button'>
                    Previous
                </button>
                <Link to='/travelerdetails' className='add-activities__buttons-button'>
                    Next
                </Link>
            </div>
        </main>
    )
}

export default AddActivities;