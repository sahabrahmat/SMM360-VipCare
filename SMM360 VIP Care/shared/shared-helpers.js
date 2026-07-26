/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : shared-helpers.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   توابع کمکی عمومی سیستم

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-HELPERS-001                   */
/* IS NULL                                           */
/* بررسی مقدار Null                                  */
/* ================================================= */

function isNull(value){

    return value === null;

}


/* ================================================= */
/* SECTION ID : SHARED-HELPERS-002                   */
/* IS UNDEFINED                                      */
/* بررسی Undefined                                   */
/* ================================================= */

function isUndefined(value){

    return typeof value === "undefined";

}


/* ================================================= */
/* SECTION ID : SHARED-HELPERS-003                   */
/* IS EMPTY                                          */
/* بررسی مقدار خالی                                  */
/* ================================================= */

function isEmpty(value){

    return value === "" ||
           value === null ||
           value === undefined;

}


/* ================================================= */
/* SECTION ID : SHARED-HELPERS-004                   */
/* IS NUMBER                                         */
/* بررسی عدد بودن                                    */
/* ================================================= */

function isNumber(value){

    return !isNaN(value);

}


/* ================================================= */
/* SECTION ID : SHARED-HELPERS-005                   */
/* IS STRING                                         */
/* بررسی رشته بودن                                   */
/* ================================================= */

function isString(value){

    return typeof value === "string";

}


/* ================================================= */
/* SECTION ID : SHARED-HELPERS-006                   */
/* IS ARRAY                                          */
/* بررسی آرایه بودن                                  */
/* ================================================= */

function isArray(value){

    return Array.isArray(value);

}


/* ================================================= */
/* SECTION ID : SHARED-HELPERS-007                   */
/* IS OBJECT                                         */
/* بررسی شیء بودن                                    */
/* ================================================= */

function isObject(value){

    return value !== null &&
           typeof value === "object" &&
           !Array.isArray(value);

}


/* ================================================= */
/* SECTION ID : SHARED-HELPERS-008                   */
/* EXPORT                                            */
/* دسترسی عمومی                                      */
/* ================================================= */

window.isNull = isNull;

window.isUndefined = isUndefined;

window.isEmpty = isEmpty;

window.isNumber = isNumber;

window.isString = isString;

window.isArray = isArray;

window.isObject = isObject;


/* ================================================= */
/* SECTION ID : SHARED-HELPERS-999                   */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */