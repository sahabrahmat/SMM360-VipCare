/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : staff-engine.js
   MODULE      : Core Engine
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   موتور مدیریت کارکنان سیستم

========================================================== */


/* ================================================= */
/* SECTION ID : STAFF-ENGINE-001                     */
/* STAFF ENGINE                                      */
/* موتور مدیریت کارکنان                              */
/* ================================================= */

const StaffEngine = {

    staffs : [],

    currentStaff : null

};


/* ================================================= */
/* SECTION ID : STAFF-ENGINE-002                     */
/* REGISTER STAFF                                    */
/* ثبت کارمند                                        */
/* ================================================= */

StaffEngine.registerStaff = function(staff){

    this.staffs.push(staff);

};


/* ================================================= */
/* SECTION ID : STAFF-ENGINE-003                     */
/* REMOVE STAFF                                      */
/* حذف کارمند                                        */
/* ================================================= */

StaffEngine.removeStaff = function(id){

    this.staffs = this.staffs.filter(

        staff => staff.id !== id

    );

};


/* ================================================= */
/* SECTION ID : STAFF-ENGINE-004                     */
/* GET STAFF                                         */
/* دریافت کارمند                                     */
/* ================================================= */

StaffEngine.getStaff = function(id){

    return this.staffs.find(

        staff => staff.id === id

    ) || null;

};


/* ================================================= */
/* SECTION ID : STAFF-ENGINE-005                     */
/* GET ALL STAFFS                                    */
/* دریافت تمام کارکنان                               */
/* ================================================= */

StaffEngine.getAllStaffs = function(){

    return this.staffs;

};


/* ================================================= */
/* SECTION ID : STAFF-ENGINE-006                     */
/* FIND BY USERNAME                                  */
/* جستجو با نام کاربری                               */
/* ================================================= */

StaffEngine.findByUsername = function(username){

    return this.staffs.find(

        staff => staff.username === username

    ) || null;

};


/* ================================================= */
/* SECTION ID : STAFF-ENGINE-007                     */
/* SET CURRENT STAFF                                 */
/* تعیین کاربر فعال                                  */
/* ================================================= */

StaffEngine.setCurrentStaff = function(id){

    this.currentStaff = this.getStaff(id);

};


/* ================================================= */
/* SECTION ID : STAFF-ENGINE-008                     */
/* GET CURRENT STAFF                                 */
/* دریافت کاربر فعال                                 */
/* ================================================= */

StaffEngine.getCurrentStaff = function(){

    return this.currentStaff;

};


/* ================================================= */
/* SECTION ID : STAFF-ENGINE-009                     */
/* UPDATE STAFF                                      */
/* بروزرسانی اطلاعات                                 */
/* ================================================= */

StaffEngine.updateStaff = function(id,data){

    const staff = this.getStaff(id);

    if(!staff) return false;

    Object.assign(staff,data);

    return true;

};


/* ================================================= */
/* SECTION ID : STAFF-ENGINE-010                     */
/* RESET ENGINE                                      */
/* پاکسازی موتور                                     */
/* ================================================= */

StaffEngine.reset = function(){

    this.staffs = [];

    this.currentStaff = null;

};


/* ================================================= */
/* SECTION ID : STAFF-ENGINE-011                     */
/* EXPORT                                            */
/* خروجی ماژول                                       */
/* ================================================= */

if(typeof module !== "undefined"){

    module.exports = StaffEngine;

}