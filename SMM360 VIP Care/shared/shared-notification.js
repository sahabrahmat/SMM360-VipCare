/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : shared-notification.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت اعلان‌های سراسری سیستم

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-NOTIFICATION-001              */
/* NOTIFICATION OBJECT                               */
/* تنظیمات اعلان‌ها                                  */
/* ================================================= */

const NOTIFICATION = {

    message : "",

    type : "info",

    visible : false

};


/* ================================================= */
/* SECTION ID : SHARED-NOTIFICATION-002              */
/* SHOW NOTIFICATION                                 */
/* نمایش اعلان                                       */
/* ================================================= */

function showNotification(message,type="info"){

    NOTIFICATION.message = message;

    NOTIFICATION.type = type;

    NOTIFICATION.visible = true;

    console.log("[NOTIFICATION]",type.toUpperCase(),message);

}


/* ================================================= */
/* SECTION ID : SHARED-NOTIFICATION-003              */
/* HIDE NOTIFICATION                                 */
/* مخفی کردن اعلان                                   */
/* ================================================= */

function hideNotification(){

    NOTIFICATION.visible = false;

}


/* ================================================= */
/* SECTION ID : SHARED-NOTIFICATION-004              */
/* SUCCESS NOTIFICATION                              */
/* اعلان موفقیت                                      */
/* ================================================= */

function notifySuccess(message){

    showNotification(message,"success");

}


/* ================================================= */
/* SECTION ID : SHARED-NOTIFICATION-005              */
/* WARNING NOTIFICATION                              */
/* اعلان هشدار                                       */
/* ================================================= */

function notifyWarning(message){

    showNotification(message,"warning");

}


/* ================================================= */
/* SECTION ID : SHARED-NOTIFICATION-006              */
/* ERROR NOTIFICATION                                */
/* اعلان خطا                                         */
/* ================================================= */

function notifyError(message){

    showNotification(message,"error");

}


/* ================================================= */
/* SECTION ID : SHARED-NOTIFICATION-007              */
/* INFO NOTIFICATION                                 */
/* اعلان اطلاعات                                     */
/* ================================================= */

function notifyInfo(message){

    showNotification(message,"info");

}


/* ================================================= */
/* SECTION ID : SHARED-NOTIFICATION-008              */
/* GET STATUS                                        */
/* وضعیت اعلان                                       */
/* ================================================= */

function isNotificationVisible(){

    return NOTIFICATION.visible;

}


/* ================================================= */
/* SECTION ID : SHARED-NOTIFICATION-009              */
/* EXPORT                                            */
/* دسترسی عمومی                                      */
/* ================================================= */

window.NOTIFICATION = NOTIFICATION;

window.showNotification = showNotification;

window.hideNotification = hideNotification;

window.notifySuccess = notifySuccess;

window.notifyWarning = notifyWarning;

window.notifyError = notifyError;

window.notifyInfo = notifyInfo;

window.isNotificationVisible = isNotificationVisible;


/* ================================================= */
/* SECTION ID : SHARED-NOTIFICATION-999              */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */