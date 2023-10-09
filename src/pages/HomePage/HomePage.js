import Experiences from '../../components/Experiences/Experiences';
import TopBar from '../../components/TopBar/TopBar';
import './HomePage.scss';

function HomePage() {
    return (
        <>
            <TopBar home={true} />
            <main className='main-background'>
                <section className='welcome'>
                    <h1 className='welcome__heading'>
                        Welcome!
                    </h1>
                </section>
                <Experiences />
            </main>
        </>
        
    )
}

export default HomePage;