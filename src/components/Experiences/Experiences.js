import './Experiences.scss';

function Experiences() {
    return (
        <article className='experiences-section'>
            <h2 className='experiences-section__heading'>
                Browse Different Experiences
            </h2>

            <section className='experiences-section__carousel'>
                <div className='experiences-section__carousel-item experiences-section__carousel-item--saturn'>
                    <p className='experiences-section__carousel-writing'>Moon Hop on Saturn</p>
                </div>
                <div className='experiences-section__carousel-item experiences-section__carousel-item--mars'>
                    <p className='experiences-section__carousel-writing'>Explore Mars</p>
                </div>
                <div className='experiences-section__carousel-item experiences-section__carousel-item--jupiter'>
                    <p className='experiences-section__carousel-writing'>Orbit Jupiter</p>
                </div>
                <div className='experiences-section__carousel-item experiences-section__carousel-item--kepler'>
                    <p>Coming Soon!</p>
                    <p>Visit Kepler 186f</p>
                </div>
            </section>
        </article>
    )
}

export default Experiences;
