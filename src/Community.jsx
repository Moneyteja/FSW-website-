import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Community.css";
import Navbar from "./Navbar";
//import fswLogo from "./assets/fsw-logo.png";

// =========================================================
// IMAGE IMPORTS
// Keep commented until you have the images.
// =========================================================

// Faculty Coordinator
import raviKiran from "./assets/Ravi-Kiran-Sir.jpeg";

// General
import harshini from "./assets/T harshini.jpg";
import sahastra from "./assets/SAHASTRA GUDUGULA.jpg";

// Technical
import rithwika from "./assets/Rithwika.jpg.jpeg";
import maniteja from "./assets/Maniteja.jpg";

// Public Relations
import raniPrasanna from "./assets/sri ram rani prasanna.jpeg";
import jashwanth from "./assets/jashwanth.jpeg"
import suhreeth from "./assets/Suhreeth Bharadwaj.jpg"

// Design & Social Media
import akhila from "./assets/Akhila chinna.jpg";
import laxmiPriya from "./assets/Bingi Laxmi Priya.jpg";
import avinash from "./assets/Avinash.jpg";
import harshitha from "./assets/Pilli Harshitha.jpg";

// Arts
import roopa from "./assets/P Roopa.jpg";
import abhiPreethi from "./assets/Abhi Preethi.jpg";
import shalini from "./assets/Shalini.png"

// Event Management
import shivani from "./assets/Shivani Tula.jpg";
import hasini from "./assets/Hasini Nimmala.jpg";

// Logistics
import jeshwanth from "./assets/JESHWANTH_A.jpg";

// Publicity
import lavanya from "./assets/lavanya reddy.jpeg";
import keerthi from "./assets/Keerthi.jpg";
import geethika from "./assets/geethika shanmukhi.jpeg";

// Documentation
import vania from "./assets/vania battu.jpg";
import manideep from "./assets/Manideep.jpeg";
import rithvik from "./assets/rithwik.jpeg";
// =========================================================
// ICONS
// =========================================================

function LinkedInIcon() {
    return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.84v1.57h.05c.54-1.02 1.84-2.1 3.8-2.1 4.06 0 4.81 2.67 4.81 6.14v5.89h-4v-5.22c0-1.25-.02-2.85-1.74-2.85-1.74 0-2.01 1.36-2.01 2.76v5.31h-4V9.75Z" />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
    );
}

// =========================================================
// COMMUNITY DATA
// =========================================================



const communityData = [
    {
        name: "TECHNICAL",
        number: "01",
        tagline: "We build the website, fix what breaks, and review each other's code.",
        members: [
            { name: "Akshay Chandra", year: "3rd Year", linkedin: "https://www.linkedin.com/in/akshay-chandra2816" },
            { name: "Rithwika Pallepaty", year: "2nd Year", image: rithwika, linkedin: "https://www.linkedin.com/in/rithwika-pallepaty-7a41403a0" },
            { name: "Maniteja Miriyala", year: "2nd Year", image: maniteja, linkedin: "https://www.linkedin.com/in/maniteja-miriyala-1355a1432" },
        ],
    },
    {
        name: "GENERAL",
        number: "02",
        tagline: "Planning, decisions, follow-ups. The team that keeps FSW running.",
        members: [
            { name: "Varun Gandhe", year: "3rd Year", linkedin: "https://www.linkedin.com/in/varungandhe" },
            { name: "T Harshini", year: "3rd Year", image: harshini, linkedin: "https://www.linkedin.com/in/t-harshini-0b8b79336" },
            { name: "Adepu Revanth", year: "3rd Year", linkedin: "https://www.linkedin.com/in/revanthadepu/" },
            { name: "G SAHASTRA", year: "3rd Year", image: sahastra, linkedin: "https://www.linkedin.com/in/sahastra-g" },
        ],
    },

    {
        name: "PUBLIC RELATIONS",
        number: "03",
        tagline: "Connecting FSW with colleges, speakers, and communities.",


        members: [
            {
                name: "Suhreeth Bharadwaj",
                year: "3rd Year",
                image: suhreeth,
                linkedin:
                    "https://www.linkedin.com/in/suhreeth-bharadwaj-korrapati-33329a369/",
            },
            {
                name: "Bommu Jashwanth Sai Sri Reddy",
                year: "2nd Year",
                image: jashwanth,
                linkedin:
                    "https://www.linkedin.com/in/jashwanth-bommu-b642b43b9",
            },
            {
                name: "Rani Prasanna",
                year: "2nd Year",
                image: raniPrasanna,
                linkedin:
                    "https://www.linkedin.com/in/sriram-rani-prasanna-07687a400",
            },
        ],
    },

    {
        name: "DESIGN & SOCIAL MEDIA",
        number: "04",
        tagline: "Posters, reels, and the look of everything FSW puts out.",
        members: [
            {
                name: "Akhila Kadem",
                year: "3rd Year",
                image: akhila,
                linkedin:
                    "https://www.linkedin.com/in/akhila-kadem-401997327",
            },
            {
                name: "Bingi Laxmi Priya",
                year: "3rd Year",
                image: laxmiPriya,
                linkedin:
                    "https://www.linkedin.com/in/laxmipriyabingi",
            },
            {
                name: "Akinapally Avinash",
                year: "2nd Year",
                image: avinash,
                linkedin:
                    "https://www.linkedin.com/in/avinash-akinapally-a58918433",
            },
            {
                name: "Harshitha P",
                year: "2nd Year",
                image: harshitha,
                linkedin:
                    "https://www.linkedin.com/in/𝓗𝓪𝓻𝓼𝓱𝓲𝓽𝓱𝓪-p-433630385",
            },
        ],
    },

    {
        name: "ARTS",
        number: "05",
        tagline: "Sketches, murals, and artwork for every event.",

        members: [
            {
                name: "P Roopa",
                year: "3rd Year",
                image: roopa,
                linkedin:
                    "https://www.linkedin.com/in/p-roopa-36a020328/",
            },
            {
                name: "Poojari Shalini",
                year: "3rd Year",
                image: shalini,
                linkedin:
                    "https://www.linkedin.com/in/shalini-poojari-b14908380",
            },
            {
                name: "Abhipreethi Thangallapally",
                year: "2nd Year",
                image: abhiPreethi,
                linkedin:
                    "https://www.linkedin.com/in/abhipreethi-thangallapally-a8a9a2395",
            },
        ],
    },

    {
        name: "EVENT MANAGEMENT",
        number: "06",
        tagline: "From first plan to last cleanup, we run the event.",

        members: [
            {
                name: "Siddarth",
                year: "3rd Year",
            },
            {
                name: "Shivani Rao Tula",
                year: "3rd Year",
                image: shivani,
                linkedin:
                    "https://www.linkedin.com/in/shivani-rao-tula-97966a341",
            },
            {
                name: "N. Hasini",
                year: "2nd Year",
                image: hasini,
                linkedin:
                    "https://www.linkedin.com/in/nimmala-hasini-410997433",
            },
        ],
    },

    {
        name: "LOGISTICS",
        number: "07",
        tagline: "Venue, supplies, setup. Everything ready before the event starts.",

        members: [
            {
                name: "ARUR JESHWANTH",
                year: "3rd Year",
                image: jeshwanth,
                linkedin:
                    "https://www.linkedin.com/in/arur-jeshvanth-79b284335",
            },
            {
                name: "B. Sathwik",
                year: "2nd Year",
            },
        ],
    },

    {
        name: "PUBLICITY",
        number: "08",
        tagline: "Getting the word out so people actually show up.",

        members: [
            {
                name: "V. Lavanya Reddy",
                year: "3rd Year",
                image: lavanya,
                linkedin:
                    "https://www.linkedin.com/in/lavanyareddyvadala",
            },
            {
                name: "E. Usha Keerthi",
                year: "2nd Year",
                image: keerthi,
                linkedin:
                    "https://www.linkedin.com/in/usha-keerthi-3484493a1",
            },
            {
                name: "T. Geethika Shanmukhi",
                year: "2nd Year",
                image: geethika,
                linkedin:
                    "https://www.linkedin.com/in/tummuri-geethika-shanmukhi-979652400",
            },
        ],
    },

    {
        name: "DOCUMENTATION",
        number: "09",
        tagline: "Reports, records, and photos, so the club remembers what it did.",

        members: [
            {
                name: "Vania Battu",
                year: "3rd Year",
                image: vania,
                linkedin:
                    "https://www.linkedin.com/in/vania-battu-902323",
            },
            {
                name: "NADIMINTI MANIDEEP CHOWDARY",
                year: "3rd Year",
                image: manideep,
                linkedin:
                    "https://www.linkedin.com/in/nadiminti-manideep-chowdary-a2a986327",
            },
            {
                name: "Rithvik Kesarla",
                year: "2nd Year",
                image: rithvik,
                linkedin:
                    "https://www.linkedin.com/in/rithvikkesarla/",



            },
        ],
    },

    
];

