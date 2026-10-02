import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import events from "./eventData";
import "./Events.css";

function Events() {
    
    // Group events by year
    const eventsByYear = events.reduce((groups, event) => {
        if (!groups[event.year]) {
            groups[event.year] = [];
        }

        groups[event.year].push(event);
        return groups;
    }, {});

    // Latest years first
    const years = Object.keys(eventsByYear)
        .map(Number)
        .sort((a, b) => b - a);

    // Most recent event for the featured section
    const featuredEvent = events[0];

    return (
        <main className="events-page">
            <Navbar />

            {/* =================================================
                HERO
            ================================================= */}

            <section className="events-hero">

                <div className="events-hero-top">

                    <span className="events-label">
                        05 — EVENTS
                    </span>

                    <span className="events-count">
                        {events.length} EVENTS
                    </span>

                </div>

                <div className="events-hero-content">

                    <h1>
                        Moments that
                        <br />
                        <em>built FSW.</em>
                    </h1>

                    <p>
                        From workshops and technical sessions to
                        hackathons and open-source initiatives,
                        these are the events that shaped our
                        community over the years.
                    </p>

                </div>

            </section>


            {/* =================================================
                FEATURED EVENT
            ================================================= */}

            {featuredEvent && (
                <section className="featured-event-section">

                    <div className="section-intro">

                        <span className="section-label">
                            LATEST EVENT
                        </span>

                        <span className="section-year">
                            {featuredEvent.year}
                        </span>

                    </div>

                    <Link
                        to={`/events/${featuredEvent.slug}`}
                        className="featured-event"
                    >

                        <div className="featured-event-image">

                            {featuredEvent.image &&
                            featuredEvent.image !== "PASTE_IMAGE_URL_HERE" ? (
                                <img
                                    src={featuredEvent.image}
                                    alt={featuredEvent.title}
                                />
                            ) : (
                                <div className="event-image-placeholder">
                                    <span>FSW</span>
                                </div>
                            )}

                            <div className="featured-event-overlay" />

                            <div className="featured-event-info">

                                <div className="event-meta">

                                    <span>
                                        {featuredEvent.category}
                                    </span>

                                    <span>
                                        {featuredEvent.date}
                                    </span>

                                </div>

                                <h2>
                                    {featuredEvent.title}
                                </h2>

                                <p>
                                    {featuredEvent.description}
                                </p>

                                <span className="event-view">
                                    View event
                                    <span>↗</span>
                                </span>

                            </div>

                        </div>

                    </Link>

                </section>
            )}


            {/* =================================================
                EVENT ARCHIVE
            ================================================= */}

            <section className="events-archive">

                <div className="archive-heading">

                    <span className="section-label">
                        THE ARCHIVE
                    </span>

                    <h2>
                        Built over the
                        <br />
                        <em>years.</em>
                    </h2>

                    <p>
                        Explore the events, workshops, hackathons,
                        seminars and sessions conducted by FSW
                        throughout the years.
                    </p>

                </div>


                {/* =================================================
                    YEAR GROUPS
                ================================================= */}

                <div className="events-timeline">

                    {years.map((year) => (

                        <section
                            className="event-year"
                            key={year}
                        >

                            <div className="event-year-header">

                                <span className="event-year-number">
                                    {year}
                                </span>

                                <span className="event-year-line" />

                                <span className="event-year-count">
                                    {eventsByYear[year].length}{" "}
                                    {eventsByYear[year].length === 1
                                        ? "EVENT"
                                        : "EVENTS"}
                                </span>

                            </div>


                            <div className="event-grid">

                                {eventsByYear[year].map((event) => (

                                    <Link
                                        to={`/events/${event.slug}`}
                                        className="event-card"
                                        key={event.slug}
                                    >

                                        {/* IMAGE */}

                                        <div className="event-card-image">

                                            {event.image &&
                                            event.image !== "PASTE_IMAGE_URL_HERE" ? (
                                                <img
                                                    src={event.image}
                                                    alt={event.title}
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <div className="event-image-placeholder">
                                                    <span>
                                                        {year}
                                                    </span>
                                                </div>
                                            )}

                                            <div className="event-card-overlay" />

                                            <span className="event-card-arrow">
                                                ↗
                                            </span>

                                        </div>


                                        {/* CONTENT */}

                                        <div className="event-card-content">

                                            <div className="event-card-meta">

                                                <span>
                                                    {event.category}
                                                </span>

                                                <span>
                                                    {event.date}
                                                </span>

                                            </div>

                                            <h3>
                                                {event.title}
                                            </h3>

                                            <p>
                                                {event.description}
                                            </p>

                                            <span className="event-card-link">
                                                View full report
                                                <span>↗</span>
                                            </span>

                                        </div>

                                    </Link>

                                ))}

                            </div>

                        </section>

                    ))}

                </div>

            </section>


            {/* =================================================
                FOOTER CTA
            ================================================= */}

            <section className="events-footer">

                <span className="section-label">
                    FSW — GRIET
                </span>

                <h2>
                    More events.
                    <br />
                    More <em>stories.</em>
                </h2>

                <p>
                    Every event becomes part of the history
                    we continue to build together.
                </p>

            </section>

        </main>
    );
}

export default Events;