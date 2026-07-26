/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : shared-cache.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت حافظه موقت (Cache)

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-CACHE-001                     */
/* CACHE OBJECT                                      */
/* مدیریت حافظه موقت                                */
/* ================================================= */

const CACHE = {};


/* ================================================= */
/* SECTION ID : SHARED-CACHE-002                     */
/* SET CACHE                                         */
/* ثبت اطلاعات در حافظه                              */
/* ================================================= */

function setCache(key, value){

    CACHE[key] = value;

}


/* ================================================= */
/* SECTION ID : SHARED-CACHE-003                     */
/* GET CACHE                                         */
/* دریافت اطلاعات از حافظه                           */
/* ================================================= */

function getCache(key){

    return CACHE[key];

}


/* ================================================= */
/* SECTION ID : SHARED-CACHE-004                     */
/* CHECK CACHE                                       */
/* بررسی وجود اطلاعات                                */
/* ================================================= */

function hasCache(key){

    return Object.prototype.hasOwnProperty.call(CACHE, key);

}


/* ================================================= */
/* SECTION ID : SHARED-CACHE-005                     */
/* REMOVE CACHE                                      */
/* حذف یک مقدار                                      */
/* ================================================= */

function removeCache(key){

    delete CACHE[key];

}


/* ================================================= */
/* SECTION ID : SHARED-CACHE-006                     */
/* CLEAR CACHE                                       */
/* پاکسازی کامل حافظه                                */
/* ================================================= */

function clearCache(){

    for(const key in CACHE){

        delete CACHE[key];

    }

}


/* ================================================= */
/* SECTION ID : SHARED-CACHE-007                     */
/* CACHE SIZE                                        */
/* تعداد آیتم‌های حافظه                              */
/* ================================================= */

function cacheSize(){

    return Object.keys(CACHE).length;

}


/* ================================================= */
/* SECTION ID : SHARED-CACHE-008                     */
/* EXPORT                                            */
/* دسترسی عمومی                                      */
/* ================================================= */

window.CACHE = CACHE;

window.setCache = setCache;

window.getCache = getCache;

window.hasCache = hasCache;

window.removeCache = removeCache;

window.clearCache = clearCache;

window.cacheSize = cacheSize;


/* ================================================= */
/* SECTION ID : SHARED-CACHE-999                     */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */