/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : shared-version.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت نسخه سراسری سیستم

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-VERSION-001                   */
/* VERSION INFORMATION                               */
/* اطلاعات نسخه سیستم                                */
/* ================================================= */

const SYSTEM_VERSION = {

    system      : "SMM360 VIP Care",

    edition     : "ENTERPRISE EDITION",

    version     : "0.0.1",

    build       : "001",

    releaseDate : "2026-07-23",

    author      : "Dr. Seyed Mehdi Mohammadi"

};


/* ================================================= */
/* SECTION ID : SHARED-VERSION-002                   */
/* GET VERSION                                       */
/* دریافت نسخه سیستم                                 */
/* ================================================= */

function getVersion(){

    return SYSTEM_VERSION.version;

}


/* ================================================= */
/* SECTION ID : SHARED-VERSION-003                   */
/* GET BUILD                                         */
/* دریافت شماره Build                                */
/* ================================================= */

function getBuild(){

    return SYSTEM_VERSION.build;

}


/* ================================================= */
/* SECTION ID : SHARED-VERSION-004                   */
/* GET EDITION                                       */
/* دریافت نسخه نرم‌افزار                             */
/* ================================================= */

function getEdition(){

    return SYSTEM_VERSION.edition;

}


/* ================================================= */
/* SECTION ID : SHARED-VERSION-005                   */
/* GET VERSION INFORMATION                           */
/* دریافت اطلاعات کامل نسخه                          */
/* ================================================= */

function getVersionInfo(){

    return SYSTEM_VERSION;

}


/* ================================================= */
/* SECTION ID : SHARED-VERSION-006                   */
/* VERSION STRING                                    */
/* متن نمایشی نسخه                                   */
/* ================================================= */

function getVersionString(){

    return `${SYSTEM_VERSION.system} ${SYSTEM_VERSION.version}`;

}


/* ================================================= */
/* SECTION ID : SHARED-VERSION-007                   */
/* EXPORT                                            */
/* دسترسی عمومی                                      */
/* ================================================= */

window.SYSTEM_VERSION = SYSTEM_VERSION;

window.getVersion = getVersion;

window.getBuild = getBuild;

window.getEdition = getEdition;

window.getVersionInfo = getVersionInfo;

window.getVersionString = getVersionString;


/* ================================================= */
/* SECTION ID : SHARED-VERSION-999                   */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */