/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : dashboard.js
   MODULE      : Dashboard
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت داشبورد اصلی سیستم

========================================================== */


/* ================================================= */
/* SECTION ID : DASHBOARD-JS-001                     */
/* SYSTEM INITIALIZATION                             */
/* راه‌اندازی اولیه سیستم                            */
/* ================================================= */

document.addEventListener("DOMContentLoaded", initializeDashboard);


/* ================================================= */
/* SECTION ID : DASHBOARD-JS-002                     */
/* INITIALIZE DASHBOARD                              */
/* مقداردهی اولیه داشبورد                            */
/* ================================================= */

function initializeDashboard(){

    loadDashboardStatistics();

    registerButtonEvents();

    startClock();

}


/* ================================================= */
/* SECTION ID : DASHBOARD-JS-003                     */
/* LOAD DASHBOARD STATISTICS                         */
/* بارگذاری اطلاعات داشبورد                          */
/* ================================================= */

function loadDashboardStatistics(){

    document.getElementById("patientsCount").textContent = "0";

    document.getElementById("doctorCount").textContent = "0";

    document.getElementById("appointmentCount").textContent = "0";

    document.getElementById("roomCount").textContent = "0";

    document.getElementById("treatmentCount").textContent = "0";

    document.getElementById("prescriptionCount").textContent = "0";

    document.getElementById("onlineUsers").textContent = "1";

}


/* ================================================= */
/* SECTION ID : DASHBOARD-JS-004                     */
/* MENU EVENTS                                       */
/* مدیریت منوی داشبورد                               */
/* ================================================= */

function registerButtonEvents(){

    bindNavigation("receptionBtn","../reception/reception.html");

    bindNavigation("assistantBtn","../assistant/assistant.html");

    bindNavigation("doctorBtn","../doctor/doctor.html");

    bindNavigation("roshanakBtn","../roshanak/roshanak.html");

    bindNavigation("pharmacyBtn","../pharmacy/pharmacy.html");

    bindNavigation("financeBtn","../finance/finance.html");

    bindNavigation("informaticsBtn","../informatics/informatics.html");

    bindNavigation("warehouseBtn","../warehouse/warehouse.html");

    bindNavigation("studentsBtn","../students/students.html");

    bindNavigation("devicesBtn","../devices/devices.html");

    bindNavigation("communicationsBtn","../communications/communications.html");

    bindNavigation("aiBtn","../ai/ai.html");

    bindNavigation("ceoBtn","../ceo/ceo.html");

    bindNavigation("settingsBtn","../shared/system-config.html");

}


/* ================================================= */
/* SECTION ID : DASHBOARD-JS-005                     */
/* PAGE NAVIGATION                                   */
/* جابجایی بین صفحات                                 */
/* ================================================= */

function bindNavigation(buttonId,page){

    const button=document.getElementById(buttonId);

    if(button){

        button.addEventListener("click",()=>{

            window.location.href=page;

        });

    }

}


/* ================================================= */
/* SECTION ID : DASHBOARD-JS-006                     */
/* SYSTEM CLOCK                                      */
/* ساعت سیستم                                        */
/* ================================================= */

function startClock(){

    console.log("Dashboard Started : " + new Date().toLocaleString("fa-IR"));

}


/* ================================================= */
/* SECTION ID : DASHBOARD-JS-007                     */
/* DASHBOARD REFRESH                                 */
/* بروزرسانی داشبورد                                 */
/* ================================================= */

function refreshDashboard(){

    loadDashboardStatistics();

}


/* ================================================= */
/* SECTION ID : DASHBOARD-JS-008                     */
/* SYSTEM INFORMATION                                */
/* اطلاعات سیستم                                     */
/* ================================================= */

console.log("SMM360 VIP Care Enterprise Edition");

console.log("Dashboard Module Loaded Successfully");

console.log("Version : 0.0.1");


/* ================================================= */
/* SECTION ID : DASHBOARD-JS-999                     */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */