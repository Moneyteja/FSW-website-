import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer className="site-footer">

            <div className="footer-inner">

                {/* LEFT */}
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        FSW<span>.</span>
                    </Link>

                    <p>
                        Free Software Wing · GRIET
                    </p>

                    <p className="footer-description">
                        Building, learning and contributing
                        through open-source technology.
                    </p>
                </div>


                {/* NAVIGATION */}
                <div className="footer-column">
                    <span className="footer-label">
                        EXPLORE
                    </span>

                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/community">Community</Link>
                </div>


                {/* CONNECT */}
                <div className="footer-column">
                    <span className="footer-label">
                        CONNECT
                    </span>

                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Instagram ↗
                    </a>

                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn ↗
                    </a>

                    <a href="mailto:fsw@griet.ac.in">
                        Email ↗
                    </a>
                </div>

            </div>


            {/* BOTTOM */}
            <div className="footer-bottom">

                <span>
                    © {new Date().getFullYear()} FSW · GRIET
                </span>

                <span>
                    Open Source · Open Community
                </span>

            </div>

        </footer>
    );
}

export default Footer;