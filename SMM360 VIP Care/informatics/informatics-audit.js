/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : informatics-audit.js
   MODULE      : Informatics
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   ثبت وقایع، رویدادها و گزارش‌های حسابرسی واحد انفورماتیک

========================================================== */


/* ================================================= */
/* SECTION ID : INFORMATICS-AUDIT-001                */
/* AUDIT ENGINE                                      */
/* موتور ثبت رویدادها                               */
/* ================================================= */

const InformaticsAudit = {

    logs : []

};


/* ================================================= */
/* SECTION ID : INFORMATICS-AUDIT-002                */
/* ADD LOG                                           */
/* ثبت رویداد جدید                                   */
/* ================================================= */

InformaticsAudit.addLog = function(log){

    this.logs.push({

        id : Date.now(),

        date : new Date(),

        ...log

    });

};


/* ================================================= */
/* SECTION ID : INFORMATICS-AUDIT-003                */
/* GET ALL LOGS                                      */
/* دریافت تمام رویدادها                              */
/* ================================================= */

InformaticsAudit.getAllLogs = function(){

    return this.logs;

};


/* ================================================= */
/* SECTION ID : INFORMATICS-AUDIT-004                */
/* GET LOG                                           */
/* دریافت یک رویداد                                  */
/* ================================================= */

InformaticsAudit.getLog = function(id){

    return this.logs.find(

        log => log.id === id

    ) || null;

};


/* ================================================= */
/* SECTION ID : INFORMATICS-AUDIT-005                */
/* REMOVE LOG                                        */
/* حذف رویداد                                        */
/* ================================================= */

InformaticsAudit.removeLog = function(id){

    this.logs = this.logs.filter(

        log => log.id !== id

    );

};


/* ================================================= */
/* SECTION ID : INFORMATICS-AUDIT-006                */
/* CLEAR LOGS                                        */
/* پاکسازی رویدادها                                  */
/* ================================================= */

InformaticsAudit.clearLogs = function(){

    this.logs = [];

};


/* ================================================= */
/* SECTION ID : INFORMATICS-AUDIT-007                */
/* GET LOG COUNT                                     */
/* تعداد رویدادها                                    */
/* ================================================= */

InformaticsAudit.getCount = function(){

    return this.logs.length;

};


/* ================================================= */
/* SECTION ID : INFORMATICS-AUDIT-008                */
/* EXPORT                                            */
/* خروجی ماژول                                       */
/* ================================================= */

if(typeof module !== "undefined"){

    module.exports = InformaticsAudit;

}


/* ================================================= */
/* SECTION ID : INFORMATICS-AUDIT-999                */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */