import { Link, useParams } from "react-router-dom";
import events from "../eventData";
import "../Events.css";

function EventReport() {
    const { slug } = useParams();

    const event = events.find((item) => item.slug === slug);

    if (!event) {
        return (
            <main className="event-report-page">

                <section className="event-not-found">

                    <span className="section-label">
                        404 — EVENT NOT FOUND
                    </span>

                    <h1>
                        Event not <em>found.</em>
                    </h1>

                    <Link
                        to="/events"
                        className="event-report-back"
                    >
                        ← Back to events
                    </Link>

                </section>

            </main>
        );
    }

    const paragraphs = event.details
        ? event.details.split("\n\n")
        : [];

    return (
        <main className="event-report-page">

            {/* =========================================
                HEADER
            ========================================= */}

            <section className="event-report-header">

                <div className="event-report-nav">

                    <Link
                        to="/events"
                        className="event-report-back"
                    >
                        ← All events
                    </Link>

                    <span>
                        FSW — GRIET
                    </span>

                </div>


                <div className="event-report-heading">

                    <div className="event-report-kicker">
                        <span>EVENT REPORT</span>
                        <span>{event.year}</span>
                    </div>


                    <h1>
                        {event.title}
                    </h1>


                    <div className="event-report-meta">

                        <span>
                            {event.date}
                        </span>

                        <span>
                            {event.category}
                        </span>

                        <span>
                            GRIET · HYDERABAD
                        </span>

                    </div>

                </div>

            </section>


            {/* =========================================
                IMAGE
            ========================================= */}

            <section className="event-report-visual">

                <div className="event-report-image">

                    {event.image &&
                    event.image !== "PASTE_IMAGE_URL_HERE" ? (

                        <img
                            src={event.image}
                            alt={event.title}
                        />

                    ) : (

                        <div className="event-report-placeholder">
                            <span>{event.year}</span>
                        </div>

                    )}

                </div>

            </section>


            {/* =========================================
                REPORT CONTENT
            ========================================= */}

            <section className="event-report-body">

                <div className="event-report-intro">

                    <span className="event-body-label">
                        OVERVIEW
                    </span>

                    <p>
                        {event.description}
                    </p>

                </div>


                <div className="event-report-content">

                    <div className="event-body-label">
                        REPORT
                    </div>

                    <div className="event-report-text">

                        {paragraphs.map((paragraph, index) => (
                            <p key={index}>
                                {paragraph}
                            </p>
                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================
                OFFICIAL REPORT
            ========================================= */}

            {event.report && (

                <section className="event-official-report">

                    <div className="official-report-copy">

                        <span className="event-body-label">
                            OFFICIAL DOCUMENT
                        </span>

                        <h2>
                            Read the complete
                            <br />
                            <em>event report.</em>
                        </h2>

                    </div>


                    <a
                        href={event.report}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="official-report-link"
                    >
                        <span>
                            View official report
                        </span>

                        <span className="official-report-arrow">
                            ↗
                        </span>
                    </a>

                </section>

            )}


            {/* =========================================
                FOOTER
            ========================================= */}

            <section className="event-report-footer">

                <Link
                    to="/events"
                    className="event-report-back"
                >
                    ← Back to all events
                </Link>

                <span>
                    FSW — GRIET
                </span>

            </section>

        </main>
    );
}

export default EventReport;