import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./About.css";

function About() {
    return (
        <div className="about-page">
             <Navbar />

            {/* HERO */}
            <section className="about-page-hero">

                <div className="about-page-number">
                    FSW / ABOUT
                </div>

                <h1>
                    Learn.
                    <br />
                    <em>Build.</em>
                    <br />
                    Contribute.
                </h1>

                <p>
                    Free Software Wing is a student-driven
                    community at GRIET that brings together
                    people who believe in learning, building
                    and sharing technology.
                </p>

            </section>


            {/* WHO WE ARE */}
            <section className="about-content-section">

                <div className="about-section-label">
                    01 / WHO WE ARE
                </div>

                <div className="about-intro-grid">

                    <h2>
                        Technology is
                        <br />
                        better when
                        <br />
                        <em>shared.</em>
                    </h2>

                    <div className="about-intro-text">

                        <p>
                            The Free Software Wing is a student
                            community at GRIET focused on free
                            software, open technologies and
                            collaborative learning.
                        </p>

                        <p>
                            We create an environment where
                            students can explore technology,
                            work on real projects and learn
                            alongside each other.
                        </p>

                    </div>

                </div>

            </section>


            {/* WHAT WE BELIEVE */}
            <section className="about-content-section">

                <div className="about-section-label">
                    02 / WHAT WE BELIEVE
                </div>

                <div className="about-beliefs-grid">

                    <article className="about-belief-card">

                        <span>01</span>

                        <h3>
                            Learn
                        </h3>

                        <p>
                            Learn through workshops, sessions,
                            projects and by exploring technologies
                            beyond the classroom.
                        </p>

                    </article>


                    <article className="about-belief-card">

                        <span>02</span>

                        <h3>
                            Build
                        </h3>

                        <p>
                            Turn ideas into projects, tools and
                            experiences that solve real problems.
                        </p>

                    </article>


                    <article className="about-belief-card">

                        <span>03</span>

                        <h3>
                            Share
                        </h3>

                        <p>
                            Share knowledge, contribute to open
                            source and help others grow.
                        </p>

                    </article>


                    <article className="about-belief-card">

                        <span>04</span>

                        <h3>
                            Collaborate
                        </h3>

                        <p>
                            Work with people from different
                            backgrounds and learn by building
                            together.
                        </p>

                    </article>

                </div>

            </section>


            {/* FSW AT GRIET */}
            <section className="about-griet-section">

                <div className="about-section-label">
                    03 / FSW · GRIET
                </div>

                <div className="about-griet-content">

                    <h2>
                        A community
                        <br />
                        built around
                        <br />
                        <em>open technology.</em>
                    </h2>

                    <p>
                        From technical events and workshops to
                        projects and open-source initiatives,
                        FSW gives students a space to experiment,
                        collaborate and contribute.
                    </p>

                </div>

            </section>


            {/* FOOTER */}
            <footer className="about-footer">

                <div className="about-footer-logo">
                    FSW<span>.</span>
                </div>

                <p>
                    Free Software Wing · GRIET
                </p>

                <div className="about-footer-links">

                    <a href="index.html">
                        Home
                    </a>

                    <a href="projects.html">
                        Projects
                    </a>

                    <a href="index.html#events">
                        Events
                    </a>

                </div>

            </footer>

        </div>
    );
}

export default About;