/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : shared-storage.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت فضای ذخیره‌سازی مرورگر (LocalStorage / SessionStorage)

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-STORAGE-001                   */
/* SAVE TO LOCAL STORAGE                             */
/* ذخیره در حافظه دائمی                              */
/* ================================================= */

function setStorage(key,value){

    localStorage.setItem(

        key,

        JSON.stringify(value)

    );

}


/* ================================================= */
/* SECTION ID : SHARED-STORAGE-002                   */
/* READ FROM LOCAL STORAGE                           */
/* دریافت از حافظه دائمی                             */
/* ================================================= */

function getStorage(key){

    const value = localStorage.getItem(key);

    return value ? JSON.parse(value) : null;

}


/* ================================================= */
/* SECTION ID : SHARED-STORAGE-003                   */
/* REMOVE FROM LOCAL STORAGE                         */
/* حذف از حافظه دائمی                                */
/* ================================================= */

function removeStorage(key){

    localStorage.removeItem(key);

}


/* ================================================= */
/* SECTION ID : SHARED-STORAGE-004                   */
/* CLEAR LOCAL STORAGE                               */
/* پاکسازی کامل حافظه دائمی                          */
/* ================================================= */

function clearStorage(){

    localStorage.clear();

}


/* ================================================= */
/* SECTION ID : SHARED-STORAGE-005                   */
/* SAVE TO SESSION STORAGE                           */
/* ذخیره در حافظه نشست                               */
/* ================================================= */

function setSessionStorage(key,value){

    sessionStorage.setItem(

        key,

        JSON.stringify(value)

    );

}


/* ================================================= */
/* SECTION ID : SHARED-STORAGE-006                   */
/* READ FROM SESSION STORAGE                         */
/* دریافت از حافظه نشست                              */
/* ================================================= */

function getSessionStorage(key){

    const value = sessionStorage.getItem(key);

    return value ? JSON.parse(value) : null;

}


/* ================================================= */
/* SECTION ID : SHARED-STORAGE-007                   */
/* REMOVE FROM SESSION STORAGE                       */
/* حذف از حافظه نشست                                 */
/* ================================================= */

function removeSessionStorage(key){

    sessionStorage.removeItem(key);

}


/* ================================================= */
/* SECTION ID : SHARED-STORAGE-008                   */
/* CLEAR SESSION STORAGE                             */
/* پاکسازی کامل حافظه نشست                           */
/* ================================================= */

function clearSessionStorage(){

    sessionStorage.clear();

}


/* ================================================= */
/* SECTION ID : SHARED-STORAGE-009                   */
/* STORAGE SUPPORT                                   */
/* بررسی پشتیبانی مرورگر                             */
/* ================================================= */

function storageSupported(){

    return typeof(Storage) !== "undefined";

}


/* ================================================= */
/* SECTION ID : SHARED-STORAGE-010                   */
/* EXPORT                                            */
/* دسترسی عمومی                                      */
/* ================================================= */

window.setStorage = setStorage;

window.getStorage = getStorage;

window.removeStorage = removeStorage;

window.clearStorage = clearStorage;

window.setSessionStorage = setSessionStorage;

window.getSessionStorage = getSessionStorage;

window.removeSessionStorage = removeSessionStorage;

window.clearSessionStorage = clearSessionStorage;

window.storageSupported = storageSupported;


/* ================================================= */
/* SECTION ID : SHARED-STORAGE-999                   */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */