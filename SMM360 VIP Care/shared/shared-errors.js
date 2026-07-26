/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : shared-errors.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت خطاهای سراسری سیستم

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-ERRORS-001                    */
/* ERROR DEFINITIONS                                 */
/* تعریف خطاهای سیستم                                */
/* ================================================= */

const SYSTEM_ERRORS = {

    UNKNOWN             : "ERR-000",

    NETWORK             : "ERR-001",

    SERVER              : "ERR-002",

    DATABASE            : "ERR-003",

    AUTHENTICATION      : "ERR-004",

    AUTHORIZATION       : "ERR-005",

    VALIDATION          : "ERR-006",

    NOT_FOUND           : "ERR-007",

    DUPLICATE           : "ERR-008",

    TIMEOUT             : "ERR-009"

};


/* ================================================= */
/* SECTION ID : SHARED-ERRORS-002                    */
/* GET ERROR CODE                                    */
/* دریافت کد خطا                                     */
/* ================================================= */

function getErrorCode(name){

    return SYSTEM_ERRORS[name] || SYSTEM_ERRORS.UNKNOWN;

}


/* ================================================= */
/* SECTION ID : SHARED-ERRORS-003                    */
/* GET ERROR MESSAGE                                 */
/* دریافت پیام خطا                                   */
/* ================================================= */

function getErrorMessage(code){

    switch(code){

        case "ERR-001":
            return "خطای ارتباط با شبکه";

        case "ERR-002":
            return "خطای سرور";

        case "ERR-003":
            return "خطای پایگاه داده";

        case "ERR-004":
            return "احراز هویت نامعتبر است";

        case "ERR-005":
            return "دسترسی غیرمجاز";

        case "ERR-006":
            return "اطلاعات وارد شده معتبر نیست";

        case "ERR-007":
            return "اطلاعات مورد نظر یافت نشد";

        case "ERR-008":
            return "اطلاعات تکراری است";

        case "ERR-009":
            return "زمان درخواست به پایان رسید";

        default:
            return "خطای ناشناخته";

    }

}


/* ================================================= */
/* SECTION ID : SHARED-ERRORS-004                    */
/* LOG ERROR                                         */
/* ثبت خطا                                           */
/* ================================================= */

function logError(error){

    console.error("[SMM360 ERROR]", error);

}


/* ================================================= */
/* SECTION ID : SHARED-ERRORS-005                    */
/* HANDLE ERROR                                      */
/* مدیریت خطا                                        */
/* ================================================= */

function handleError(error){

    logError(error);

    return getErrorMessage(error);

}


/* ================================================= */
/* SECTION ID : SHARED-ERRORS-006                    */
/* EXPORT                                            */
/* دسترسی عمومی                                      */
/* ================================================= */

window.SYSTEM_ERRORS = SYSTEM_ERRORS;

window.getErrorCode = getErrorCode;

window.getErrorMessage = getErrorMessage;

window.logError = logError;

window.handleError = handleError;


/* ================================================= */
/* SECTION ID : SHARED-ERRORS-999                    */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */