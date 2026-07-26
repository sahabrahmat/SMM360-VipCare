/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : shared-dialog.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت پنجره‌های محاوره‌ای (Dialog)

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-DIALOG-001                    */
/* ALERT DIALOG                                      */
/* نمایش پیام هشدار                                  */
/* ================================================= */

function showAlert(message){

    alert(message);

}


/* ================================================= */
/* SECTION ID : SHARED-DIALOG-002                    */
/* CONFIRM DIALOG                                    */
/* نمایش پنجره تأیید                                 */
/* ================================================= */

function showConfirm(message){

    return confirm(message);

}


/* ================================================= */
/* SECTION ID : SHARED-DIALOG-003                    */
/* PROMPT DIALOG                                     */
/* دریافت ورودی از کاربر                             */
/* ================================================= */

function showPrompt(message, defaultValue = ""){

    return prompt(message, defaultValue);

}


/* ================================================= */
/* SECTION ID : SHARED-DIALOG-004                    */
/* INFORMATION DIALOG                                */
/* نمایش پیام اطلاعات                                */
/* ================================================= */

function showInfo(message){

    alert(message);

}


/* ================================================= */
/* SECTION ID : SHARED-DIALOG-005                    */
/* WARNING DIALOG                                    */
/* نمایش پیام هشدار                                  */
/* ================================================= */

function showWarning(message){

    alert(message);

}


/* ================================================= */
/* SECTION ID : SHARED-DIALOG-006                    */
/* ERROR DIALOG                                      */
/* نمایش پیام خطا                                    */
/* ================================================= */

function showError(message){

    alert(message);

}


/* ================================================= */
/* SECTION ID : SHARED-DIALOG-007                    */
/* SUCCESS DIALOG                                    */
/* نمایش پیام موفقیت                                 */
/* ================================================= */

function showSuccess(message){

    alert(message);

}


/* ================================================= */
/* SECTION ID : SHARED-DIALOG-008                    */
/* EXPORT                                            */
/* دسترسی عمومی                                      */
/* ================================================= */

window.showAlert = showAlert;

window.showConfirm = showConfirm;

window.showPrompt = showPrompt;

window.showInfo = showInfo;

window.showWarning = showWarning;

window.showError = showError;

window.showSuccess = showSuccess;


/* ================================================= */
/* SECTION ID : SHARED-DIALOG-999                    */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */