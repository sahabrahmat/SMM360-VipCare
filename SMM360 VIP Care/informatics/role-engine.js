/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : role-engine.js
   MODULE      : Core Engine
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   موتور مدیریت نقش‌ها و سطح دسترسی

========================================================== */


/* ================================================= */
/* SECTION ID : ROLE-ENGINE-001                      */
/* ROLE ENGINE                                       */
/* موتور نقش‌ها                                      */
/* ================================================= */

const RoleEngine = {

    roles : {},

    currentRole : null

};


/* ================================================= */
/* SECTION ID : ROLE-ENGINE-002                      */
/* REGISTER ROLE                                     */
/* ثبت نقش                                           */
/* ================================================= */

RoleEngine.registerRole = function(code,data){

    this.roles[code] = data;

};


/* ================================================= */
/* SECTION ID : ROLE-ENGINE-003                      */
/* REMOVE ROLE                                       */
/* حذف نقش                                           */
/* ================================================= */

RoleEngine.removeRole = function(code){

    delete this.roles[code];

};


/* ================================================= */
/* SECTION ID : ROLE-ENGINE-004                      */
/* GET ROLE                                          */
/* دریافت نقش                                        */
/* ================================================= */

RoleEngine.getRole = function(code){

    return this.roles[code] || null;

};


/* ================================================= */
/* SECTION ID : ROLE-ENGINE-005                      */
/* GET ALL ROLES                                     */
/* دریافت تمام نقش‌ها                                */
/* ================================================= */

RoleEngine.getAllRoles = function(){

    return Object.values(this.roles);

};


/* ================================================= */
/* SECTION ID : ROLE-ENGINE-006                      */
/* SET CURRENT ROLE                                  */
/* تعیین نقش جاری                                    */
/* ================================================= */

RoleEngine.setCurrentRole = function(code){

    this.currentRole = code;

};


/* ================================================= */
/* SECTION ID : ROLE-ENGINE-007                      */
/* GET CURRENT ROLE                                  */
/* دریافت نقش جاری                                   */
/* ================================================= */

RoleEngine.getCurrentRole = function(){

    return this.getRole(this.currentRole);

};


/* ================================================= */
/* SECTION ID : ROLE-ENGINE-008                      */
/* CHECK ROLE                                        */
/* بررسی نقش                                         */
/* ================================================= */

RoleEngine.hasRole = function(code){

    return this.currentRole === code;

};


/* ================================================= */
/* SECTION ID : ROLE-ENGINE-009                      */
/* CHECK LEVEL                                       */
/* بررسی سطح دسترسی                                  */
/* ================================================= */

RoleEngine.hasLevel = function(level){

    const role = this.getCurrentRole();

    if(!role) return false;

    return role.level >= level;

};


/* ================================================= */
/* SECTION ID : ROLE-ENGINE-010                      */
/* RESET ENGINE                                      */
/* پاکسازی موتور                                     */
/* ================================================= */

RoleEngine.reset = function(){

    this.roles = {};

    this.currentRole = null;

};


/* ================================================= */
/* SECTION ID : ROLE-ENGINE-011                      */
/* EXPORT                                            */
/* خروجی ماژول                                       */
/* ================================================= */

if(typeof module !== "undefined"){

    module.exports = RoleEngine;

}