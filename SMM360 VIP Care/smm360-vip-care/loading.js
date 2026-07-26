/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : loading.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت صفحه بارگذاری سراسری سیستم

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-LOADING-JS-001                */
/* متغیرهای اصلی                                     */
/* ================================================= */

let loadingValue = 0;

let loadingTimer = null;


/* ================================================= */
/* SECTION ID : SHARED-LOADING-JS-002                */
/* شروع بارگذاری                                     */
/* ================================================= */

function startLoading(){

    const bar = document.getElementById("loadingBar");

    const percent = document.getElementById("loadingPercent");

    loadingValue = 0;

    loadingTimer = setInterval(function(){

        loadingValue++;

        if(bar){

            bar.style.width = loadingValue + "%";

        }

        if(percent){

            percent.innerHTML = loadingValue + "%";

        }

        if(loadingValue >= 100){

            stopLoading();

        }

    },20);

}


/* ================================================= */
/* SECTION ID : SHARED-LOADING-JS-003                */
/* توقف بارگذاری                                     */
/* ================================================= */

function stopLoading(){

    clearInterval(loadingTimer);

}


/* ================================================= */
/* SECTION ID : SHARED-LOADING-JS-004                */
/* نمایش صفحه بارگذاری                               */
/* ================================================= */

function showLoading(){

    const loader = document.getElementById("sharedLoader");

    if(loader){

        loader.style.display="flex";

    }

}


/* ================================================= */
/* SECTION ID : SHARED-LOADING-JS-005                */
/* مخفی کردن صفحه بارگذاری                           */
/* ================================================= */

function hideLoading(){

    const loader = document.getElementById("sharedLoader");

    if(loader){

        loader.style.display="none";

    }

}


/* ================================================= */
/* SECTION ID : SHARED-LOADING-JS-006                */
/* تغییر متن وضعیت                                   */
/* ================================================= */

function setLoadingMessage(message){

    const element=document.getElementById("loadingMessage");

    if(element){

        element.innerHTML=message;

    }

}


/* ================================================= */
/* SECTION ID : SHARED-LOADING-JS-007                */
/* تنظیم درصد                                        */
/* ================================================= */

function setLoadingPercent(value){

    const bar=document.getElementById("loadingBar");

    const percent=document.getElementById("loadingPercent");

    loadingValue=value;

    if(bar){

        bar.style.width=value+"%";

    }

    if(percent){

        percent.innerHTML=value+"%";

    }

}


/* ================================================= */
/* SECTION ID : SHARED-LOADING-JS-008                */
/* راه‌اندازی اولیه                                  */
/* ================================================= */

document.addEventListener("DOMContentLoaded",function(){

    startLoading();

});


/* ================================================= */
/* SECTION ID : SHARED-LOADING-JS-009                */
/* دسترسی عمومی                                      */
/* ================================================= */

window.startLoading = startLoading;

window.stopLoading = stopLoading;

window.showLoading = showLoading;

window.hideLoading = hideLoading;

window.setLoadingMessage = setLoadingMessage;

window.setLoadingPercent = setLoadingPercent;


/* ================================================= */
/* SECTION ID : SHARED-LOADING-JS-999                */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */