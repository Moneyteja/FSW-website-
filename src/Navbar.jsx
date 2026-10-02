import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import fswLogo from "./assets/fsw-logo.png";

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const goToSection = (section) => {
        if (location.pathname === "/") {
            const element = document.getElementById(section);

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        } else {
            navigate(`/#${section}`);
        }
    };

    return (
        <header className="navbar">

            <div className="navbar-inner">

                {/* FSW LOGO + NAME */}
                <Link to="/" className="logo">

                    <img
                        src={fswLogo}
                        alt="FSW Logo"
                    />

                    <span>fsw</span>

                </Link>


                {/* NAVIGATION */}
                <nav className="nav-links">

                    <Link to="/">
                        Home
                    </Link>

                    <button
                        type="button"
                        onClick={() => goToSection("about")}
                    >
                        About
                    </button>

                    <Link to="/events">
                        Events
                    </Link>

                    <Link to="/projects">
                        Projects
                    </Link>

                    <Link to="/community">
                        Community
                    </Link>

                </nav>

            </div>

        </header>
    );
}

export default Navbar;