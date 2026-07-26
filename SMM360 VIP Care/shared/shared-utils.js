/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : shared-utils.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   توابع کمکی عمومی سراسری سیستم

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-UTILS-001                     */
/* GENERATE UNIQUE ID                                */
/* تولید شناسه یکتا                                  */
/* ================================================= */

function generateId(prefix = "ID"){

    return prefix + "-" + Date.now();

}


/* ================================================= */
/* SECTION ID : SHARED-UTILS-002                     */
/* RANDOM NUMBER                                     */
/* تولید عدد تصادفی                                  */
/* ================================================= */

function randomNumber(min,max){

    return Math.floor(

        Math.random() * (max - min + 1)

    ) + min;

}


/* ================================================= */
/* SECTION ID : SHARED-UTILS-003                     */
/* RANDOM STRING                                     */
/* تولید رشته تصادفی                                 */
/* ================================================= */

function randomString(length = 8){

    const chars =

        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let result = "";

    for(let i = 0; i < length; i++){

        result += chars.charAt(

            Math.floor(Math.random() * chars.length)

        );

    }

    return result;

}


/* ================================================= */
/* SECTION ID : SHARED-UTILS-004                     */
/* DELAY                                             */
/* ایجاد تأخیر                                       */
/* ================================================= */

function delay(milliseconds){

    return new Promise(resolve =>

        setTimeout(resolve,milliseconds)

    );

}


/* ================================================= */
/* SECTION ID : SHARED-UTILS-005                     */
/* CURRENT DATE                                      */
/* دریافت تاریخ جاری                                 */
/* ================================================= */

function currentDate(){

    return new Date();

}


/* ================================================= */
/* SECTION ID : SHARED-UTILS-006                     */
/* CURRENT TIMESTAMP                                 */
/* دریافت زمان یونیکس                                */
/* ================================================= */

function currentTimestamp(){

    return Date.now();

}


/* ================================================= */
/* SECTION ID : SHARED-UTILS-007                     */
/* CLONE OBJECT                                      */
/* کپی یک شیء                                        */
/* ================================================= */

function cloneObject(object){

    return JSON.parse(

        JSON.stringify(object)

    );

}


/* ================================================= */
/* SECTION ID : SHARED-UTILS-008                     */
/* EXPORT                                            */
/* دسترسی عمومی                                      */
/* ================================================= */

window.generateId = generateId;

window.randomNumber = randomNumber;

window.randomString = randomString;

window.delay = delay;

window.currentDate = currentDate;

window.currentTimestamp = currentTimestamp;

window.cloneObject = cloneObject;


/* ================================================= */
/* SECTION ID : SHARED-UTILS-999                     */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */