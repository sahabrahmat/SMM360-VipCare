/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : login.js
   MODULE      : Authentication
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت صفحه ورود

========================================================== */


/* ================================================= */
/* SECTION ID : LOGIN-JS-001                         */
/* INITIALIZATION                                    */
/* راه‌اندازی صفحه                                   */
/* ================================================= */

document.addEventListener("DOMContentLoaded", initializeLogin);


/* ================================================= */
/* SECTION ID : LOGIN-JS-002                         */
/* INITIALIZE LOGIN                                  */
/* مقداردهی اولیه                                    */
/* ================================================= */

function initializeLogin() {

    document
        .getElementById("loginForm")
        .addEventListener("submit", loginSystem);

}


/* ================================================= */
/* SECTION ID : LOGIN-JS-003                         */
/* LOGIN SYSTEM                                      */
/* ورود به سامانه                                    */
/* ================================================= */

function loginSystem(event) {

    event.preventDefault();

    const username = document.getElementById("username").value.trim();

    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {

        alert("لطفاً نام کاربری و رمز عبور را وارد نمایید.");

        return;

    }

    // در نسخه‌های بعدی اعتبارسنجی از پایگاه داده انجام خواهد شد.

    window.location.href = "lock-screen.html";

}