/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : index.js
   MODULE      : System Entry
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت صفحه آغازین

========================================================== */


/* ================================================= */
/* SECTION ID : SYSTEM-ENTRY-JS-001                  */
/* INITIALIZATION                                    */
/* راه‌اندازی صفحه                                   */
/* ================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const startButton = document.getElementById("btnStart");

    if (startButton) {

        startButton.addEventListener("click", () => {

            window.location.href = "login.html";

        });

    }

});