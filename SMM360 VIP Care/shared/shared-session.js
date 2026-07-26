/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : shared-session.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت نشست (Session) کاربران سیستم

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-SESSION-001                   */
/* SESSION OBJECT                                    */
/* اطلاعات نشست کاربر                                */
/* ================================================= */

const SESSION = {

    id : "",

    userId : "",

    username : "",

    role : "",

    loginTime : "",

    expireTime : "",

    active : false

};


/* ================================================= */
/* SECTION ID : SHARED-SESSION-002                   */
/* START SESSION                                     */
/* شروع نشست                                         */
/* ================================================= */

function startSession(data){

    SESSION.id = data.id || "";

    SESSION.userId = data.userId || "";

    SESSION.username = data.username || "";

    SESSION.role = data.role || "";

    SESSION.loginTime = data.loginTime || "";

    SESSION.expireTime = data.expireTime || "";

    SESSION.active = true;

}


/* ================================================= */
/* SECTION ID : SHARED-SESSION-003                   */
/* END SESSION                                       */
/* پایان نشست                                        */
/* ================================================= */

function endSession(){

    SESSION.id = "";

    SESSION.userId = "";

    SESSION.username = "";

    SESSION.role = "";

    SESSION.loginTime = "";

    SESSION.expireTime = "";

    SESSION.active = false;

}


/* ================================================= */
/* SECTION ID : SHARED-SESSION-004                   */
/* GET SESSION                                       */
/* دریافت اطلاعات نشست                               */
/* ================================================= */

function getSession(){

    return SESSION;

}


/* ================================================= */
/* SECTION ID : SHARED-SESSION-005                   */
/* CHECK SESSION                                     */
/* بررسی فعال بودن نشست                              */
/* ================================================= */

function isSessionActive(){

    return SESSION.active;

}


/* ================================================= */
/* SECTION ID : SHARED-SESSION-006                   */
/* UPDATE SESSION                                    */
/* بروزرسانی نشست                                    */
/* ================================================= */

function updateSession(data){

    Object.assign(SESSION,data);

}


/* ================================================= */
/* SECTION ID : SHARED-SESSION-007                   */
/* EXPORT                                            */
/* دسترسی عمومی                                      */
/* ================================================= */

window.SESSION = SESSION;

window.startSession = startSession;

window.endSession = endSession;

window.getSession = getSession;

window.isSessionActive = isSessionActive;

window.updateSession = updateSession;


/* ================================================= */
/* SECTION ID : SHARED-SESSION-999                   */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */