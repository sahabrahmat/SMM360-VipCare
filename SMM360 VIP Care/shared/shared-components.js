/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : shared-components.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت کامپوننت‌های مشترک سیستم

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-COMPONENTS-001                */
/* CREATE ELEMENT                                    */
/* ایجاد عنصر جدید                                   */
/* ================================================= */

function createElement(tag){

    return document.createElement(tag);

}


/* ================================================= */
/* SECTION ID : SHARED-COMPONENTS-002                */
/* GET ELEMENT                                       */
/* دریافت عنصر                                       */
/* ================================================= */

function getElement(id){

    return document.getElementById(id);

}


/* ================================================= */
/* SECTION ID : SHARED-COMPONENTS-003                */
/* QUERY SELECTOR                                    */
/* جستجوی عنصر                                       */
/* ================================================= */

function query(selector){

    return document.querySelector(selector);

}


/* ================================================= */
/* SECTION ID : SHARED-COMPONENTS-004                */
/* QUERY SELECTOR ALL                                */
/* جستجوی چند عنصر                                   */
/* ================================================= */

function queryAll(selector){

    return document.querySelectorAll(selector);

}


/* ================================================= */
/* SECTION ID : SHARED-COMPONENTS-005                */
/* SHOW ELEMENT                                      */
/* نمایش عنصر                                        */
/* ================================================= */

function showElement(id){

    const element = getElement(id);

    if(element){

        element.style.display = "";

    }

}


/* ================================================= */
/* SECTION ID : SHARED-COMPONENTS-006                */
/* HIDE ELEMENT                                      */
/* مخفی کردن عنصر                                    */
/* ================================================= */

function hideElement(id){

    const element = getElement(id);

    if(element){

        element.style.display = "none";

    }

}


/* ================================================= */
/* SECTION ID : SHARED-COMPONENTS-007                */
/* TOGGLE ELEMENT                                    */
/* تغییر وضعیت نمایش                                 */
/* ================================================= */

function toggleElement(id){

    const element = getElement(id);

    if(!element){

        return;

    }

    if(element.style.display === "none"){

        element.style.display = "";

    }else{

        element.style.display = "none";

    }

}


/* ================================================= */
/* SECTION ID : SHARED-COMPONENTS-008                */
/* SET TEXT                                          */
/* تنظیم متن                                         */
/* ================================================= */

function setText(id,text){

    const element = getElement(id);

    if(element){

        element.textContent = text;

    }

}


/* ================================================= */
/* SECTION ID : SHARED-COMPONENTS-009                */
/* SET HTML                                          */
/* تنظیم HTML                                        */
/* ================================================= */

function setHTML(id,html){

    const element = getElement(id);

    if(element){

        element.innerHTML = html;

    }

}


/* ================================================= */
/* SECTION ID : SHARED-COMPONENTS-010                */
/* EXPORT                                            */
/* دسترسی عمومی                                      */
/* ================================================= */

window.createElement = createElement;

window.getElement = getElement;

window.query = query;

window.queryAll = queryAll;

window.showElement = showElement;

window.hideElement = hideElement;

window.toggleElement = toggleElement;

window.setText = setText;

window.setHTML = setHTML;


/* ================================================= */
/* SECTION ID : SHARED-COMPONENTS-999                */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */