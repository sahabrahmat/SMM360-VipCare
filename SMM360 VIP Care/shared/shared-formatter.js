/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : shared-formatter.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   توابع قالب‌بندی اطلاعات سراسری سیستم

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-FORMATTER-001                 */
/* FORMAT NUMBER                                     */
/* قالب‌بندی اعداد                                   */
/* ================================================= */

function formatNumber(value){

    return Number(value).toLocaleString("fa-IR");

}


/* ================================================= */
/* SECTION ID : SHARED-FORMATTER-002                 */
/* FORMAT CURRENCY                                   */
/* قالب‌بندی مبلغ                                    */
/* ================================================= */

function formatCurrency(value){

    return Number(value).toLocaleString("fa-IR") + " تومان";

}


/* ================================================= */
/* SECTION ID : SHARED-FORMATTER-003                 */
/* FORMAT PERCENT                                    */
/* قالب‌بندی درصد                                    */
/* ================================================= */

function formatPercent(value){

    return value + "%";

}


/* ================================================= */
/* SECTION ID : SHARED-FORMATTER-004                 */
/* FORMAT DATE                                       */
/* قالب‌بندی تاریخ                                   */
/* ================================================= */

function formatDate(date){

    return new Date(date).toLocaleDateString("fa-IR");

}


/* ================================================= */
/* SECTION ID : SHARED-FORMATTER-005                 */
/* FORMAT TIME                                       */
/* قالب‌بندی زمان                                    */
/* ================================================= */

function formatTime(date){

    return new Date(date).toLocaleTimeString("fa-IR");

}


/* ================================================= */
/* SECTION ID : SHARED-FORMATTER-006                 */
/* FORMAT DATETIME                                   */
/* قالب‌بندی تاریخ و زمان                            */
/* ================================================= */

function formatDateTime(date){

    return new Date(date).toLocaleString("fa-IR");

}


/* ================================================= */
/* SECTION ID : SHARED-FORMATTER-007                 */
/* FORMAT FILE SIZE                                  */
/* قالب‌بندی حجم فایل                                */
/* ================================================= */

function formatFileSize(bytes){

    if(bytes < 1024){

        return bytes + " B";

    }

    if(bytes < 1048576){

        return (bytes / 1024).toFixed(2) + " KB";

    }

    if(bytes < 1073741824){

        return (bytes / 1048576).toFixed(2) + " MB";

    }

    return (bytes / 1073741824).toFixed(2) + " GB";

}


/* ================================================= */
/* SECTION ID : SHARED-FORMATTER-008                 */
/* FORMAT PHONE                                      */
/* قالب‌بندی شماره موبایل                            */
/* ================================================= */

function formatPhone(phone){

    return String(phone).replace(
        /(\d{4})(\d{3})(\d{4})/,
        "$1 $2 $3"
    );

}


/* ================================================= */
/* SECTION ID : SHARED-FORMATTER-009                 */
/* EXPORT                                            */
/* دسترسی عمومی                                      */
/* ================================================= */

window.formatNumber = formatNumber;

window.formatCurrency = formatCurrency;

window.formatPercent = formatPercent;

window.formatDate = formatDate;

window.formatTime = formatTime;

window.formatDateTime = formatDateTime;

window.formatFileSize = formatFileSize;

window.formatPhone = formatPhone;


/* ================================================= */
/* SECTION ID : SHARED-FORMATTER-999                 */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */