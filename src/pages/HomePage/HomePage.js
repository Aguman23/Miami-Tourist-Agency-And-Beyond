import Experiences from '../../components/Experiences/Experiences';
import './HomePage.scss';

function HomePage() {
    return (
        <main className='main-background'>
            <section className='welcome'>
                <h1 className='welcome__heading'>
                    Welcome!
                </h1>
            </section>
            <Experiences />
        </main>
    )
}

export default HomePage;