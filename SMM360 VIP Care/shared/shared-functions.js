/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : shared-functions.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   توابع عمومی و مشترک سیستم

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-FUNCTIONS-001                 */
/* REDIRECT PAGE                                     */
/* انتقال به صفحه                                    */
/* ================================================= */

function redirect(url){

    window.location.href = url;

}


/* ================================================= */
/* SECTION ID : SHARED-FUNCTIONS-002                 */
/* RELOAD PAGE                                       */
/* بارگذاری مجدد صفحه                                */
/* ================================================= */

function reloadPage(){

    window.location.reload();

}


/* ================================================= */
/* SECTION ID : SHARED-FUNCTIONS-003                 */
/* GO BACK                                           */
/* بازگشت به صفحه قبل                                */
/* ================================================= */

function goBack(){

    window.history.back();

}


/* ================================================= */
/* SECTION ID : SHARED-FUNCTIONS-004                 */
/* GO FORWARD                                        */
/* رفتن به صفحه بعد                                  */
/* ================================================= */

function goForward(){

    window.history.forward();

}


/* ================================================= */
/* SECTION ID : SHARED-FUNCTIONS-005                 */
/* SCROLL TOP                                        */
/* رفتن به ابتدای صفحه                               */
/* ================================================= */

function scrollTopPage(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}


/* ================================================= */
/* SECTION ID : SHARED-FUNCTIONS-006                 */
/* SCROLL BOTTOM                                     */
/* رفتن به انتهای صفحه                               */
/* ================================================= */

function scrollBottomPage(){

    window.scrollTo({

        top:document.body.scrollHeight,

        behavior:"smooth"

    });

}


/* ================================================= */
/* SECTION ID : SHARED-FUNCTIONS-007                 */
/* COPY TEXT                                         */
/* کپی متن                                           */
/* ================================================= */

function copyText(text){

    navigator.clipboard.writeText(text);

}


/* ================================================= */
/* SECTION ID : SHARED-FUNCTIONS-008                 */
/* PRINT PAGE                                        */
/* چاپ صفحه                                          */
/* ================================================= */

function printPage(){

    window.print();

}


/* ================================================= */
/* SECTION ID : SHARED-FUNCTIONS-009                 */
/* EXPORT                                            */
/* دسترسی عمومی                                      */
/* ================================================= */

window.redirect = redirect;

window.reloadPage = reloadPage;

window.goBack = goBack;

window.goForward = goForward;

window.scrollTopPage = scrollTopPage;

window.scrollBottomPage = scrollBottomPage;

window.copyText = copyText;

window.printPage = printPage;


/* ================================================= */
/* SECTION ID : SHARED-FUNCTIONS-999                 */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */