/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : dashboard-landing.js
   MODULE      : Dashboard Landing
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت صفحه اصلی داشبورد

========================================================== */


/* ================================================= */
/* SECTION ID : DASHBOARD-LANDING-JS-001             */
/* INITIALIZATION                                    */
/* راه‌اندازی صفحه                                   */
/* ================================================= */

document.addEventListener("DOMContentLoaded", initializeLanding);


/* ================================================= */
/* SECTION ID : DASHBOARD-LANDING-JS-002             */
/* INITIALIZE                                        */
/* مقداردهی اولیه                                    */
/* ================================================= */

function initializeLanding() {

    registerCards();

    showWelcomeMessage();

}


/* ================================================= */
/* SECTION ID : DASHBOARD-LANDING-JS-003             */
/* REGISTER EVENTS                                   */
/* ثبت رویدادها                                      */
/* ================================================= */

function registerCards() {

    const cards = document.querySelectorAll(".landing-card");

    cards.forEach(card => {

        card.addEventListener("click", openModule);

    });

}


/* ================================================= */
/* SECTION ID : DASHBOARD-LANDING-JS-004             */
/* OPEN MODULE                                       */
/* ورود به ماژول                                     */
/* ================================================= */

function openModule(event) {

    const moduleName = event.currentTarget
        .querySelector("h3")
        .innerText
        .trim();

    switch (moduleName) {

        case "پذیرش":
            alert("ماژول پذیرش");
            break;

        case "دستیار":
            alert("ماژول دستیار");
            break;

        case "هوش مصنوعی":
            alert("ماژول هوش مصنوعی");
            break;

        case "پزشک":
            alert("ماژول پزشک");
            break;

        case "روشنک":
            alert("ماژول روشنک");
            break;

        case "داروخانه":
            alert("ماژول داروخانه");
            break;

        default:
            alert("ماژول در دست توسعه است.");

    }

}


/* ================================================= */
/* SECTION ID : DASHBOARD-LANDING-JS-005             */
/* WELCOME                                           */
/* پیام خوش‌آمدگویی                                  */
/* ================================================= */

function showWelcomeMessage() {

    console.log("Welcome to SMM360 VIP Care Enterprise Edition");

}


/* ================================================= */
/* SECTION ID : DASHBOARD-LANDING-JS-006             */
/* VERSION                                           */
/* نسخه سیستم                                        */
/* ================================================= */

console.log("Version 0.0.1");