import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import MaxJamBox from '../components/MaxJamBox/MaxJamBox';

export default function HomePage() {
    return (
        <div id="Home">
            <Navbar />
            <MaxJamBox />
            {/* <Footer /> */}
        </div>
    );
}