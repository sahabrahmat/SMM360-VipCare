/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : informatics.js
   MODULE      : Informatics
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت داشبورد واحد انفورماتیک

========================================================== */


/* ================================================= */
/* SECTION ID : INFORMATICS-JS-001                   */
/* INITIALIZATION                                    */
/* ================================================= */

document.addEventListener("DOMContentLoaded",initialize);


/* ================================================= */
/* SECTION ID : INFORMATICS-JS-002                   */
/* INITIALIZE                                        */
/* ================================================= */

function initialize(){

loadStatistics();

registerEvents();

}


/* ================================================= */
/* SECTION ID : INFORMATICS-JS-003                   */
/* LOAD DASHBOARD                                    */
/* ================================================= */

function loadStatistics(){

document.getElementById("userCount").innerText="0";

document.getElementById("roleCount").innerText="0";

document.getElementById("sessionCount").innerText="0";

document.getElementById("auditCount").innerText="0";

}


/* ================================================= */
/* SECTION ID : INFORMATICS-JS-004                   */
/* EVENTS                                            */
/* ================================================= */

function registerEvents(){

document.getElementById("dashboardBtn").onclick=()=>alert("داشبورد");

document.getElementById("usersBtn").onclick=()=>alert("مدیریت کاربران");

document.getElementById("rolesBtn").onclick=()=>alert("مدیریت نقش‌ها");

document.getElementById("permissionsBtn").onclick=()=>alert("مدیریت مجوزها");

document.getElementById("sessionsBtn").onclick=()=>alert("نشست کاربران");

document.getElementById("auditBtn").onclick=()=>alert("گزارش فعالیت");

document.getElementById("apiBtn").onclick=()=>alert("مدیریت API");

document.getElementById("backupBtn").onclick=()=>alert("پشتیبان‌گیری");

document.getElementById("settingsBtn").onclick=()=>alert("تنظیمات");

document.getElementById("homeBtn").onclick=function(){

window.location.href="../dashboard/dashboard.html";

};

}


/* ================================================= */
/* SECTION ID : INFORMATICS-JS-005                   */
/* VERSION                                           */
/* ================================================= */

console.log("SMM360 VIP Care | Informatics Module | Version 0.0.1");


/* ================================================= */
/* SECTION ID : INFORMATICS-JS-999                   */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */