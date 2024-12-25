import Navbar from '../components/Navbar/Navbar';
import Work from '../components/Work/Work';
import Footer from '../components/Footer/Footer';
import TitleComponent from '../components/TitleComponent/TitleComponent';


export default function WorkPage() {
    return (
        <div id="Work">
            <Navbar />
            <TitleComponent>
                <h1>Work</h1>
            </TitleComponent>
            <Work />
            <Footer />
        </div>
    );
}