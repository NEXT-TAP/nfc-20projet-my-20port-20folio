/* =====================================================
   NEXT TAP — SCRIPT.JS
===================================================== */


/* =====================================================
   CONTACT CONFIG
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
   HEADER SCROLL
===================================================== */

const header = document.getElementById("header");

function updateHeader() {
    if (!header) return;

    header.classList.toggle(
        "scrolled",
        window.scrollY > 30
    );
}

window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
);

updateHeader();


/* =====================================================
   MOBILE MENU
===================================================== */

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const mainNav =
    document.getElementById("mainNav");

if (mobileMenuBtn && mainNav) {

    mobileMenuBtn.addEventListener(
        "click",
        function () {

            const isOpen =
                mainNav.classList.toggle(
                    "mobile-open"
                );

            mobileMenuBtn.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            mobileMenuBtn.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        }
    );


    mainNav
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                function () {

                    mainNav.classList.remove(
                        "mobile-open"
                    );

                    mobileMenuBtn.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    mobileMenuBtn.innerHTML =
                        '<i class="fa-solid fa-bars"></i>';
                }
            );
        });


    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 950) {

                mainNav.classList.remove(
                    "mobile-open"
                );

                mobileMenuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                mobileMenuBtn.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';
            }
        }
    );
}


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

                    if (
                        entry.isIntersecting
                    ) {

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
   VCARD
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

        `FN:${escapeVCard(
            fullName
        )}`,

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


/* =====================================================
   SAVE CONTACT BUTTON
===================================================== */

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
   TRANSLATIONS
===================================================== */

const translations = {

    fr: {

        nav: {
            services: "Services",
            how: "Comment ça marche",
            portfolio: "Portfolio",
            contact: "Contact",
            whatsapp: "WhatsApp"
        },

        hero: {

            eyebrow:
                "NEXT TAP • DIGITAL SOLUTIONS",

            title1:
                "Digital Presence.",

            title2:
                "One Tap Away.",

            description:
                "Des cartes NFC et des pages digitales professionnelles, adaptées à chaque activité. Une seule carte pour présenter votre marque, vos services, vos réseaux et votre contact.",

            whatsapp:
                "Discuter sur WhatsApp",

            portfolio:
                "Voir le portfolio",

            nfc:
                "NFC Cards",

            pages:
                "Digital Pages",

            qr:
                "QR Code",

            social:
                "Social Links",

            maps:
                "Google Maps"
        },

        services: {

            label:
                "NOS SERVICES",

            title1:
                "Votre business.",

            title2:
                "Votre identité digitale.",

            description:
                "Une solution pensée pour donner à chaque activité une présentation moderne et professionnelle.",

            card1:
                "Carte NFC",

            card1p:
                "Une carte physique premium qui ouvre votre profil digital en un simple tap.",

            card2:
                "Profil digital",

            card2p:
                "Une page personnalisée avec logo, photos, services, réseaux et informations.",

            card3:
                "Enregistrer le contact",

            card3p:
                "Le client peut sauvegarder directement votre contact dans son téléphone.",

            card4:
                "QR Code",

            card4p:
                "Votre profil reste accessible même lorsque le client utilise le QR Code.",

            card5:
                "Réseaux sociaux",

            card5p:
                "Instagram, WhatsApp, Facebook, TikTok et tous vos liens réunis au même endroit.",

            card6:
                "Localisation",

            card6p:
                "Google Maps, horaires et informations utiles pour permettre au client de vous trouver."
        },

        how: {

            label:
                "SIMPLE • RAPIDE • MODERNE",

            title:
                "Comment ça marche ?",

            step1:
                "Tap",

            step1p:
                "Le client approche son smartphone de votre carte NFC.",

            step2:
                "Découvre",

            step2p:
                "Votre profil digital s'ouvre avec votre identité et vos informations.",

            step3:
                "Enregistre",

            step3p:
                "Le client peut sauvegarder votre contact directement dans son téléphone."
        },

        portfolio: {

            label:
                "PORTFOLIO",

            title1:
                "Un design adapté",

            title2:
                "à chaque activité.",

            description:
                "Voici comment Next Tap peut présenter une même solution pour des métiers complètement différents.",

            tag:
                "BRAND • NFC • DIGITAL",

            example:
                "EXEMPLE",

            restaurant:
                "Restaurant",

            restaurantCover:
                "Menu • Réservation • WhatsApp",

            restaurantp:
                "Menu digital & réservation",

            rental:
                "Location de voitures",

            rentalCover:
                "Catalogue • Contact • Localisation",

            rentalp:
                "Catalogue & réservation",

            construction:
                "Entreprise / Construction",

            constructionCover:
                "Entreprise • Services • Contact",

            constructionp:
                "Présentation professionnelle",

            freelancer:
                "Freelancer",

            freelancerCover:
                "Portfolio • Services • Contact",

            freelancerp:
                "Portfolio & liens",

            cafe:
                "Café",

            cafeCover:
                "Menu • Instagram • Maps",

            cafep:
                "Menu & présence digitale",

            barber:
                "Barber",

            barberCover:
                "Services • Réservation • WhatsApp",

            barberp:
                "Services & réservation",

            nexttap:
                "Next Tap",

            nexttapdesc:
                "Carte NFC • Profil digital • QR Code • Social Links"
        },

        why: {

            label:
                "POURQUOI NEXT TAP ?",

            title1:
                "Une carte physique.",

            title2:
                "Un univers digital.",

            description:
                "Le client ne reçoit pas uniquement votre numéro. Il découvre votre marque, vos services, vos photos, vos réseaux, votre localisation et peut enregistrer votre contact en quelques secondes.",

            benefit1:
                "Sans application",

            benefit2:
                "NFC + QR Code",

            benefit3:
                "Design personnalisé",

            benefit4:
                "Contact sauvegardable",

            benefit5:
                "WhatsApp & réseaux",

            benefit6:
                "Adapté à chaque activité",

            phoneTitle:
                "Votre Business",

            phoneDescription:
                "Votre présence digitale au même endroit.",

            whatsapp:
                "WhatsApp",

            instagram:
                "Instagram",

            save:
                "Enregistrer le contact",

            location:
                "Localisation"
        },

        cta: {

            label:
                "NEXT TAP • DIGITAL SOLUTIONS",

            title1:
                "Votre business mérite",

            title2:
                "une présence digitale forte.",

            description:
                "Créons une carte NFC et un profil digital adaptés à votre activité.",

            whatsapp:
                "Commander sur WhatsApp",

            top:
                "Retour en haut"
        },

        footer: {

            text:
                "Digital Presence • One Tap Away.",

            copyright:
                "© 2026 Next Tap. Tous droits réservés."
        }
    },


    en: {

        nav: {
            services: "Services",
            how: "How it works",
            portfolio: "Portfolio",
            contact: "Contact",
            whatsapp: "WhatsApp"
        },

        hero: {

            eyebrow:
                "NEXT TAP • DIGITAL SOLUTIONS",

            title1:
                "Digital Presence.",

            title2:
                "One Tap Away.",

            description:
                "Professional NFC cards and digital pages tailored to every business. One card to showcase your brand, services, social networks and contact details.",

            whatsapp:
                "Chat on WhatsApp",

            portfolio:
                "View portfolio",

            nfc:
                "NFC Cards",

            pages:
                "Digital Pages",

            qr:
                "QR Code",

            social:
                "Social Links",

            maps:
                "Google Maps"
        },

        services: {

            label:
                "OUR SERVICES",

            title1:
                "Your business.",

            title2:
                "Your digital identity.",

            description:
                "A solution designed to give every business a modern and professional presentation.",

            card1:
                "NFC Card",

            card1p:
                "A premium physical card that opens your digital profile with a simple tap.",

            card2:
                "Digital Profile",

            card2p:
                "A personalized page with your logo, photos, services, social links and information.",

            card3:
                "Save Contact",

            card3p:
                "Your customer can save your contact directly to their phone.",

            card4:
                "QR Code",

            card4p:
                "Your profile remains accessible even when customers use the QR Code.",

            card5:
                "Social Media",

            card5p:
                "Instagram, WhatsApp, Facebook, TikTok and all your links in one place.",

            card6:
                "Location",

            card6p:
                "Google Maps, opening hours and useful information to help customers find you."
        },

        how: {

            label:
                "SIMPLE • FAST • MODERN",

            title:
                "How does it work?",

            step1:
                "Tap",

            step1p:
                "The customer brings their smartphone close to your NFC card.",

            step2:
                "Discover",

            step2p:
                "Your digital profile opens with your identity and information.",

            step3:
                "Save",

            step3p:
                "The customer can save your contact directly to their phone."
        },

        portfolio: {

            label:
                "PORTFOLIO",

            title1:
                "A design tailored",

            title2:
                "to every business.",

            description:
                "See how Next Tap can present the same solution for completely different businesses.",

            tag:
                "BRAND • NFC • DIGITAL",

            example:
                "EXAMPLE",

            restaurant:
                "Restaurant",

            restaurantCover:
                "Menu • Booking • WhatsApp",

            restaurantp:
                "Digital menu & reservation",

            rental:
                "Car Rental",

            rentalCover:
                "Catalog • Contact • Location",

            rentalp:
                "Catalog & booking",

            construction:
                "Construction Company",

            constructionCover:
                "Company • Services • Contact",

            constructionp:
                "Professional presentation",

            freelancer:
                "Freelancer",

            freelancerCover:
                "Portfolio • Services • Contact",

            freelancerp:
                "Portfolio & links",

            cafe:
                "Café",

            cafeCover:
                "Menu • Instagram • Maps",

            cafep:
                "Menu & digital presence",

            barber:
                "Barber",

            barberCover:
                "Services • Booking • WhatsApp",

            barberp:
                "Services & booking",

            nexttap:
                "Next Tap",

            nexttapdesc:
                "NFC Card • Digital Profile • QR Code • Social Links"
        },

        why: {

            label:
                "WHY NEXT TAP?",

            title1:
                "One physical card.",

            title2:
                "One digital universe.",

            description:
                "Your customer gets more than just your phone number. They discover your brand, services, photos, social networks and location, and can save your contact in seconds.",

            benefit1:
                "No application",

            benefit2:
                "NFC + QR Code",

            benefit3:
                "Custom design",

            benefit4:
                "Saveable contact",

            benefit5:
                "WhatsApp & social media",

            benefit6:
                "Adapted to every business",

            phoneTitle:
                "Your Business",

            phoneDescription:
                "Your digital presence in one place.",

            whatsapp:
                "WhatsApp",

            instagram:
                "Instagram",

            save:
                "Save contact",

            location:
                "Location"
        },

        cta: {

            label:
                "NEXT TAP • DIGITAL SOLUTIONS",

            title1:
                "Your business deserves",

            title2:
                "a strong digital presence.",

            description:
                "Let's create an NFC card and digital profile tailored to your business.",

            whatsapp:
                "Order on WhatsApp",

            top:
                "Back to top"
        },

        footer: {

            text:
                "Digital Presence • One Tap Away.",

            copyright:
                "© 2026 Next Tap. All rights reserved."
        }
    },


    ar: {

        nav: {
            services: "الخدمات",
            how: "كيف تعمل؟",
            portfolio: "أعمالنا",
            contact: "اتصل بنا",
            whatsapp: "واتساب"
        },

        hero: {

            eyebrow:
                "NEXT TAP • حلول رقمية",

            title1:
                "حضورك الرقمي.",

            title2:
                "بلمسة واحدة.",

            description:
                "بطاقات NFC وصفحات رقمية احترافية مصممة حسب نشاطك. بطاقة واحدة لعرض علامتك التجارية وخدماتك وروابط التواصل ومعلومات الاتصال.",

            whatsapp:
                "تواصل معنا عبر واتساب",

            portfolio:
                "شاهد أعمالنا",

            nfc:
                "بطاقات NFC",

            pages:
                "صفحات رقمية",

            qr:
                "رمز QR",

            social:
                "روابط التواصل",

            maps:
                "خرائط Google"
        },

        services: {

            label:
                "خدماتنا",

            title1:
                "مشروعك.",

            title2:
                "هويتك الرقمية.",

            description:
                "حل متكامل يمنح كل نشاط تجاري حضوراً عصرياً واحترافياً.",

            card1:
                "بطاقة NFC",

            card1p:
                "بطاقة مميزة تفتح ملفك الرقمي بلمسة واحدة.",

            card2:
                "الملف الرقمي",

            card2p:
                "صفحة مخصصة تحتوي على الشعار والصور والخدمات وروابط التواصل والمعلومات.",

            card3:
                "حفظ جهة الاتصال",

            card3p:
                "يمكن للعميل حفظ معلومات الاتصال الخاصة بك مباشرة في هاتفه.",

            card4:
                "رمز QR",

            card4p:
                "يبقى ملفك الرقمي متاحاً حتى عند استخدام العميل لرمز QR.",

            card5:
                "شبكات التواصل",

            card5p:
                "Instagram وWhatsApp وFacebook وTikTok وجميع روابطك في مكان واحد.",

            card6:
                "الموقع",

            card6p:
                "Google Maps وساعات العمل والمعلومات المهمة لمساعدة العملاء على الوصول إليك."
        },

        how: {

            label:
                "بسيط • سريع • عصري",

            title:
                "كيف تعمل؟",

            step1:
                "المس",

            step1p:
                "يقرب العميل هاتفه من بطاقة NFC الخاصة بك.",

            step2:
                "اكتشف",

            step2p:
                "يفتح ملفك الرقمي وتظهر هويتك ومعلوماتك.",

            step3:
                "احفظ",

            step3p:
                "يمكن للعميل حفظ معلومات الاتصال الخاصة بك مباشرة في هاتفه."
        },

        portfolio: {

            label:
                "أعمالنا",

            title1:
                "تصميم مناسب",

            title2:
                "لكل نشاط.",

            description:
                "شاهد كيف يمكن لـ Next Tap تقديم نفس الحل لمجالات وأنشطة مختلفة.",

            tag:
                "علامة تجارية • NFC • رقمي",

            example:
                "مثال",

            nexttap:
                "Next Tap",

            nexttapdesc:
                "بطاقة NFC • ملف رقمي • QR Code • روابط التواصل",

            restaurant:
                "مطعم",

            restaurantCover:
                "قائمة • حجز • واتساب",

            restaurantp:
                "قائمة رقمية وحجز",

            rental:
                "تأجير السيارات",

            rentalCover:
                "كتالوج • اتصال • موقع",

            rentalp:
                "كتالوج وحجز",

            construction:
                "شركة بناء",

            constructionCover:
                "شركة • خدمات • اتصال",

            constructionp:
                "عرض احترافي للشركة",

            freelancer:
                "مستقل",

            freelancerCover:
                "أعمال • خدمات • اتصال",

            freelancerp:
                "أعمال وروابط",

            cafe:
                "مقهى",

            cafeCover:
                "قائمة • إنستغرام • خرائط",

            cafep:
                "قائمة وحضور رقمي",

            barber:
                "حلاق",

            barberCover:
                "خدمات • حجز • واتساب",

            barberp:
                "الخدمات والحجز"
        },

        why: {

            label:
                "لماذا NEXT TAP؟",

            title1:
                "بطاقة واحدة.",

            title2:
                "عالم رقمي متكامل.",

            description:
                "العميل لا يحصل فقط على رقم هاتفك. بل يكتشف علامتك التجارية وخدماتك وصورك وشبكاتك الاجتماعية وموقعك، ويمكنه حفظ معلومات الاتصال خلال ثوانٍ.",

            benefit1:
                "بدون تطبيق",

            benefit2:
                "NFC + QR Code",

            benefit3:
                "تصميم مخصص",

            benefit4:
                "حفظ جهة الاتصال",

            benefit5:
                "واتساب وشبكات التواصل",

            benefit6:
                "مناسب لكل نشاط",

            phoneTitle:
                "مشروعك",

            phoneDescription:
                "حضورك الرقمي في مكان واحد.",

            whatsapp:
                "واتساب",

            instagram:
                "إنستغرام",

            save:
                "حفظ جهة الاتصال",

            location:
                "الموقع"
        },

        cta: {

            label:
                "NEXT TAP • حلول رقمية",

            title1:
                "مشروعك يستحق",

            title2:
                "حضوراً رقمياً قوياً.",

            description:
                "لنصمم لك بطاقة NFC وملفاً رقمياً مناسباً لنشاطك.",

            whatsapp:
                "اطلب عبر واتساب",

            top:
                "العودة إلى الأعلى"
        },

        footer: {

            text:
                "حضور رقمي • بلمسة واحدة.",

            copyright:
                "© 2026 Next Tap. جميع الحقوق محفوظة."
        }
    }
};


/* =====================================================
   TRANSLATION HELPER
===================================================== */

function getTranslation(language, key) {

    const parts = key.split(".");

    let value =
        translations[language];

    for (const part of parts) {

        if (
            value &&
            Object.prototype.hasOwnProperty.call(
                value,
                part
            )
        ) {

            value = value[part];

        } else {

            return null;
        }
    }

    return value;
}


/* =====================================================
   APPLY LANGUAGE
===================================================== */

function applyLanguage(language) {

    if (!translations[language]) {
        language = "fr";
    }


    document.documentElement.lang =
        language;

    document.documentElement.dir =
        language === "ar"
            ? "rtl"
            : "ltr";


    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;

            const translation =
                getTranslation(
                    language,
                    key
                );

            if (
                translation !== null
            ) {

                element.textContent =
                    translation;
            }
        });


    const currentLanguage =
        document.getElementById(
            "languageCurrent"
        );


    if (currentLanguage) {

        currentLanguage.textContent =
            language.toUpperCase();
    }


    document
        .querySelectorAll(
            ".language-option"
        )
        .forEach(option => {

            option.classList.toggle(
                "active",
                option.dataset.lang ===
                    language
            );
        });


    localStorage.setItem(
        "nextTapLanguage",
        language
    );
}


