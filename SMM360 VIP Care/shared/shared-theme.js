/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : shared-theme.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت قالب (Theme) سراسری سیستم

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-THEME-001                     */
/* CURRENT THEME                                     */
/* قالب فعال سیستم                                   */
/* ================================================= */

let currentTheme = "default";


/* ================================================= */
/* SECTION ID : SHARED-THEME-002                     */
/* AVAILABLE THEMES                                  */
/* قالب‌های قابل استفاده                             */
/* ================================================= */

const THEMES = {

    DEFAULT : "default",

    LIGHT   : "light",

    DARK    : "dark"

};


/* ================================================= */
/* SECTION ID : SHARED-THEME-003                     */
/* SET THEME                                         */
/* تنظیم قالب سیستم                                  */
/* ================================================= */

function setTheme(theme){

    if(!Object.values(THEMES).includes(theme)){

        return;

    }

    document.body.setAttribute(

        "data-theme",

        theme

    );

    currentTheme = theme;

}


/* ================================================= */
/* SECTION ID : SHARED-THEME-004                     */
/* GET CURRENT THEME                                 */
/* دریافت قالب فعال                                  */
/* ================================================= */

function getTheme(){

    return currentTheme;

}


/* ================================================= */
/* SECTION ID : SHARED-THEME-005                     */
/* LOAD SAVED THEME                                  */
/* بارگذاری قالب ذخیره شده                           */
/* ================================================= */

function loadTheme(){

    const theme = localStorage.getItem("SMM360_THEME");

    if(theme){

        setTheme(theme);

    }

}


/* ================================================= */
/* SECTION ID : SHARED-THEME-006                     */
/* SAVE CURRENT THEME                                */
/* ذخیره قالب فعلی                                   */
/* ================================================= */

function saveTheme(){

    localStorage.setItem(

        "SMM360_THEME",

        currentTheme

    );

}


/* ================================================= */
/* SECTION ID : SHARED-THEME-007                     */
/* TOGGLE THEME                                      */
/* تغییر بین روشن و تیره                             */
/* ================================================= */

function toggleTheme(){

    if(currentTheme === THEMES.DARK){

        setTheme(THEMES.LIGHT);

    }else{

        setTheme(THEMES.DARK);

    }

    saveTheme();

}


/* ================================================= */
/* SECTION ID : SHARED-THEME-008                     */
/* EXPORT                                            */
/* دسترسی عمومی                                      */
/* ================================================= */

window.THEMES = THEMES;

window.setTheme = setTheme;

window.getTheme = getTheme;

window.loadTheme = loadTheme;

window.saveTheme = saveTheme;

window.toggleTheme = toggleTheme;


/* ================================================= */
/* SECTION ID : SHARED-THEME-999                     */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */