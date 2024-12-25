import Navbar from '../components/Navbar/Navbar';
import WorkComponent from '../components/WorkComponent/WorkComponent';
import Footer from '../components/Footer/Footer';
import TitleComponent from '../components/TitleComponent/TitleComponent';


export default function Work() {
    return (
        <div id="Work">
            <Navbar />
            <TitleComponent>
                <h1>Work</h1>
            </TitleComponent>
            <WorkComponent />
            <Footer />
        </div>
    );
}