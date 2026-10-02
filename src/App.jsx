import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import TechTeam from "./TechTeam";
import Projects from "./Projects";
import ScrollToTop from "./ScrollToTop";
import Community from "./Community";
import Events from "./Events";
import EventReport from "./pages/EventReport";
import Footer from "./Footer";

function App() {
    return (
        <>
            <ScrollToTop />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route
                    path="/tech-team"
                    element={<TechTeam />}
                />

                <Route
                    path="/projects"
                    element={<Projects />}
                />

                <Route
                    path="/community"
                    element={<Community />}
                />

                <Route
                    path="/events"
                    element={<Events />}
                />

                <Route
                    path="/events/:slug"
                    element={<EventReport />}
                />
            </Routes>

            {/* CONSTANT FOOTER */}
            <Footer />
        </>
    );
}

export default App;