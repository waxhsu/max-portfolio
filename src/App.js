import "./App.css";

// Router and Pages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Work from "./pages/WorkPage";
import About from "./pages/AboutPage";
import Art from "./pages/ArtPage";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/art" element={<Art />} />
            </Routes>
        </Router>
    );
}

export default App;
