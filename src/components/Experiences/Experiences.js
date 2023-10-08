import './Experiences.scss';

function Experiences() {
    return (
        <article className='experiences-section'>
            <h2 className='experiences-section__heading'>
                Browse Different Experiences
            </h2>

            <section className='experiences-section__carousel'>
                <div className='experiences-section__carousel-item'>
                    <p>Moon Hop on Saturn</p>
                </div>
                <div className='experiences-section__carousel-item'>
                    <p>Explore Mars</p>
                </div>
                <div className='experiences-section__carousel-item'>
                    <p>Orbit Jupiter</p>
                </div>
                <div className='experiences-section__carousel-item'>
                    <p>Coming Soon!</p>
                    <p>Visit Kepler 186f</p>
                </div>
            </section>
        </article>
    )
}

export default Experiences;