/* =====================================================
   LANGUAGE SWITCHER
===================================================== */

const languageSwitcher =
    document.getElementById(
        "languageSwitcher"
    );

const languageToggle =
    document.getElementById(
        "languageToggle"
    );


if (
    languageSwitcher &&
    languageToggle
) {

    languageToggle.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            languageSwitcher.classList.toggle(
                "open"
            );
        }
    );


    document
        .querySelectorAll(
            ".language-option"
        )
        .forEach(option => {

            option.addEventListener(
                "click",
                function () {

                    const language =
                        option.dataset.lang;

                    applyLanguage(
                        language
                    );

                    languageSwitcher.classList.remove(
                        "open"
                    );
                }
            );
        });


    document.addEventListener(
        "click",
        function (event) {

            if (
                !languageSwitcher.contains(
                    event.target
                )
            ) {

                languageSwitcher.classList.remove(
                    "open"
                );
            }
        }
    );
}


/* =====================================================
   LOAD SAVED LANGUAGE
===================================================== */

const savedLanguage =
    localStorage.getItem(
        "nextTapLanguage"
    ) || "fr";

applyLanguage(
    savedLanguage
);


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
            function (event) {

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
                    document.querySelector(
                        id
                    );


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        );
    });


/* =====================================================
   KEYBOARD ACCESSIBILITY
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            if (languageSwitcher) {
                languageSwitcher.classList.remove(
                    "open"
                );
            }

            if (mainNav) {
                mainNav.classList.remove(
                    "mobile-open"
                );
            }

            if (mobileMenuBtn) {

                mobileMenuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                mobileMenuBtn.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';
            }
        }
    }
);