const socialsByName = Object.fromEntries(
    communityData.flatMap((domain) =>
        domain.members.map((m) => [
            m.name,
            { linkedin: m.linkedin, instagram: m.instagram },
        ])
    )
);


// =========================================================
// LEADERSHIP / SLIDER DATA
//
// IMPORTANT:
// This is NOT one person per domain.
// Every individual member is included.
// =========================================================

// =========================================================
// LEADERSHIP / SLIDER DATA
// =========================================================

const leadershipData = [
    // =========================
    // CORE LEADERSHIP
    // =========================

    {
        name: "Varun Gandhe",
        role: "PRESIDENT",
        year: "3RD YEAR",
        // image: varun,
    },

    {
        name: "T Harshini",
        role: "VICE PRESIDENT",
        year: "3RD YEAR",
        image: harshini,
    },

    {
        name: "Adepu Revanth",
        role: "GENERAL SECRETARY",
        year: "3RD YEAR",
        // image: generalSecretary,
    },

    {
        name: "G SAHASTRA",
        role: "VICE GENERAL SECRETARY",
        year: "3RD YEAR",
        image: sahastra,
    },


    // =========================
    // TECHNICAL
    // =========================

    {
        name: "Akshay Chandra",
        role: "TECHNICAL",
        year: "3RD YEAR",
        // image: akshay,
    },

    {
        name: "Rithwika Pallepaty",
        role: "TECHNICAL",
        year: "2ND YEAR",
        image: rithwika,
    },

    {
        name: "Maniteja Miriyala",
        role: "TECHNICAL",
        year: "2ND YEAR",
        image: maniteja,
    },


    // =========================
    // PUBLIC RELATIONS
    // =========================

    {
        name: "Suhreeth Bharadwaj",
        role: "PUBLIC RELATIONS",
        year: "3RD YEAR",
        image: suhreeth,
    },

    {
        name: "Bommu Jashwanth Sai Sri Reddy",
        role: "PUBLIC RELATIONS",
        year: "2ND YEAR",
        image: jashwanth,
    },

    {
        name: "Rani Prasanna",
        role: "PUBLIC RELATIONS",
        year: "2ND YEAR",
        image: raniPrasanna,
    },


    // =========================
    // DESIGN & SOCIAL MEDIA
    // =========================

    {
        name: "Akhila Kadem",
        role: "DESIGN & SOCIAL MEDIA",
        year: "3RD YEAR",
        image: akhila,
    },

    {
        name: "Bingi Laxmi Priya",
        role: "DESIGN & SOCIAL MEDIA",
        year: "3RD YEAR",
        image: laxmiPriya,
    },

    {
        name: "Akinapally Avinash",
        role: "DESIGN & SOCIAL MEDIA",
        year: "2ND YEAR",
        image: avinash,
    },

    {
        name: "Harshitha P",
        role: "DESIGN & SOCIAL MEDIA",
        year: "2ND YEAR",
        image: harshitha,
    },


    // =========================
    // ARTS
    // =========================

    {
        name: "P Roopa",
        role: "ARTS",
        year: "3RD YEAR",
        image: roopa,
    },

    {
        name: "Poojari Shalini",
        role: "ARTS",
        year: "3RD YEAR",
        image: shalini,
    },

    {
        name: "Abhipreethi Thangallapally",
        role: "ARTS",
        year: "2ND YEAR",
        image: abhiPreethi,
    },


    // =========================
    // EVENT MANAGEMENT
    // =========================

    {
        name: "Siddarth",
        role: "EVENT MANAGEMENT",
        year: "3RD YEAR",
        // image: siddarth,
    },

    {
        name: "Shivani Rao Tula",
        role: "EVENT MANAGEMENT",
        year: "3RD YEAR",
        image: shivani,
    },

    {
        name: "N. Hasini",
        role: "EVENT MANAGEMENT",
        year: "2ND YEAR",
        image: hasini,
    },


    // =========================
    // LOGISTICS
    // =========================

    {
        name: "ARUR JESHWANTH",
        role: "LOGISTICS",
        year: "3RD YEAR",
        image: jeshwanth,
    },

    {
        name: "B. Sathwik",
        role: "LOGISTICS",
        year: "2ND YEAR",
    },


    // =========================
    // PUBLICITY
    // =========================

    {
        name: "V. Lavanya Reddy",
        role: "PUBLICITY",
        year: "3RD YEAR",
        image: lavanya,
    },

    {
        name: "E. Usha Keerthi",
        role: "PUBLICITY",
        year: "2ND YEAR",
        image: keerthi,
    },

    {
        name: "T. Geethika Shanmukhi",
        role: "PUBLICITY",
        year: "2ND YEAR",
        image: geethika,
    },


    // =========================
    // DOCUMENTATION
    // =========================

    {
        name: "Vania Battu",
        role: "DOCUMENTATION",
        year: "3RD YEAR",
        image: vania,
    },

    {
        name: "NADIMINTI MANIDEEP CHOWDARY",
        role: "DOCUMENTATION",
        year: "3RD YEAR",
        image: manideep,
    },

    {
        name: "Rithvik Kesarla",
        role: "DOCUMENTATION",
        year: "2ND YEAR",
        image: rithvik,
    },
];

