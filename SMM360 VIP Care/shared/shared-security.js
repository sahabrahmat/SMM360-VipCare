/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : shared-security.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت امنیت سراسری سیستم

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-SECURITY-001                  */
/* SECURITY CONFIGURATION                            */
/* تنظیمات امنیت سیستم                               */
/* ================================================= */

const SECURITY = {

    authenticated : false,

    sessionActive : false,

    csrfToken : "",

    encryption : false

};


/* ================================================= */
/* SECTION ID : SHARED-SECURITY-002                  */
/* START SESSION                                     */
/* شروع نشست کاربر                                   */
/* ================================================= */

function startSession(){

    SECURITY.sessionActive = true;

}


/* ================================================= */
/* SECTION ID : SHARED-SECURITY-003                  */
/* END SESSION                                       */
/* پایان نشست کاربر                                  */
/* ================================================= */

function endSession(){

    SECURITY.sessionActive = false;

    SECURITY.authenticated = false;

}


/* ================================================= */
/* SECTION ID : SHARED-SECURITY-004                  */
/* LOGIN STATUS                                      */
/* وضعیت ورود کاربر                                  */
/* ================================================= */

function setAuthenticated(status){

    SECURITY.authenticated = status;

}


/* ================================================= */
/* SECTION ID : SHARED-SECURITY-005                  */
/* CHECK LOGIN                                       */
/* بررسی ورود کاربر                                  */
/* ================================================= */

function isAuthenticated(){

    return SECURITY.authenticated;

}


/* ================================================= */
/* SECTION ID : SHARED-SECURITY-006                  */
/* SET CSRF TOKEN                                    */
/* ثبت توکن امنیتی                                   */
/* ================================================= */

function setCsrfToken(token){

    SECURITY.csrfToken = token;

}


/* ================================================= */
/* SECTION ID : SHARED-SECURITY-007                  */
/* GET CSRF TOKEN                                    */
/* دریافت توکن امنیتی                                */
/* ================================================= */

function getCsrfToken(){

    return SECURITY.csrfToken;

}


/* ================================================= */
/* SECTION ID : SHARED-SECURITY-008                  */
/* ENABLE ENCRYPTION                                 */
/* فعال‌سازی رمزنگاری                                */
/* ================================================= */

function enableEncryption(){

    SECURITY.encryption = true;

}


/* ================================================= */
/* SECTION ID : SHARED-SECURITY-009                  */
/* DISABLE ENCRYPTION                                */
/* غیرفعال‌سازی رمزنگاری                             */
/* ================================================= */

function disableEncryption(){

    SECURITY.encryption = false;

}


/* ================================================= */
/* SECTION ID : SHARED-SECURITY-010                  */
/* CHECK ENCRYPTION                                  */
/* بررسی وضعیت رمزنگاری                              */
/* ================================================= */

function isEncryptionEnabled(){

    return SECURITY.encryption;

}


/* ================================================= */
/* SECTION ID : SHARED-SECURITY-011                  */
/* EXPORT                                            */
/* دسترسی عمومی                                      */
/* ================================================= */

window.SECURITY = SECURITY;

window.startSession = startSession;

window.endSession = endSession;

window.setAuthenticated = setAuthenticated;

window.isAuthenticated = isAuthenticated;

window.setCsrfToken = setCsrfToken;

window.getCsrfToken = getCsrfToken;

window.enableEncryption = enableEncryption;

window.disableEncryption = disableEncryption;

window.isEncryptionEnabled = isEncryptionEnabled;


/* ================================================= */
/* SECTION ID : SHARED-SECURITY-999                  */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */