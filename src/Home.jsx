import { Link } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import events from "./eventData";
import "./style.css";


import raviKiran from "./assets/Ravi-Kiran-Sir.jpeg";
import metavid from "./assets/meta-vid.png";
import vivitsu24 from "./assets/vivitsu-2024-stage.jpg";
import fossFest from "./assets/foss-fest-stage.jpeg";
import vivitsu26 from "./assets/vivisatu-2026-stage.jpeg";

const metroEvents = [
    { to: "/events/vivitsu-24", title: "Vivitsu '24", tag: "TECHNICAL FEST", date: "2024", x: 300, y: 90, side: "left", shape: "diamond", line: "main" },
    { to: "/events/foss-fest-2024", title: "FOSS Fest", tag: "OPEN SOURCE", date: "30 NOV 2024", x: 300, y: 240, side: "left", shape: "square", line: "main" },
    { to: "/events/vivitsu-26", title: "Vivitsu '26", tag: "TECHNICAL FEST", date: "30–31 JAN 2026", x: 300, y: 450, side: "left", shape: "diamond", line: "main" },
    { to: "/events/cyber-security-seminar-2026", title: "Cyber Security Seminar", tag: "SEMINAR", date: "20 JAN 2026", x: 540, y: 400, side: "right", shape: "circle", line: "branch" },
    { to: "/events/future-guidance-2026", title: "Future Guidance", tag: "GUIDANCE", date: "11 FEB 2026", x: 540, y: 580, side: "right", shape: "triangle", line: "branch" },
];

function MetroShape({ shape, x, y }) {
    const p = { className: "metro-icon" };
    if (shape === "diamond")
        return <polygon {...p} points={`${x},${y - 10} ${x + 10},${y} ${x},${y + 10} ${x - 10},${y}`} />;
    if (shape === "square")
        return <rect {...p} x={x - 8} y={y - 8} width="16" height="16" />;
    if (shape === "triangle")
        return <polygon {...p} points={`${x},${y - 10} ${x + 10},${y + 8} ${x - 10},${y + 8}`} />;
    return <circle {...p} cx={x} cy={y} r="8" />;
}
function EventMetro() {
    return (
        <div className="event-metro">
            <svg viewBox="0 0 900 700" role="img" aria-label="FSW events timeline">

                {/* LINES */}
                <path className="metro-line" d="M300 60 V450" />
                <path className="metro-line is-faded" d="M300 450 V690" />
                <path
                    className="metro-line"
                    d="M300 300 V320 Q300 360 340 360 H500 Q540 360 540 400 V580"
                />
                <path className="metro-line is-faded" d="M540 580 V690" />

                {/* LINE LABELS */}
                <text className="metro-line-label" x="300" y="30" textAnchor="middle">MAIN · FESTS</text>
                <text className="metro-line-label" x="540" y="336" textAnchor="middle">TALKS</text>

                {/* STATIONS */}
                {metroEvents.map((ev) => {
                    const left = ev.side === "left";
                    const tx = left ? ev.x - 52 : ev.x + 52;
                    const anchor = left ? "end" : "start";
                    return (
                        <Link key={ev.to} to={ev.to}>
                            <g className={`metro-stop metro-${ev.line}`}>
                                <circle className="metro-hit" cx={ev.x} cy={ev.y} r="30" />
                                <circle className="metro-node" cx={ev.x} cy={ev.y} r="28" />
                                <MetroShape shape={ev.shape} x={ev.x} y={ev.y} />
                                <text className="metro-tag" x={tx} y={ev.y - 18} textAnchor={anchor}>{ev.tag}</text>
                                <text className="metro-title" x={tx} y={ev.y + 10} textAnchor={anchor}>{ev.title}</text>
                                <text className="metro-date" x={tx} y={ev.y + 34} textAnchor={anchor}>{ev.date}</text>
                            </g>
                        </Link>
                    );
                })}
            </svg>
        </div>
    );
}



function Home() {
    const EVENT_MODE = false;
    return (
        <div className="home-page">

            {/* =========================
                NAVBAR
            ========================= */}
            <Navbar />

            <main>

                {/* =========================
                    01 — HERO
                ========================= */}

                <section className="home-hero" id="home">

    <div className="home-content">
        <div className="eyebrow">
            FREE SOFTWARE WING · GRIET
        </div>

        <h1>
            Built by
            <br />
            <span>Developers.</span>
        </h1>

        <p className="home-description">
            A community of developers, creators and curious
            minds building, learning and contributing through
            open-source technology.
        </p>

        <div className="home-actions">
            <a href="#projects" className="primary-btn">
                Explore Projects
                <span>↗</span>
            </a>
        </div>
    </div>
     <EventMetro />

   {EVENT_MODE && (
    <div className="upcoming-event-card">
        <div className="upcoming-event-label">
            UPCOMING EVENT
        </div>

        <div className="upcoming-event-year">
            FSW EVENTS '27
        </div>

        <h2>
            Vivitsu
            <span>'27</span>
        </h2>

        <p>COMING SOON</p>

        <div className="upcoming-event-location">
            GRIET · HYDERABAD
        </div>

        <Link
            to="/events"
            className="upcoming-event-link"
        >
            Explore Events
            <span>↗</span>
        </Link>
    </div>
)}
    </section>
                
                {/* =========================
                    02 — FACULTY
                ========================= */}

                <section
                    className="faculty-section"
                    id="faculty"
                >

                    <div className="faculty-card">

                        <div className="faculty-image">
                            <img
                                src={raviKiran}
                                alt="K. Ravikiran"
                            />
                        </div>

                        <div className="faculty-info">

                            <p className="faculty-role">
                                FACULTY COORDINATOR
                            </p>

                            <h3>
                                K. Ravikiran
                            </h3>

                            <p>
                                Guiding the Free Software Wing at GRIET
                                and encouraging students to explore,
                                build and contribute to the open-source
                                ecosystem.
                            </p>

                            <span className="faculty-location">
                                GRIET · HYDERABAD
                            </span>

                        </div>

                    </div>

                </section>


                {/* =========================
                    03 — ABOUT
                ========================= */}

                <section
                    className="about-section"
                    id="about"
                >

                    <div className="section-heading">

                        <div className="section-number">
                            03 — ABOUT
                        </div>

                    </div>

                    <div className="about-content">

                        <div className="about-large-text">
                            We believe
                            <br />
                            software should
                            <br />
                            be <em>open.</em>
                        </div>

                        <p className="about-description">
                            FSW is the Free Software Wing of GRIET —
                            a student-driven community focused on
                            open source, technology, collaboration
                            and continuous learning.

                            <br />
                            <br />

                            We create spaces where students can
                            experiment with ideas, build projects,
                            share knowledge and grow together.
                        </p>

                    </div>

                    {/* Separate About Page */}

                    <div className="section-action">

                        <Link
                            to="/about"
                            className="outline-btn"
                        >
                            Learn More About FSW
                            <span>↗</span>
                        </Link>

                    </div>

                </section>


                {/* =========================
                    04 — WHAT WE DO
                ========================= */}

                <section
                    className="what-we-do-section"
                    id="what-we-do"
                >

                    <div className="section-heading">

                        <div className="section-number">
                            04 — WHAT WE DO
                        </div>

                        <h2>
                            Learn.
                            <em>Build.</em>
                            Contribute.
                        </h2>

                    </div>


                    <div className="what-we-do-grid">

                        <article className="what-we-do-card">

                            <div className="what-we-do-number">
                                01
                            </div>

                            <div className="what-we-do-icon">
                                &lt;/&gt;
                            </div>

                            <h3>
                                Open Source
                            </h3>

                            <p>
                                We explore open-source technologies,
                                contribute to real projects and learn
                                by building with the community.
                            </p>

                        </article>


                        <article className="what-we-do-card">

                            <div className="what-we-do-number">
                                02
                            </div>

                            <div className="what-we-do-icon">
                                ↗
                            </div>

                            <h3>
                                Workshops & Sessions
                            </h3>

                            <p>
                                We conduct technical sessions,
                                workshops and learning activities
                                that turn ideas into practical skills.
                            </p>

                        </article>


                        <article className="what-we-do-card">

                            <div className="what-we-do-number">
                                03
                            </div>

                            <div className="what-we-do-icon">
                                ◇
                            </div>

                            <h3>
                                Projects
                            </h3>

                            <p>
                                We build meaningful projects,
                                experiment with new ideas and
                                encourage learning through
                                collaboration.
                            </p>

                        </article>


                        <article className="what-we-do-card">

                            <div className="what-we-do-number">
                                04
                            </div>

                            <div className="what-we-do-icon">
                                +
                            </div>

                            <h3>
                                Community
                            </h3>

                            <p>
                                We bring students together to
                                share knowledge, collaborate on
                                ideas and grow as developers.
                            </p>

                        </article>

                    </div>

                </section>

                {/* =================================================
     04 — EVENTS
================================================== */}

<section
    className="events-section"
    id="events"
>


    <div className="section-heading events-heading">

        <p className="section-number">
            03 / EVENTS
        </p>

        <h2>
            What we've
            <em> been building.</em>
        </h2>

    </div>



    {/* =============================================
         INFINITE EVENT SLIDER
    ============================================== */}

    <div className="events-marquee">

        <div className="events-track">

    {/* EVENT 1 */}
    <Link to="/events/vivitsu-26" className="event-slide">
        <div className="event-image">
            <img src={vivitsu26} alt="Vivitsu '26" />
        </div>
        <div className="event-slide-info">
            <span>TECHNICAL FEST</span>
            <h3>Vivitsu '26</h3>
        </div>
    </Link>

    {/* EVENT 2 */}
    <Link to="/events/vivitsu-24" className="event-slide">
        <div className="event-image">
            <img src={vivitsu24} alt="Vivitsu '24" />
        </div>
        <div className="event-slide-info">
            <span>TECHNICAL FEST</span>
            <h3>Vivitsu '24</h3>
        </div>
    </Link>

    {/* EVENT 3 */}
    <Link to="/events/foss-fest-2024" className="event-slide">
        <div className="event-image">
            <img src={fossFest} alt="FOSS Fest" />
        </div>
        <div className="event-slide-info">
            <span>OPEN SOURCE</span>
            <h3>FOSS Fest</h3>
        </div>
    </Link>

    {/* DUPLICATE SET (infinite animation) */}
    <Link to="/events/vivitsu-26" className="event-slide">
        <div className="event-image">
            <img src={vivitsu26} alt="Vivitsu '26" />
        </div>
        <div className="event-slide-info">
            <span>TECHNICAL FEST</span>
            <h3>Vivitsu '26</h3>
        </div>
    </Link>

    <Link to="/events/vivitsu-24" className="event-slide">
        <div className="event-image">
            <img src={vivitsu24} alt="Vivitsu '24" />
        </div>
        <div className="event-slide-info">
            <span>TECHNICAL FEST</span>
            <h3>Vivitsu '24</h3>
        </div>
    </Link>

    <Link to="/events/foss-fest-2024" className="event-slide">
        <div className="event-image">
            <img src={fossFest} alt="FOSS Fest" />
        </div>
        <div className="event-slide-info">
            <span>OPEN SOURCE</span>
            <h3>FOSS Fest</h3>
        </div>
    </Link>

</div>

</div>


    {/* =============================================
         HORIZONTAL EVENT LIST
    ============================================== */}

    <div className="event-list">


        {/* EVENT 01 */}

        <Link
            to="/events/vivitsu-26"
            className="event-row"
        >

            <span className="event-number">
                01
            </span>

            <span className="event-name">
                Vivitsu '26
            </span>

            <span className="event-date">
                30–31 JAN 2026
            </span>

            <span className="event-arrow">
                ↗
            </span>

        </Link>



        {/* EVENT 02 */}

        <Link
            to="/events/future-guidance-2026"
            className="event-row"
        >

            <span className="event-number">
                02
            </span>

            <span className="event-name">
                Future Guidance
            </span>

            <span className="event-date">
                11 FEB 2026
            </span>

            <span className="event-arrow">
                ↗
            </span>

        </Link>



        {/* EVENT 03 */}

        <Link
            to="/events/cyber-security-seminar-2026"
            className="event-row"
        >

            <span className="event-number">
                03
            </span>

            <span className="event-name">
                Cyber Security Seminar
            </span>

            <span className="event-date">
                20 JAN 2026
            </span>

            <span className="event-arrow">
                ↗
            </span>

        </Link>



        {/* EVENT 04 */}

        <Link
            to="/events/foss-fest-2024"
            className="event-row"
        >

            <span className="event-number">
                04
            </span>

            <span className="event-name">
                FOSS Fest
            </span>

            <span className="event-date">
                30 NOV 2024
            </span>

            <span className="event-arrow">
                ↗
            </span>

        </Link>


    </div>



    <div className="section-action">

        <Link
            to="/events"
            className="outline-btn"
        >
            View All Events
            <span>↗</span>
        </Link>

    </div>

</section>



                
               {/* =========================
                        06 — PROJECTS
                    ========================= */}

            <section
                className="projects-section"
                id="projects"
            >

                <div className="section-heading">

                    <div className="section-number">
                        06 — PROJECTS
                    </div>

                    <h2>
                        Things we've
                        <br />
                        <em>built.</em>
                    </h2>

                </div>


                <div className="projects-grid">

                    {/* ================= PROJECT METAVID ================= */}

<article className="project-card">

    <div className="project-image">
        <img
            src={metavid}
            alt="Project Metavid"
        />
    </div>

    <div className="project-info">

        <span className="project-category">
            OPEN SOURCE · PROJECT
        </span>

        <h3>
            Project Metavid
        </h3>

        <p>
            A collaborative project built
            by members of the FSW community.
        </p>

        <a
            href="https://github.com/akshaydev-git/Project-Metavid"
            target="_blank"
            rel="noreferrer"
            className="project-link"
        >
            View Project
            <span>↗</span>
        </a>

    </div>

</article>


        {/* ================= GIT SCAVENGER HUNT ================= */}

        <article className="project-card">

            <div className="project-image">

                <img
                    src="/assets/git-scavenger.jpg"
                    alt="Git Scavenger Hunt"
                />

            </div>

            <div className="project-info">

                <span className="project-category">
                    GITHUB · PROJECT
                </span>

                <h3>
                    Git Scavenger Hunt
                </h3>

                <p>
                    An interactive project designed
                    to help students learn Git and
                    collaborative development.
                </p>

                <a
                    href="https://github.com/Subham8705/git-scavenger-hunt"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                >
                    View Project
                    <span>↗</span>
                </a>

            </div>

        </article>

    </div>


    <div className="section-action">

        <Link
            to="/projects"
            className="outline-btn"
        >
            Explore All Projects
            <span>↗</span>
        </Link>

    </div>

</section>

                {/* =========================
                    07 — TECH TEAM
                ========================= */}

                <section
                    className="tech-team-section"
                    id="tech-team"
                >

                    <div className="tech-team-top">

                        <div className="section-number">
                            07 / TECH TEAM
                        </div>

                        <div className="tech-team-intro">

                            <h2>
                                Build. Break.
                                <br />
                                <em>Fix. Repeat.</em>
                            </h2>

                            <p>
                                The FSW Tech Team builds the systems,
                                websites and digital experiences that
                                power our community. If you enjoy coding,
                                experimenting and solving problems,
                                this is where you belong.
                            </p>

                            <Link
                                to="/tech-team"
                                className="primary-btn tech-team-btn"
                            >
                                Join the Tech Team
                                <span>↗</span>
                            </Link>

                        </div>

                    </div>


                    <div className="tech-team-line"></div>


                    <div className="tech-team-bottom">

                        <div className="tech-team-mark">
                            FSW
                            <span>/ TECH</span>
                        </div>

                        <div className="tech-team-note">
                            BUILDING THE DIGITAL SIDE OF FSW
                        </div>

                    </div>

                </section>

            </main>
        </div>
    );
}
        

export default Home;