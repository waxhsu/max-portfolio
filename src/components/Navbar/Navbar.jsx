import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from '../DarkMode/DarkMode';

export default function Navbar() {
    const location = useLocation();

    return (
        <section id="navigation-bar">
            <div className="nav-bar">
                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
                    Max
                </Link>
                <Link className={`nav-link ${location.pathname === '/work' ? 'active' : ''}`} to="/work">
                    Work
                </Link>
                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">
                    About
                </Link>
                <Link className={`nav-link ${location.pathname === '/art' ? 'active' : ''}`} to="/art">
                    Art
                </Link>
                <div className="nav-link goright"><DarkModeToggle /></div>
                
            </div>
        </section>
    );
}
