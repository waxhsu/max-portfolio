
// Components
import Navbar from '../components/Navbar/Navbar';
import TitleComponent from '../components/TitleComponent/TitleComponent';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';

export default function AboutPage() {
    return (
        <div id="About">
            <Navbar />
            <TitleComponent >
                <h1>About</h1>
            </TitleComponent>
            <About />
            <Footer />
        </div>
    );
}