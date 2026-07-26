/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : lock-screen.js
   MODULE      : Security
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت صفحه قفل سیستم

========================================================== */


/* ================================================= */
/* SECTION ID : LOCKSCREEN-JS-001                    */
/* INITIALIZATION                                    */
/* راه‌اندازی صفحه                                   */
/* ================================================= */

document.addEventListener("DOMContentLoaded", initializeLockScreen);


/* ================================================= */
/* SECTION ID : LOCKSCREEN-JS-002                    */
/* INITIALIZE                                        */
/* مقداردهی اولیه                                    */
/* ================================================= */

function initializeLockScreen() {

    document
        .getElementById("unlockForm")
        .addEventListener("submit", unlockSystem);

    document
        .getElementById("unlockPassword")
        .focus();

}


/* ================================================= */
/* SECTION ID : LOCKSCREEN-JS-003                    */
/* UNLOCK SYSTEM                                     */
/* باز کردن قفل سیستم                                */
/* ================================================= */

function unlockSystem(event) {

    event.preventDefault();

    const password = document
        .getElementById("unlockPassword")
        .value
        .trim();

    if (password === "") {

        alert("لطفاً رمز عبور را وارد نمایید.");

        return;

    }

    // در نسخه‌های بعدی اعتبارسنجی از پایگاه داده انجام خواهد شد.

    window.location.href = "dashboard.html";

}


/* ================================================= */
/* SECTION ID : LOCKSCREEN-JS-004                    */
/* ENTER KEY                                         */
/* ورود با کلید Enter                                */
/* ================================================= */

document.addEventListener("keydown", function(event){

    if(event.key === "Enter"){

        document.querySelector("button").click();

    }

});