// =========================================================
// LEADERSHIP SLIDER
// =========================================================

function LeadershipSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    const totalProfiles = leadershipData.length;

    const getPosition = (index) => {
        let position = index - activeIndex;

        if (position > Math.floor(totalProfiles / 2)) {
            position -= totalProfiles;
        }

        if (position < -Math.floor(totalProfiles / 2)) {
            position += totalProfiles;
        }

        return position;
    };

    const handleProfileClick = (index) => {
        setActiveIndex(index);
    };

    const goPrevious = () => {
        setActiveIndex(
            (activeIndex - 1 + totalProfiles) %
                totalProfiles
        );
    };

    const goNext = () => {
        setActiveIndex(
            (activeIndex + 1) % totalProfiles
        );
    };

    return (
        <section className="community-leadership">

            {/* HEADING */}

            <div className="community-leadership-heading">

                <div className="community-leadership-label">
                    08 — OUR PEOPLE
                </div>

                <h2>
                    The people
                    <br />
                    behind <em>FSW.</em>
                </h2>

                <p>
                    The people who lead, organise and keep
                    the Free Software Wing moving forward.
                </p>

            </div>


            {/* SLIDER */}

            <div className="community-leadership-slider">

                <div className="community-slider-track">

                    {leadershipData.map((person, index) => {

                        const position =
                            getPosition(index);

                        const distance =
                            Math.min(
                                Math.abs(position),
                                3
                            );

                        const links = socialsByName[person.name] || {};

                        let scale = 0.82;
                        let opacity = 0.35;

                        if (
                            position === -1 ||
                            position === 1
                        ) {
                            scale = 0.92;
                            opacity = 0.65;
                        }

                        if (position === 0) {
                            scale = 1;
                            opacity = 1;
                        }

                        return (
                            <div
                                key={person.name}
                                className={`community-slide ${
                                    index === activeIndex
                                        ? "is-active"
                                        : ""
                                }`}
                                style={{
                                    transform: `
                                        translateX(
                                            calc(
                                                -50% +
                                                ${
                                                    position *
                                                    250
                                                }px
                                            )
                                        )
                                        translateY(-50%)
                                        scale(${scale})
                                    `,
                                    opacity,
                                    zIndex:
                                        30 - distance,
                                }}
                                onClick={() =>
                                    handleProfileClick(index)
                                }
                            >

                                {/* IMAGE */}

                                <div className="community-slide-image">

                                    {person.image ? (
                                        <img
                                            src={person.image}
                                            alt={person.name}
                                        />
                                    ) : (
                                        <div className="community-slide-placeholder">
                                            <span>
                                                FSW
                                            </span>
                                        </div>
                                    )}


                                    {/* GLASS DETAILS */}
<div className="community-slide-info">

    <span className="community-slide-role">
        {person.role}
    </span>

    <h3>{person.name}</h3>

    <span className="community-slide-year">
        {person.year}
    </span>

    {(links.instagram || links.linkedin) && (
        <div className="community-member-socials">

            {links.instagram && (
                <a
                    href={links.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${person.name} on Instagram`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <InstagramIcon />
                </a>
            )}

            {links.linkedin && (
                <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${person.name} on LinkedIn`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <LinkedInIcon />
                </a>
            )}

        </div>
    )}

</div>

                                </div>

                            </div>
                        );
                    })}

                </div>


                {/* CONTROLS */}

                <div className="community-slider-controls">

                    <button
                        type="button"
                        className="community-slider-arrow"
                        onClick={goPrevious}
                        aria-label="Previous profile"
                    >
                        ←
                    </button>

                    <div className="community-slider-counter">

                        <span>
                            {String(
                                activeIndex + 1
                            ).padStart(2, "0")}
                        </span>

                        <span>/</span>

                        <span>
                            {String(
                                totalProfiles
                            ).padStart(2, "0")}
                        </span>

                    </div>

                    <button
                        type="button"
                        className="community-slider-arrow"
                        onClick={goNext}
                        aria-label="Next profile"
                    >
                        →
                    </button>

                </div>

            </div>

        </section>
    );
}



// =========================================================
// SORT MEMBERS
// =========================================================

function sortMembers(members) {
    return [...members].sort((a, b) => {
        if (
            a.year === "3rd Year" &&
            b.year === "2nd Year"
        ) {
            return -1;
        }

        if (
            a.year === "2nd Year" &&
            b.year === "3rd Year"
        ) {
            return 1;
        }

        return 0;
    });
}


// =========================================================
// MEMBER CARD
// =========================================================

function Member({ member, index }) {

    return (
        <article className="community-member">

            <div className="community-member-image">

                {member.image ? (
                    <img src={member.image} alt={member.name} />
                ) : (
                    <div className="community-member-placeholder">
                        <span>FSW</span>
                    </div>
                )}

                {/* NUMBER */}
                <span className="community-member-number">
                    {String(index + 1).padStart(2, "0")}
                </span>

                {/* GLASS DETAILS */}
                <div className="community-member-details">

                    <div className="community-member-name">
                        {member.name}
                    </div>

                    <div className="community-member-meta">
                        <span>{member.year}</span>
                        <span>·</span>
                        <span>FSW</span>
                    </div>

                    {(member.instagram || member.linkedin) && (
                        <div className="community-member-socials">

                            {member.instagram && (
                                <a
                                    href={member.instagram}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`${member.name} on Instagram`}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <InstagramIcon />
                                </a>
                            )}

                            {member.linkedin && (
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`${member.name} on LinkedIn`}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <LinkedInIcon />
                                </a>
                            )}

                        </div>
                    )}

                </div>

            </div>

        </article>
    );
}


// =========================================================
// COMMUNITY PAGE
// =========================================================

export default function Community() {

    return (
        <main className="community-page">

            <Navbar />
            {/* =================================================
                HERO
            ================================================= */}

            <section className="community-hero">

                <div className="community-hero-label">
                    07 — COMMUNITY
                </div>

                <h1>
                    Meet the <em>community.</em>
                </h1>

                <p>
                    The people behind FSW — builders,
                    designers, organisers and open-source
                    enthusiasts working together at GRIET.
                </p>

                <div className="community-hero-meta">
                    25+ MEMBERS · 9 DOMAINS
                </div>

            </section>


            {/* =================================================
                FACULTY COORDINATOR
            ================================================= */}

            <section className="community-faculty">

                <div className="community-faculty-label">
                    FACULTY COORDINATOR
                </div>

                <div className="community-faculty-card">

                    <div className="community-faculty-image">
                        <img
                        src={raviKiran}
                        alt="K. Ravikiran"
                        />
                    </div>

                    <div className="community-faculty-info">

                        <div className="community-faculty-role">
                            FACULTY COORDINATOR · FSW
                        </div>

                        <h2>
                            K. Ravikiran
                        </h2>

                        <p>
                            Guiding the Free Software Wing
                            at GRIET and encouraging students
                            to explore, build and contribute
                            to the open-source ecosystem.
                        </p>

                        <span className="community-faculty-location">
                            GRIET · HYDERABAD
                        </span>

                    </div>

                </div>

            </section>


            {/* =================================================
                OUR PEOPLE SLIDER
            ================================================= */}

            <LeadershipSlider />


            {/* =================================================
                DOMAINS
            ================================================= */}

            <section className="community-domains">

                <div className="community-domains-heading">

                    <div className="community-domains-label">
                        09 — DOMAINS
                    </div>

                    <h2>
                        Everyone has <em>a part to play.</em>
                    </h2>

                </div>


                {communityData.map((domain) => {

    const thirdYears = domain.members.filter(
        (member) => member.year === "3rd Year"
    );

    const secondYears = domain.members.filter(
        (member) => member.year === "2nd Year"
    );

    return (
        <section
            className="community-domain"
            key={domain.number}
        >

            {/* DOMAIN HEADER */}

            <div className="community-domain-header">

                <div className="community-domain-title">
                    <span className="community-domain-number">
                        {domain.number}
                    </span>

                    <h3>
                        {domain.name}
                    </h3>
                </div>

                <span className="community-domain-line" />

            </div>


            {/* TAGLINE */}

            {domain.tagline && (
                <p className="community-domain-tagline">
                    {domain.tagline}
                </p>
            )}


            {/* 3RD YEAR */}

            {thirdYears.length > 0 && (
                <div className="community-year-group">

                    <div className="community-year-heading">
                        <span>03</span>
                        <h4>3RD YEAR</h4>
                    </div>

                    <div className="community-members-grid">
                        {thirdYears.map((member, index) => (
                            <Member
                                key={member.name}
                                member={member}
                                index={index}
                            />
                        ))}
                    </div>

                </div>
            )}


            {/* 2ND YEAR */}

            {secondYears.length > 0 && (
                <div className="community-year-group">

                    <div className="community-year-heading">
                        <span>02</span>
                        <h4>2ND YEAR</h4>
                    </div>

                    <div className="community-members-grid">
                        {secondYears.map((member, index) => (
                            <Member
                                key={member.name}
                                member={member}
                                index={index}
                            />
                        ))}
                    </div>

                </div>
            )}

        </section>
    );
})}
</section>
            {/* =================================================
                FINAL CTA
            ================================================= */}

            <section className="community-final">

                <div className="community-final-label">
                    BE PART OF FSW
                </div>

                <h2>
                    Build something
                    <br />
                    <em>more open.</em>
                </h2>

                <p>
                    Learn. Build. Contribute.
                    <br />
                    There is always room for another builder.
                </p>

                <Link
                    to="/"
                    className="community-final-button"
                >
                    Explore FSW
                    <span>↗</span>
                </Link>

            </section>

        </main>
    );
}


