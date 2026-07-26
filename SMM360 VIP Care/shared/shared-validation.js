/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : shared-validation.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   اعتبارسنجی اطلاعات ورودی سیستم

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-VALIDATION-001                */
/* CHECK EMPTY VALUE                                 */
/* بررسی مقدار خالی                                  */
/* ================================================= */

function isEmpty(value){

    return value === null ||
           value === undefined ||
           value === "";

}


/* ================================================= */
/* SECTION ID : SHARED-VALIDATION-002                */
/* VALIDATE EMAIL                                    */
/* اعتبارسنجی ایمیل                                  */
/* ================================================= */

function isValidEmail(email){

    const pattern =

        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);

}


/* ================================================= */
/* SECTION ID : SHARED-VALIDATION-003                */
/* VALIDATE MOBILE                                   */
/* اعتبارسنجی شماره موبایل                           */
/* ================================================= */

function isValidMobile(mobile){

    const pattern = /^09\d{9}$/;

    return pattern.test(mobile);

}


/* ================================================= */
/* SECTION ID : SHARED-VALIDATION-004                */
/* VALIDATE NATIONAL CODE                            */
/* اعتبارسنجی کد ملی                                 */
/* ================================================= */

function isValidNationalCode(code){

    return /^\d{10}$/.test(code);

}


/* ================================================= */
/* SECTION ID : SHARED-VALIDATION-005                */
/* VALIDATE NUMBER                                   */
/* اعتبارسنجی عدد                                    */
/* ================================================= */

function isValidNumber(value){

    return !isNaN(value);

}


/* ================================================= */
/* SECTION ID : SHARED-VALIDATION-006                */
/* VALIDATE DATE                                     */
/* اعتبارسنجی تاریخ                                  */
/* ================================================= */

function isValidDate(date){

    return !isNaN(Date.parse(date));

}


/* ================================================= */
/* SECTION ID : SHARED-VALIDATION-007                */
/* VALIDATE MIN LENGTH                               */
/* بررسی حداقل طول                                   */
/* ================================================= */

function hasMinLength(text,length){

    return text.length >= length;

}


/* ================================================= */
/* SECTION ID : SHARED-VALIDATION-008                */
/* VALIDATE MAX LENGTH                               */
/* بررسی حداکثر طول                                  */
/* ================================================= */

function hasMaxLength(text,length){

    return text.length <= length;

}


/* ================================================= */
/* SECTION ID : SHARED-VALIDATION-009                */
/* EXPORT                                            */
/* دسترسی عمومی                                      */
/* ================================================= */

window.isEmpty = isEmpty;

window.isValidEmail = isValidEmail;

window.isValidMobile = isValidMobile;

window.isValidNationalCode = isValidNationalCode;

window.isValidNumber = isValidNumber;

window.isValidDate = isValidDate;

window.hasMinLength = hasMinLength;

window.hasMaxLength = hasMaxLength;


/* ================================================= */
/* SECTION ID : SHARED-VALIDATION-999                */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */