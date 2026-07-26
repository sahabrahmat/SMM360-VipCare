/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : shared-loader.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت بارگذاری (Loader) سیستم

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-LOADER-001                    */
/* LOADER STATE                                      */
/* وضعیت بارگذاری                                    */
/* ================================================= */

let loaderVisible = false;


/* ================================================= */
/* SECTION ID : SHARED-LOADER-002                    */
/* SHOW LOADER                                       */
/* نمایش بارگذاری                                    */
/* ================================================= */

function showLoader(){

    const loader = document.getElementById("sharedLoader");

    if(loader){

        loader.style.display = "flex";

        loaderVisible = true;

    }

}


/* ================================================= */
/* SECTION ID : SHARED-LOADER-003                    */
/* HIDE LOADER                                       */
/* مخفی کردن بارگذاری                                */
/* ================================================= */

function hideLoader(){

    const loader = document.getElementById("sharedLoader");

    if(loader){

        loader.style.display = "none";

        loaderVisible = false;

    }

}


/* ================================================= */
/* SECTION ID : SHARED-LOADER-004                    */
/* TOGGLE LOADER                                     */
/* تغییر وضعیت بارگذاری                              */
/* ================================================= */

function toggleLoader(){

    if(loaderVisible){

        hideLoader();

    }else{

        showLoader();

    }

}


/* ================================================= */
/* SECTION ID : SHARED-LOADER-005                    */
/* LOADER STATUS                                     */
/* وضعیت فعلی بارگذاری                               */
/* ================================================= */

function isLoaderVisible(){

    return loaderVisible;

}


/* ================================================= */
/* SECTION ID : SHARED-LOADER-006                    */
/* EXPORT                                            */
/* دسترسی عمومی                                      */
/* ================================================= */

window.showLoader = showLoader;

window.hideLoader = hideLoader;

window.toggleLoader = toggleLoader;

window.isLoaderVisible = isLoaderVisible;


/* ================================================= */
/* SECTION ID : SHARED-LOADER-999                    */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */