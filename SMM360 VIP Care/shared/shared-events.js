/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : shared-events.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت رویدادهای مشترک سیستم

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-EVENTS-001                    */
/* ADD EVENT LISTENER                                */
/* افزودن رویداد                                     */
/* ================================================= */

function addEvent(element,eventName,callback){

    if(!element) return;

    element.addEventListener(eventName,callback);

}


/* ================================================= */
/* SECTION ID : SHARED-EVENTS-002                    */
/* REMOVE EVENT LISTENER                             */
/* حذف رویداد                                        */
/* ================================================= */

function removeEvent(element,eventName,callback){

    if(!element) return;

    element.removeEventListener(eventName,callback);

}


/* ================================================= */
/* SECTION ID : SHARED-EVENTS-003                    */
/* CLICK EVENT                                       */
/* رویداد کلیک                                       */
/* ================================================= */

function onClick(element,callback){

    addEvent(element,"click",callback);

}


/* ================================================= */
/* SECTION ID : SHARED-EVENTS-004                    */
/* CHANGE EVENT                                      */
/* رویداد تغییر                                      */
/* ================================================= */

function onChange(element,callback){

    addEvent(element,"change",callback);

}


/* ================================================= */
/* SECTION ID : SHARED-EVENTS-005                    */
/* INPUT EVENT                                       */
/* رویداد ورود اطلاعات                               */
/* ================================================= */

function onInput(element,callback){

    addEvent(element,"input",callback);

}


/* ================================================= */
/* SECTION ID : SHARED-EVENTS-006                    */
/* KEYDOWN EVENT                                     */
/* رویداد فشردن کلید                                 */
/* ================================================= */

function onKeyDown(element,callback){

    addEvent(element,"keydown",callback);

}


/* ================================================= */
/* SECTION ID : SHARED-EVENTS-007                    */
/* DOM READY                                         */
/* آماده بودن صفحه                                   */
/* ================================================= */

function onReady(callback){

    document.addEventListener("DOMContentLoaded",callback);

}


/* ================================================= */
/* SECTION ID : SHARED-EVENTS-008                    */
/* WINDOW LOAD                                       */
/* بارگذاری کامل صفحه                                */
/* ================================================= */

function onLoad(callback){

    window.addEventListener("load",callback);

}


/* ================================================= */
/* SECTION ID : SHARED-EVENTS-009                    */
/* WINDOW RESIZE                                     */
/* تغییر اندازه پنجره                                */
/* ================================================= */

function onResize(callback){

    window.addEventListener("resize",callback);

}


/* ================================================= */
/* SECTION ID : SHARED-EVENTS-010                    */
/* EXPORT                                            */
/* دسترسی عمومی                                      */
/* ================================================= */

window.addEvent = addEvent;

window.removeEvent = removeEvent;

window.onClick = onClick;

window.onChange = onChange;

window.onInput = onInput;

window.onKeyDown = onKeyDown;

window.onReady = onReady;

window.onLoad = onLoad;

window.onResize = onResize;


/* ================================================= */
/* SECTION ID : SHARED-EVENTS-999                    */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */