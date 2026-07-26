/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : shared-icons.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت آیکون‌های سراسری سیستم

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-ICONS-001                     */
/* SYSTEM ICONS                                      */
/* آیکون‌های عمومی سیستم                             */
/* ================================================= */

const SYSTEM_ICONS = {

    HOME            : "🏠",

    DASHBOARD       : "📊",

    USER            : "👤",

    USERS           : "👥",

    DOCTOR          : "👨‍⚕️",

    RECEPTION       : "📝",

    PHARMACY        : "💊",

    TREATMENT       : "💡",

    REPORT          : "📑",

    SETTINGS        : "⚙️",

    SEARCH          : "🔍",

    NOTIFICATION    : "🔔",

    MESSAGE         : "💬",

    AI              : "🤖",

    MONEY           : "💰",

    CALENDAR        : "📅",

    CLOCK           : "🕒",

    PRINT           : "🖨️",

    DOWNLOAD        : "📥",

    UPLOAD          : "📤",

    SAVE            : "💾",

    EDIT            : "✏️",

    DELETE          : "🗑️",

    ADD             : "➕",

    REMOVE          : "➖",

    CLOSE           : "❌",

    SUCCESS         : "✅",

    WARNING         : "⚠️",

    ERROR           : "⛔",

    INFO            : "ℹ️"

};


/* ================================================= */
/* SECTION ID : SHARED-ICONS-002                     */
/* GET ICON                                          */
/* دریافت آیکون                                      */
/* ================================================= */

function getIcon(name){

    return SYSTEM_ICONS[name] || "";

}


/* ================================================= */
/* SECTION ID : SHARED-ICONS-003                     */
/* CHECK ICON                                        */
/* بررسی وجود آیکون                                  */
/* ================================================= */

function hasIcon(name){

    return Object.prototype.hasOwnProperty.call(

        SYSTEM_ICONS,

        name

    );

}


/* ================================================= */
/* SECTION ID : SHARED-ICONS-004                     */
/* EXPORT                                            */
/* دسترسی عمومی                                      */
/* ================================================= */

window.SYSTEM_ICONS = SYSTEM_ICONS;

window.getIcon = getIcon;

window.hasIcon = hasIcon;


/* ================================================= */
/* SECTION ID : SHARED-ICONS-999                     */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */