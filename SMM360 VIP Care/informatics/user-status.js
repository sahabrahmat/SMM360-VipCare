/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : user-status.js
   MODULE      : Core Engine
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   وضعیت‌های استاندارد کاربران سیستم

========================================================== */


/* ================================================= */
/* SECTION ID : USER-STATUS-001                      */
/* USER STATUS                                       */
/* وضعیت‌های کاربران                                 */
/* ================================================= */

const USER_STATUS = {

   ACTIVE : {
       code  : "ACTIVE",
       title : "فعال"
   },

   INACTIVE : {
       code  : "INACTIVE",
       title : "غیرفعال"
   },

   LOCKED : {
       code  : "LOCKED",
       title : "قفل شده"
   },

   DISABLED : {
       code  : "DISABLED",
       title : "غیرفعال شده"
   },

   SUSPENDED : {
       code  : "SUSPENDED",
       title : "معلق"
   },

   PENDING : {
       code  : "PENDING",
       title : "در انتظار تأیید"
   },

   ONLINE : {
       code  : "ONLINE",
       title : "آنلاین"
   },

   OFFLINE : {
       code  : "OFFLINE",
       title : "آفلاین"
   },

   BUSY : {
       code  : "BUSY",
       title : "مشغول"
   },

   AWAY : {
       code  : "AWAY",
       title : "خارج از دسترس"
   }

};


/* ================================================= */
/* SECTION ID : USER-STATUS-002                      */
/* GET STATUS                                        */
/* دریافت وضعیت                                      */
/* ================================================= */

function getUserStatus(code){

   return USER_STATUS[code] || null;

}


/* ================================================= */
/* SECTION ID : USER-STATUS-003                      */
/* GET STATUS TITLE                                  */
/* دریافت عنوان فارسی                                */
/* ================================================= */

function getUserStatusTitle(code){

   const status = USER_STATUS[code];

   return status ? status.title : "";

}


/* ================================================= */
/* SECTION ID : USER-STATUS-004                      */
/* GET STATUS CODE                                   */
/* دریافت کد وضعیت                                   */
/* ================================================= */

function getUserStatusCode(code){

   const status = USER_STATUS[code];

   return status ? status.code : "";

}


/* ================================================= */
/* SECTION ID : USER-STATUS-005                      */
/* GET ALL STATUS                                    */
/* دریافت همه وضعیت‌ها                               */
/* ================================================= */

function getAllUserStatus(){

   return Object.values(USER_STATUS);

}


/* ================================================= */
/* SECTION ID : USER-STATUS-006                      */
/* CHECK STATUS                                      */
/* بررسی معتبر بودن وضعیت                            */
/* ================================================= */

function isValidUserStatus(code){

   return USER_STATUS.hasOwnProperty(code);

}


/* ================================================= */
/* SECTION ID : USER-STATUS-007                      */
/* EXPORT                                            */
/* خروجی ماژول                                       */
/* ================================================= */

if(typeof module !== "undefined"){

   module.exports = {

       USER_STATUS,

       getUserStatus,

       getUserStatusTitle,

       getUserStatusCode,

       getAllUserStatus,

       isValidUserStatus

   };

}