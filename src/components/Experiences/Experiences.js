import './Experiences.scss';

import { useNavigate } from 'react-router';

function Experiences() {
    const navigate = useNavigate();

    function handleMarsClick() {
        navigate('/exploreMars');
    }

    return (
        <article className='experiences-section'>
            <h2 className='experiences-section__heading'>
                Browse Different Experiences
            </h2>

            <section className='experiences-section__carousel'>
                <div className='experiences-section__carousel-item experiences-section__carousel-item--saturn'>
                    <div className='experiences-section__coming-soon'>
                        <p>Coming Soon!</p>
                    </div>
                    <p className='experiences-section__carousel-writing'>Moon Hop on Saturn</p>
                </div>
                <div onClick={handleMarsClick} className='experiences-section__carousel-item experiences-section__carousel-item--mars'>
                    <p className='experiences-section__carousel-writing'>Explore Mars</p>
                </div>
                <div className='experiences-section__carousel-item experiences-section__carousel-item--jupiter'>
                    <div className='experiences-section__coming-soon'>
                        <p>Coming Soon!</p>
                    </div>
                    <p className='experiences-section__carousel-writing'>Orbit Jupiter</p>
                </div>
                <div className='experiences-section__carousel-item experiences-section__carousel-item--kepler'>
                    <div className='experiences-section__coming-soon'>
                        <p>Coming Soon!</p>
                    </div>
                    <p>Visit Kepler 186f</p>
                </div>
            </section>
        </article>
    )
}

export default Experiences;
