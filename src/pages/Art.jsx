
// Components
import Navbar from '../components/Navbar/Navbar';
import TitleComponent from '../components/TitleComponent/TitleComponent';
import Footer from '../components/Footer/Footer';

export default function Art() {
    return (
        <div id="Art">
            <Navbar />
            <TitleComponent >
                   <h1>Art</h1>
            </TitleComponent>
            <Footer />
        </div>
    );
}