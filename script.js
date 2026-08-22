/* =====================================================
   NEXT TAP CONFIG
===================================================== */

const CONTACT = {

    firstName: "Ayoub",

    lastName: "Mouaddine",

    phone: "+212717354208",

    email: "contact@nexttap.ma",

    company: "Next Tap",

    jobTitle: "Digital Solutions"

};


/* =====================================================
   HEADER
===================================================== */

const header =
    document.getElementById("header");


function updateHeader() {

    if (!header) return;

    header.classList.toggle(
        "scrolled",
        window.scrollY > 30
    );

}


window.addEventListener(
    "scroll",
    updateHeader
);


updateHeader();


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealItems =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            (entries, obs) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show"
                        );

                        obs.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealItems.forEach(item => {

        observer.observe(item);

    });

} else {

    revealItems.forEach(item => {

        item.classList.add("show");

    });

}


/* =====================================================
   VCF CONTACT
===================================================== */

function escapeVCard(value) {

    return String(value)
        .replace(/\\/g, "\\\\")
        .replace(/;/g, "\\;")
        .replace(/,/g, "\\,")
        .replace(/\n/g, "\\n");

}


function saveContact() {

    const fullName =
        `${CONTACT.firstName} ${CONTACT.lastName}`.trim();


    const vcard = [

        "BEGIN:VCARD",

        "VERSION:3.0",

        `N:${escapeVCard(
            CONTACT.lastName
        )};${escapeVCard(
            CONTACT.firstName
        )};;;`,

        `FN:${escapeVCard(fullName)}`,

        `ORG:${escapeVCard(
            CONTACT.company
        )}`,

        `TITLE:${escapeVCard(
            CONTACT.jobTitle
        )}`,

        `TEL;TYPE=CELL:${escapeVCard(
            CONTACT.phone
        )}`,

        `EMAIL:${escapeVCard(
            CONTACT.email
        )}`,

        "END:VCARD"

    ].join("\r\n");


    const blob =
        new Blob(
            [vcard],
            {
                type:
                    "text/vcard;charset=utf-8"
            }
        );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href = url;

    link.download =
        "Next-Tap-Contact.vcf";


    document.body.appendChild(link);

    link.click();

    link.remove();


    setTimeout(() => {

        URL.revokeObjectURL(url);

    }, 1000);

}


/* Save contact button */

const saveButton =
    document.getElementById(
        "saveContactBtn"
    );


if (saveButton) {

    saveButton.addEventListener(
        "click",
        saveContact
    );

}


/* =====================================================
   SMOOTH LINKS
===================================================== */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const id =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !id ||
                    id === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(id);


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({

                        behavior:
                            "smooth",

                        block:
                            "start"

                    });

                }

            }
        );

    });