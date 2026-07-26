/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : shared-language.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت زبان و ترجمه‌های سراسری سیستم

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-LANGUAGE-001                  */
/* CURRENT LANGUAGE                                  */
/* زبان فعال سیستم                                   */
/* ================================================= */

let currentLanguage = "fa";


/* ================================================= */
/* SECTION ID : SHARED-LANGUAGE-002                  */
/* LANGUAGE LIST                                     */
/* لیست زبان‌های سیستم                               */
/* ================================================= */

const LANGUAGES = {

    fa : "فارسی",

    en : "English",

    ar : "العربية"

};


/* ================================================= */
/* SECTION ID : SHARED-LANGUAGE-003                  */
/* SET LANGUAGE                                      */
/* تغییر زبان سیستم                                  */
/* ================================================= */

function setLanguage(language){

    if(LANGUAGES[language]){

        currentLanguage = language;

    }

}


/* ================================================= */
/* SECTION ID : SHARED-LANGUAGE-004                  */
/* GET LANGUAGE                                      */
/* دریافت زبان فعال                                  */
/* ================================================= */

function getLanguage(){

    return currentLanguage;

}


/* ================================================= */
/* SECTION ID : SHARED-LANGUAGE-005                  */
/* GET LANGUAGE NAME                                 */
/* دریافت نام زبان                                   */
/* ================================================= */

function getLanguageName(){

    return LANGUAGES[currentLanguage];

}


/* ================================================= */
/* SECTION ID : SHARED-LANGUAGE-006                  */
/* GET ALL LANGUAGES                                 */
/* دریافت لیست زبان‌ها                               */
/* ================================================= */

function getLanguages(){

    return LANGUAGES;

}


/* ================================================= */
/* SECTION ID : SHARED-LANGUAGE-007                  */
/* CHECK LANGUAGE                                    */
/* بررسی وجود زبان                                   */
/* ================================================= */

function hasLanguage(language){

    return Object.prototype.hasOwnProperty.call(

        LANGUAGES,

        language

    );

}


/* ================================================= */
/* SECTION ID : SHARED-LANGUAGE-008                  */
/* EXPORT                                            */
/* دسترسی عمومی                                      */
/* ================================================= */

window.currentLanguage = currentLanguage;

window.LANGUAGES = LANGUAGES;

window.setLanguage = setLanguage;

window.getLanguage = getLanguage;

window.getLanguageName = getLanguageName;

window.getLanguages = getLanguages;

window.hasLanguage = hasLanguage;


/* ================================================= */
/* SECTION ID : SHARED-LANGUAGE-999                  */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */