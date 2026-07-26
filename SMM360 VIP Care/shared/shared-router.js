/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : shared-router.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت مسیریابی (Routing) سراسری سیستم

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-ROUTER-001                    */
/* ROUTE TABLE                                       */
/* جدول مسیرهای سیستم                                */
/* ================================================= */

const ROUTES = {

    dashboard      : "dashboard.html",

    reception       : "pages/reception/reception.html",

    assistant       : "pages/assistant/assistant.html",

    doctor          : "pages/doctor/doctor-home.html",

    treatment       : "pages/treatment/treatment.html",

    roshanak        : "pages/roshanak/roshanak.html",

    pharmacy        : "pages/pharmacy/pharmacy.html",

    laboratory      : "pages/laboratory/laboratory.html",

    radiology       : "pages/radiology/radiology.html",

    finance         : "pages/finance/finance.html",

    reports         : "pages/reports/reports.html",

    ai              : "pages/ai/ai-dashboard.html",

    informatics     : "pages/informatics/informatics.html",

    settings        : "pages/settings/settings.html"

};


/* ================================================= */
/* SECTION ID : SHARED-ROUTER-002                    */
/* GET ROUTE                                         */
/* دریافت مسیر                                       */
/* ================================================= */

function getRoute(name){

    return ROUTES[name] || null;

}


/* ================================================= */
/* SECTION ID : SHARED-ROUTER-003                    */
/* NAVIGATE                                          */
/* انتقال به صفحه                                    */
/* ================================================= */

function navigate(name){

    const route = getRoute(name);

    if(route){

        window.location.href = route;

    }

}


/* ================================================= */
/* SECTION ID : SHARED-ROUTER-004                    */
/* OPEN NEW TAB                                      */
/* باز کردن در تب جدید                               */
/* ================================================= */

function openRoute(name){

    const route = getRoute(name);

    if(route){

        window.open(route,"_blank");

    }

}


/* ================================================= */
/* SECTION ID : SHARED-ROUTER-005                    */
/* CURRENT PAGE                                      */
/* صفحه جاری                                         */
/* ================================================= */

function getCurrentPage(){

    return window.location.pathname.split("/").pop();

}


/* ================================================= */
/* SECTION ID : SHARED-ROUTER-006                    */
/* CHECK ROUTE                                       */
/* بررسی وجود مسیر                                   */
/* ================================================= */

function hasRoute(name){

    return Object.prototype.hasOwnProperty.call(

        ROUTES,

        name

    );

}


/* ================================================= */
/* SECTION ID : SHARED-ROUTER-007                    */
/* EXPORT                                            */
/* دسترسی عمومی                                      */
/* ================================================= */

window.ROUTES = ROUTES;

window.getRoute = getRoute;

window.navigate = navigate;

window.openRoute = openRoute;

window.getCurrentPage = getCurrentPage;

window.hasRoute = hasRoute;


/* ================================================= */
/* SECTION ID : SHARED-ROUTER-999                    */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */