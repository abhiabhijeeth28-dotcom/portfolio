/* ==========================
   PORTFOLIO JAVASCRIPT
========================== */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }, 800);
    }
});

/* ==========================
   PARTICLES.JS
========================== */

if (document.getElementById("particles-js")) {

    particlesJS("particles-js", {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },

            color: {
                value: "#818cf8"
            },

            shape: {
                type: "circle"
            },

            opacity: {
                value: 0.4,
                random: true
            },

            size: {
                value: 3,
                random: true
            },

            line_linked: {
                enable: true,
                distance: 150,
                color: "#6366f1",
                opacity: 0.2,
                width: 1
            },

            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out"
            }
        },

        interactivity: {

            detect_on: "canvas",

            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },

                onclick: {
                    enable: true,
                    mode: "push"
                },

                resize: true
            },

            modes: {

                grab: {
                    distance: 180,
                    line_linked: {
                        opacity: 0.5
                    }
                },

                push: {
                    particles_nb: 4
                }
            }
        },

        retina_detect: true
    });
}

/* ==========================
   CURSOR GLOW EFFECT
========================== */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    if (glow) {

        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
    }

});

/* ==========================
   THEME SWITCHER
========================== */

const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");

    if (themeBtn) {
        themeBtn.innerHTML =
            '<i class="fas fa-sun"></i>';
    }
}

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        const isLight =
            document.body.classList.contains("light");

        if (isLight) {

            localStorage.setItem("theme", "light");

            themeBtn.innerHTML =
                '<i class="fas fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "dark");

            themeBtn.innerHTML =
                '<i class="fas fa-moon"></i>';
        }

    });

}

/* ==========================
   IMAGE POPUP
========================== */

function openImage(src) {

    const modal =
        document.getElementById("imageModal");

    const popup =
        document.getElementById("popupImage");

    if (modal && popup) {

        popup.src = src;

        modal.style.display = "flex";

        document.body.style.overflow = "hidden";
    }
}

function closeImage() {

    const modal =
        document.getElementById("imageModal");

    if (modal) {

        modal.style.display = "none";

        document.body.style.overflow = "auto";
    }
}

/* ==========================
   CERTIFICATE POPUP
========================== */

function openCertificate() {

    const modal =
        document.getElementById("certificateModal");

    if (modal) {

        modal.style.display = "flex";

        document.body.style.overflow = "hidden";
    }
}

function closeCertificate() {

    const modal =
        document.getElementById("certificateModal");

    if (modal) {

        modal.style.display = "none";

        document.body.style.overflow = "auto";
    }
}

/* ==========================
   CLOSE MODAL ON OUTSIDE CLICK
========================== */

window.addEventListener("click", (e) => {

    const imageModal =
        document.getElementById("imageModal");

    const certificateModal =
        document.getElementById("certificateModal");

    if (e.target === imageModal) {
        closeImage();
    }

    if (e.target === certificateModal) {
        closeCertificate();
    }

});

/* ==========================
   ESC KEY CLOSE
========================== */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        closeImage();
        closeCertificate();
    }

});

/* ==========================
   SMOOTH ACTIVE NAVIGATION
========================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active");
        }

    });

});

/* ==========================
   FLOATING OBJECT PARALLAX
========================== */

const floatingObjects =
    document.querySelectorAll(".floating");

document.addEventListener("mousemove", (e) => {

    const x =
        (window.innerWidth / 2 - e.clientX) / 40;

    const y =
        (window.innerHeight / 2 - e.clientY) / 40;

    floatingObjects.forEach((item, index) => {

        const speed = (index + 1) * 0.5;

        item.style.transform =
            `translate(${x * speed}px,
             ${y * speed}px)`;

    });

});

/* ==========================
   CONTACT FORM INTEGRATION
========================== */
const contactForm = document.querySelector("form");

if (contactForm) {
    contactForm.addEventListener("submit", async function(e) {
        e.preventDefault(); // Prevent standard page reload

        const formElements = e.target;
        const data = new FormData(formElements);

        try {
            // Asynchronously shoot data off to Formspree backend
            const response = await fetch("https://formspree.io/f/xkoqvqzw", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert("Thank you for contacting me! I will get back to you soon.");
                contactForm.reset();
            } else {
                alert("Oops! There was a problem submitting your form. Please try again.");
            }
        } catch (error) {
            alert("Oops! There was a connectivity issue. Please check your internet network.");
        }
    });
}

/* ==========================
   REVEAL ANIMATION
========================== */

const revealElements =
    document.querySelectorAll(
        ".glass-card, .skill-card, .gallery img"
    );

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";
                }

            });

        },

        {
            threshold: 0.15
        }
    );

revealElements.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition =
        "all 0.8s ease";

    revealObserver.observe(item);

});

/* ==========================
   CONSOLE SIGNATURE
========================== */

console.log(
`
=========================================
  ABHIJEETH S PORTFOLIO
  AI • Backend • Computer Vision
=========================================
`
);