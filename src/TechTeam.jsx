import "./TechTeam.css";
import Navbar from "./Navbar";

function TechTeam() {
    return (
        <div className="tech-team-page">

            <Navbar />

            {/* HERO */}
            <section className="tech-page-hero">

                <div className="tech-page-number">
                    FSW / TECH TEAM
                </div>

                <h1>
                    Build. Break.
                    <br />
                    <em>Fix. Repeat.</em>
                </h1>

                <p>
                    The FSW Tech Team is the technical backbone
                    of the Free Software Wing. We build websites,
                    platforms, tools and digital experiences that
                    power the community.
                </p>

            </section>


            {/* ABOUT */}
            <section className="tech-content-section">

                <div className="tech-section-label">
                    01 / ABOUT THE TEAM
                </div>

                <div className="tech-about-grid">

                    <h2>
                        We don't just
                        <br />
                        <em>talk about technology.</em>
                        <br />
                        We build with it.
                    </h2>

                    <div className="tech-about-text">

                        <p>
                            The Tech Team brings together students
                            who enjoy programming, development,
                            problem-solving and experimenting with
                            new technologies.
                        </p>

                        <p>
                            From building the FSW website to creating
                            tools for events and community initiatives,
                            the team works on projects that have
                            a real purpose.
                        </p>

                    </div>

                </div>

            </section>


            {/* WHAT WE BUILD */}
            <section className="tech-content-section">

                <div className="tech-section-label">
                    02 / WHAT WE BUILD
                </div>

                <div className="tech-build-grid">

                    <article className="tech-build-card">

                        <span className="tech-build-number">
                            01
                        </span>

                        <div className="tech-build-accent blue"></div>

                        <h3>
                            Web Development
                        </h3>

                        <p>
                            Websites, interfaces and digital
                            experiences for FSW and its initiatives.
                        </p>

                    </article>


                    <article className="tech-build-card">

                        <span className="tech-build-number">
                            02
                        </span>

                        <div className="tech-build-accent purple"></div>

                        <h3>
                            Developer Tools
                        </h3>

                        <p>
                            Useful tools and systems that make
                            our community and events better.
                        </p>

                    </article>


                    <article className="tech-build-card">

                        <span className="tech-build-number">
                            03
                        </span>

                        <div className="tech-build-accent green"></div>

                        <h3>
                            Open Source
                        </h3>

                        <p>
                            Explore, contribute to and build
                            software using open technologies.
                        </p>

                    </article>


                    <article className="tech-build-card">

                        <span className="tech-build-number">
                            04
                        </span>

                        <div className="tech-build-accent blue"></div>

                        <h3>
                            Experiments
                        </h3>

                        <p>
                            Try new technologies, break things,
                            learn from them and build again.
                        </p>

                    </article>

                </div>

            </section>


            {/* JOIN */}
            <section className="tech-join-section">

                <div className="tech-section-label">
                    03 / WHO CAN JOIN
                </div>

                <div className="tech-join-content">

                    <h2>
                        Curious about
                        <br />
                        <em>technology?</em>
                    </h2>

                    <p>
                        You don't need to know everything before
                        joining. If you're willing to learn, build
                        and contribute, there's a place for you
                        on the team.
                    </p>

                    <a
                        href="mailto:fsw@griet.ac.in"
                        className="tech-join-btn"
                    >
                        Join the Tech Team
                        <span>↗</span>
                    </a>

                </div>

            </section>

        </div>
    );
}

export default TechTeam;
