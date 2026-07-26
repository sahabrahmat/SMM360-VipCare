/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : shared-logger.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت ثبت وقایع (Logger) سیستم

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-LOGGER-001                    */
/* LOGGER CONFIGURATION                              */
/* تنظیمات ثبت وقایع                                 */
/* ================================================= */

const LOGGER = {

    enabled : true,

    level : "INFO"

};


/* ================================================= */
/* SECTION ID : SHARED-LOGGER-002                    */
/* INFO LOG                                          */
/* ثبت پیام اطلاعات                                  */
/* ================================================= */

function logInfo(message){

    if(!LOGGER.enabled) return;

    console.info("[INFO]", message);

}


/* ================================================= */
/* SECTION ID : SHARED-LOGGER-003                    */
/* WARNING LOG                                       */
/* ثبت پیام هشدار                                    */
/* ================================================= */

function logWarning(message){

    if(!LOGGER.enabled) return;

    console.warn("[WARNING]", message);

}


/* ================================================= */
/* SECTION ID : SHARED-LOGGER-004                    */
/* ERROR LOG                                         */
/* ثبت پیام خطا                                      */
/* ================================================= */

function logError(message){

    if(!LOGGER.enabled) return;

    console.error("[ERROR]", message);

}


/* ================================================= */
/* SECTION ID : SHARED-LOGGER-005                    */
/* SUCCESS LOG                                       */
/* ثبت پیام موفقیت                                   */
/* ================================================= */

function logSuccess(message){

    if(!LOGGER.enabled) return;

    console.log("[SUCCESS]", message);

}


/* ================================================= */
/* SECTION ID : SHARED-LOGGER-006                    */
/* DEBUG LOG                                         */
/* ثبت پیام اشکال‌زدایی                              */
/* ================================================= */

function logDebug(message){

    if(!LOGGER.enabled) return;

    console.debug("[DEBUG]", message);

}


/* ================================================= */
/* SECTION ID : SHARED-LOGGER-007                    */
/* ENABLE LOGGER                                     */
/* فعال‌سازی ثبت وقایع                               */
/* ================================================= */

function enableLogger(){

    LOGGER.enabled = true;

}


/* ================================================= */
/* SECTION ID : SHARED-LOGGER-008                    */
/* DISABLE LOGGER                                    */
/* غیرفعال‌سازی ثبت وقایع                            */
/* ================================================= */

function disableLogger(){

    LOGGER.enabled = false;

}


/* ================================================= */
/* SECTION ID : SHARED-LOGGER-009                    */
/* GET LOGGER STATUS                                 */
/* دریافت وضعیت Logger                               */
/* ================================================= */

function isLoggerEnabled(){

    return LOGGER.enabled;

}


/* ================================================= */
/* SECTION ID : SHARED-LOGGER-010                    */
/* EXPORT                                            */
/* دسترسی عمومی                                      */
/* ================================================= */

window.LOGGER = LOGGER;

window.logInfo = logInfo;

window.logWarning = logWarning;

window.logError = logError;

window.logSuccess = logSuccess;

window.logDebug = logDebug;

window.enableLogger = enableLogger;

window.disableLogger = disableLogger;

window.isLoggerEnabled = isLoggerEnabled;


/* ================================================= */
/* SECTION ID : SHARED-LOGGER-999                    */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */