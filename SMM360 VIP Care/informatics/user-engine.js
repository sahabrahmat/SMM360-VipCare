/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : user-engine.js
   MODULE      : Core Engine
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   موتور مدیریت کاربران سیستم

========================================================== */


/* ================================================= */
/* SECTION ID : USER-ENGINE-001                      */
/* USER ENGINE                                       */
/* موتور کاربران                                     */
/* ================================================= */

const UserEngine = {

    users : [],

    currentUser : null

};


/* ================================================= */
/* SECTION ID : USER-ENGINE-002                      */
/* REGISTER USER                                     */
/* ثبت کاربر                                         */
/* ================================================= */

UserEngine.registerUser = function(user){

    this.users.push(user);

};


/* ================================================= */
/* SECTION ID : USER-ENGINE-003                      */
/* REMOVE USER                                       */
/* حذف کاربر                                         */
/* ================================================= */

UserEngine.removeUser = function(id){

    this.users = this.users.filter(

        user => user.id !== id

    );

};


/* ================================================= */
/* SECTION ID : USER-ENGINE-004                      */
/* GET USER                                          */
/* دریافت کاربر                                      */
/* ================================================= */

UserEngine.getUser = function(id){

    return this.users.find(

        user => user.id === id

    ) || null;

};


/* ================================================= */
/* SECTION ID : USER-ENGINE-005                      */
/* GET USERNAME                                      */
/* جستجو با نام کاربری                               */
/* ================================================= */

UserEngine.getUserByUsername = function(username){

    return this.users.find(

        user => user.username === username

    ) || null;

};


/* ================================================= */
/* SECTION ID : USER-ENGINE-006                      */
/* GET ALL USERS                                     */
/* دریافت تمام کاربران                               */
/* ================================================= */

UserEngine.getAllUsers = function(){

    return this.users;

};


/* ================================================= */
/* SECTION ID : USER-ENGINE-007                      */
/* SET CURRENT USER                                  */
/* تعیین کاربر فعال                                  */
/* ================================================= */

UserEngine.setCurrentUser = function(id){

    this.currentUser = this.getUser(id);

};


/* ================================================= */
/* SECTION ID : USER-ENGINE-008                      */
/* GET CURRENT USER                                  */
/* دریافت کاربر فعال                                 */
/* ================================================= */

UserEngine.getCurrentUser = function(){

    return this.currentUser;

};


/* ================================================= */
/* SECTION ID : USER-ENGINE-009                      */
/* UPDATE USER                                       */
/* بروزرسانی اطلاعات                                 */
/* ================================================= */

UserEngine.updateUser = function(id,data){

    const user = this.getUser(id);

    if(!user){

        return false;

    }

    Object.assign(user,data);

    return true;

};


/* ================================================= */
/* SECTION ID : USER-ENGINE-010                      */
/* CHANGE STATUS                                     */
/* تغییر وضعیت کاربر                                 */
/* ================================================= */

UserEngine.changeStatus = function(id,status){

    const user = this.getUser(id);

    if(!user){

        return false;

    }

    user.status = status;

    return true;

};


/* ================================================= */
/* SECTION ID : USER-ENGINE-011                      */
/* RESET ENGINE                                      */
/* پاکسازی موتور                                     */
/* ================================================= */

UserEngine.reset = function(){

    this.users = [];

    this.currentUser = null;

};


/* ================================================= */
/* SECTION ID : USER-ENGINE-012                      */
/* EXPORT                                            */
/* خروجی ماژول                                       */
/* ================================================= */

if(typeof module !== "undefined"){

    module.exports = UserEngine;

}