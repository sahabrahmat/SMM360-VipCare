/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : shared-roles.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت نقش‌های سراسری کاربران

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-ROLES-001                     */
/* ROLE LIST                                         */
/* نقش‌های اصلی سیستم                                */
/* ================================================= */

const SYSTEM_ROLES = {

   ADMIN          : "ADMIN",

   MANAGER        : "MANAGER",

   DOCTOR         : "DOCTOR",

   ASSISTANT      : "ASSISTANT",

   RECEPTION      : "RECEPTION",

   PHARMACY       : "PHARMACY",

   ACCOUNTANT     : "ACCOUNTANT",

   LABORATORY     : "LABORATORY",

   RADIOLOGY      : "RADIOLOGY",

   NURSE          : "NURSE",

   STUDENT        : "STUDENT",

   PATIENT        : "PATIENT",

   GUEST          : "GUEST"

};


/* ================================================= */
/* SECTION ID : SHARED-ROLES-002                     */
/* CURRENT ROLE                                      */
/* نقش فعال کاربر                                    */
/* ================================================= */

let currentRole = null;


/* ================================================= */
/* SECTION ID : SHARED-ROLES-003                     */
/* SET CURRENT ROLE                                  */
/* تنظیم نقش فعال                                    */
/* ================================================= */

function setCurrentRole(role){

   currentRole = role;

}


/* ================================================= */
/* SECTION ID : SHARED-ROLES-004                     */
/* GET CURRENT ROLE                                  */
/* دریافت نقش فعال                                   */
/* ================================================= */

function getCurrentRole(){

   return currentRole;

}


/* ================================================= */
/* SECTION ID : SHARED-ROLES-005                     */
/* CHECK ROLE                                        */
/* بررسی وجود نقش                                    */
/* ================================================= */

function hasRole(role){

   return Object.values(SYSTEM_ROLES).includes(role);

}


/* ================================================= */
/* SECTION ID : SHARED-ROLES-006                     */
/* ROLE MATCH                                        */
/* بررسی تطابق نقش                                   */
/* ================================================= */

function isRole(role){

   return currentRole === role;

}


/* ================================================= */
/* SECTION ID : SHARED-ROLES-007                     */
/* GET ROLE LIST                                     */
/* دریافت لیست نقش‌ها                                */
/* ================================================= */

function getRoles(){

   return SYSTEM_ROLES;

}


/* ================================================= */
/* SECTION ID : SHARED-ROLES-008                     */
/* EXPORT                                            */
/* دسترسی عمومی                                      */
/* ================================================= */

window.SYSTEM_ROLES = SYSTEM_ROLES;

window.setCurrentRole = setCurrentRole;

window.getCurrentRole = getCurrentRole;

window.hasRole = hasRole;

window.isRole = isRole;

window.getRoles = getRoles;


/* ================================================= */
/* SECTION ID : SHARED-ROLES-999                     */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */