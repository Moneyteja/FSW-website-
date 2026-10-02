import gsap from "gsap";
const EVENT_MODE = false;


/* =========================================================
   NAVBAR
========================================================= */

async function loadNavbar() {

    const navbarContainer =
        document.getElementById("navbar-container");

    if (!navbarContainer) return;

    try {

        const response =
            await fetch("components/navbar.html");

        if (!response.ok) {
            throw new Error("Navbar could not be loaded");
        }

        const navbarHTML =
            await response.text();

        navbarContainer.innerHTML =
            navbarHTML;

        setupNavbar();

    } catch (error) {

        console.error(
            "Navbar failed to load:",
            error
        );

    }
}


function setupNavbar() {

    const currentPage =
        window.location.pathname;

    const navLinks =
        document.querySelectorAll(
            ".nav-links a"
        );

    navLinks.forEach(link => {

        const href =
            link.getAttribute("href");

        if (
            href === "index.html" &&
            (
                currentPage === "/" ||
                currentPage.endsWith("index.html")
            )
        ) {

            link.classList.add("active");

        }

    });

}


    /* =========================================================
   HERO EVENT NETWORK ANIMATION
========================================================= */

function initEventNetwork() {

    const network =
        document.querySelector(".event-network");

    if (!network) return;


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const paths =
        network.querySelectorAll(".event-path");

    const eventNodes =
        network.querySelectorAll(".event-node");

    const systemNodes =
        network.querySelectorAll(".system-node");

    const labels =
    network.querySelectorAll(
        ".event-network-label"
    );


    /* =====================================================
       PREPARE PATHS
    ===================================================== */

    paths.forEach(path => {

        const length =
            path.getTotalLength();

        path.style.strokeDasharray =
            length;

        path.style.strokeDashoffset =
            length;

    });


    /* =====================================================
       INITIAL STATE
    ===================================================== */

    gsap.set(eventNodes, {
        opacity: 0,
        scale: 0,
        transformOrigin: "center center"
    });

    gsap.set(systemNodes, {
        opacity: 0
    });

    gsap.set(labels, {
        opacity: 0,
        y: 8
    });


    /* =====================================================
       TIMELINE
    ===================================================== */

    const tl = gsap.timeline({
        delay: 0.35
    });


    /* =====================================================
       1 — MAIN NETWORK
    ===================================================== */

    tl.to(
        ".path-main",
        {
            strokeDashoffset: 0,
            duration: 1.1,
            ease: "power2.out"
        }
    );


    /* FOSS FEST NODE */

    tl.to(
        ".node-foss",
        {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "back.out(2)"
        },
        "-=0.15"
    );


    /* FOSS FEST LABEL */

    tl.to(
        ".foss-label",
        {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power2.out"
        },
        "-=0.15"
    );


    /* =====================================================
       2 — VIVITSU
    ===================================================== */

    tl.to(
        ".path-vivitsu",
        {
            strokeDashoffset: 0,
            duration: 1.1,
            ease: "power2.out"
        }
    );


    tl.to(
        ".node-vivitsu",
        {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "back.out(2)"
        },
        "-=0.15"
    );


    tl.to(
        ".vivitsu-label",
        {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power2.out"
        },
        "-=0.15"
    );


    /* =====================================================
       3 — LOWER NETWORK BRANCH
    ===================================================== */

    tl.to(
        ".path-lower",
        {
            strokeDashoffset: 0,
            duration: 0.75,
            ease: "power2.out"
        }
    );


    /* =====================================================
       4 — CYBER SECURITY
    ===================================================== */

    tl.to(
        ".path-cyber",
        {
            strokeDashoffset: 0,
            duration: 1,
            ease: "power2.out"
        }
    );


    tl.to(
        ".node-cyber",
        {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "back.out(2)"
        },
        "-=0.15"
    );


    tl.to(
        ".cyber-label",
        {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power2.out"
        },
        "-=0.15"
    );


    /* =====================================================
       5 — TECH-BOLA
    ===================================================== */

    tl.to(
        ".path-tech",
        {
            strokeDashoffset: 0,
            duration: 1,
            ease: "power2.out"
        }
    );


    tl.to(
        ".node-tech",
        {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "back.out(2)"
        },
        "-=0.15"
    );


    tl.to(
        ".tech-label",
        {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power2.out"
        },
        "-=0.15"
    );


    /* =====================================================
       6 — SECONDARY NETWORK
    ===================================================== */

    tl.to(
        [
            ".path-secondary-1",
            ".path-secondary-2",
            ".path-secondary-3",
            ".path-secondary-4",
            ".micro-path"
        ],
        {
            strokeDashoffset: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power1.out"
        }
    );


    /* =====================================================
       7 — SMALL SYSTEM NODES
    ===================================================== */

    tl.to(
        systemNodes,
        {
            opacity: 1,
            duration: 0.35,
            stagger: 0.08,
            ease: "power1.out"
        },
        "-=0.5"
    );

}

    /* -----------------------------------------------------
       Initial state
    ----------------------------------------------------- */

    paths.forEach(path => {

        const length =
            path.getTotalLength();

        path.style.strokeDasharray =
            length;

        path.style.strokeDashoffset =
            length;

    });


    /* -----------------------------------------------------
       GSAP timeline
    ----------------------------------------------------- */

    if (!window.gsap) {

        console.warn(
            "GSAP is not available."
        );

        return;
    }


    const tl =
        window.gsap.timeline();


    /* =====================================================
       1 — MAIN LINE
    ===================================================== */

    tl.to(
        paths[0],
        {
            strokeDashoffset: 0,
            duration: 0.8,
            ease: "power2.out"
        }
    );


    /* MAIN NODE */

    tl.to(
        nodes[0],
        {
            opacity: 1,
            duration: 0.2,
            ease: "none"
        },
        "-=0.15"
    );


    /* FOSS */

    tl.to(
        labels[1],
        {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power2.out"
        },
        "-=0.1"
    );


    /* =====================================================
       2 — VIVITSU BRANCH
    ===================================================== */

    tl.to(
        paths[1],
        {
            strokeDashoffset: 0,
            duration: 0.9,
            ease: "power2.out"
        }
    );


    tl.to(
        nodes[1],
        {
            opacity: 1,
            duration: 0.2
        },
        "-=0.15"
    );


    tl.to(
        labels[0],
        {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out"
        },
        "-=0.1"
    );


    /* =====================================================
       3 — VERTICAL BRANCH
    ===================================================== */

    tl.to(
        paths[2],
        {
            strokeDashoffset: 0,
            duration: 0.65,
            ease: "power2.out"
        }
    );


    /* =====================================================
       4 — CYBER SECURITY
    ===================================================== */

    tl.to(
        paths[3],
        {
            strokeDashoffset: 0,
            duration: 0.8,
            ease: "power2.out"
        }
    );


    tl.to(
        nodes[2],
        {
            opacity: 1,
            duration: 0.2
        },
        "-=0.15"
    );


    tl.to(
        labels[2],
        {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out"
        },
        "-=0.1"
    );


    /* =====================================================
       5 — TECH-BOLA
    ===================================================== */

    tl.to(
        paths[4],
        {
            strokeDashoffset: 0,
            duration: 0.8,
            ease: "power2.out"
        }
    );


    tl.to(
        nodes[3],
        {
            opacity: 1,
            duration: 0.2
        },
        "-=0.15"
    );


    tl.to(
        labels[3],
        {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out"
        },
        "-=0.1"
    );




/* =========================================================
   DOM READY
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadNavbar();

        initEventNetwork();

    }
);