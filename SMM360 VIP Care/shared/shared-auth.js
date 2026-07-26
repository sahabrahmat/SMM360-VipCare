/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : shared-auth.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت احراز هویت کاربران

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-AUTH-001                      */
/* AUTH CONFIGURATION                                */
/* تنظیمات احراز هویت                               */
/* ================================================= */

const AUTH = {

    token : null,

    user : null,

    authenticated : false

};


/* ================================================= */
/* SECTION ID : SHARED-AUTH-002                      */
/* SET TOKEN                                         */
/* ثبت توکن                                          */
/* ================================================= */

function setAuthToken(token){

    AUTH.token = token;

}


/* ================================================= */
/* SECTION ID : SHARED-AUTH-003                      */
/* GET TOKEN                                         */
/* دریافت توکن                                       */
/* ================================================= */

function getAuthToken(){

    return AUTH.token;

}


/* ================================================= */
/* SECTION ID : SHARED-AUTH-004                      */
/* SET USER                                          */
/* ثبت اطلاعات کاربر                                */
/* ================================================= */

function setAuthUser(user){

    AUTH.user = user;

}


/* ================================================= */
/* SECTION ID : SHARED-AUTH-005                      */
/* GET USER                                          */
/* دریافت اطلاعات کاربر                             */
/* ================================================= */

function getAuthUser(){

    return AUTH.user;

}


/* ================================================= */
/* SECTION ID : SHARED-AUTH-006                      */
/* LOGIN STATUS                                      */
/* وضعیت ورود                                       */
/* ================================================= */

function isAuthenticated(){

    return AUTH.authenticated;

}


/* ================================================= */
/* SECTION ID : SHARED-AUTH-007                      */
/* LOGIN                                             */
/* ورود کاربر                                        */
/* ================================================= */

function login(token,user){

    AUTH.token = token;

    AUTH.user = user;

    AUTH.authenticated = true;

}


/* ================================================= */
/* SECTION ID : SHARED-AUTH-008                      */
/* LOGOUT                                            */
/* خروج کاربر                                        */
/* ================================================= */

function logout(){

    AUTH.token = null;

    AUTH.user = null;

    AUTH.authenticated = false;

}


/* ================================================= */
/* SECTION ID : SHARED-AUTH-009                      */
/* EXPORT                                            */
/* دسترسی عمومی                                      */
/* ================================================= */

window.AUTH = AUTH;

window.login = login;

window.logout = logout;

window.setAuthToken = setAuthToken;

window.getAuthToken = getAuthToken;

window.setAuthUser = setAuthUser;

window.getAuthUser = getAuthUser;

window.isAuthenticated = isAuthenticated;


/* ================================================= */
/* SECTION ID : SHARED-AUTH-999                      */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */