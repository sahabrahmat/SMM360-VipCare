/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : user-role-engine.js
   MODULE      : Core Engine
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   موتور مدیریت نقش کاربران

========================================================== */


/* ================================================= */
/* SECTION ID : USER-ROLE-ENGINE-001                 */
/* USER ROLE ENGINE                                  */
/* موتور نقش کاربران                                 */
/* ================================================= */

const UserRoleEngine = {

    userRoles : []

};


/* ================================================= */
/* SECTION ID : USER-ROLE-ENGINE-002                 */
/* ASSIGN ROLE                                       */
/* اختصاص نقش به کاربر                               */
/* ================================================= */

UserRoleEngine.assignRole = function(userId,roleCode){

    this.userRoles.push({

        userId,

        roleCode

    });

};


/* ================================================= */
/* SECTION ID : USER-ROLE-ENGINE-003                 */
/* GET USER ROLE                                     */
/* دریافت نقش کاربر                                  */
/* ================================================= */

UserRoleEngine.getUserRole = function(userId){

    return this.userRoles.find(

        item => item.userId === userId

    ) || null;

};


/* ================================================= */
/* SECTION ID : USER-ROLE-ENGINE-004                 */
/* GET USER ROLES                                    */
/* دریافت نقش‌های کاربر                              */
/* ================================================= */

UserRoleEngine.getUserRoles = function(userId){

    return this.userRoles.filter(

        item => item.userId === userId

    );

};


/* ================================================= */
/* SECTION ID : USER-ROLE-ENGINE-005                 */
/* HAS ROLE                                          */
/* بررسی داشتن نقش                                   */
/* ================================================= */

UserRoleEngine.hasRole = function(userId,roleCode){

    return this.userRoles.some(

        item =>

        item.userId === userId &&

        item.roleCode === roleCode

    );

};


/* ================================================= */
/* SECTION ID : USER-ROLE-ENGINE-006                 */
/* REMOVE ROLE                                       */
/* حذف نقش کاربر                                     */
/* ================================================= */

UserRoleEngine.removeRole = function(userId,roleCode){

    this.userRoles = this.userRoles.filter(

        item => !(

            item.userId === userId &&

            item.roleCode === roleCode

        )

    );

};


/* ================================================= */
/* SECTION ID : USER-ROLE-ENGINE-007                 */
/* REMOVE ALL ROLES                                  */
/* حذف تمام نقش‌های کاربر                            */
/* ================================================= */

UserRoleEngine.removeAllRoles = function(userId){

    this.userRoles = this.userRoles.filter(

        item => item.userId !== userId

    );

};


/* ================================================= */
/* SECTION ID : USER-ROLE-ENGINE-008                 */
/* GET ALL USER ROLES                                */
/* دریافت تمام نقش‌ها                                */
/* ================================================= */

UserRoleEngine.getAllUserRoles = function(){

    return this.userRoles;

};


/* ================================================= */
/* SECTION ID : USER-ROLE-ENGINE-009                 */
/* RESET ENGINE                                      */
/* پاکسازی موتور                                     */
/* ================================================= */

UserRoleEngine.reset = function(){

    this.userRoles = [];

};


/* ================================================= */
/* SECTION ID : USER-ROLE-ENGINE-010                 */
/* EXPORT                                            */
/* خروجی ماژول                                       */
/* ================================================= */

if(typeof module !== "undefined"){

    module.exports = UserRoleEngine;

}