/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : user-session-engine.js
   MODULE      : Core Engine
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   موتور مدیریت نشست (Session) کاربران

========================================================== */


/* ================================================= */
/* SECTION ID : USER-SESSION-ENGINE-001              */
/* SESSION ENGINE                                    */
/* موتور مدیریت نشست کاربران                         */
/* ================================================= */

const UserSessionEngine = {

   currentSession : null,

   sessions : []

};


/* ================================================= */
/* SECTION ID : USER-SESSION-ENGINE-002              */
/* CREATE SESSION                                    */
/* ایجاد نشست جدید                                   */
/* ================================================= */

UserSessionEngine.createSession = function(user){

   const session = {

       sessionId : Date.now(),

       userId : user.id,

       username : user.username,

       loginTime : new Date(),

       lastActivity : new Date(),

       status : "ACTIVE"

   };

   this.currentSession = session;

   this.sessions.push(session);

   return session;

};


/* ================================================= */
/* SECTION ID : USER-SESSION-ENGINE-003              */
/* GET CURRENT SESSION                               */
/* دریافت نشست فعال                                  */
/* ================================================= */

UserSessionEngine.getCurrentSession = function(){

   return this.currentSession;

};


/* ================================================= */
/* SECTION ID : USER-SESSION-ENGINE-004              */
/* UPDATE ACTIVITY                                   */
/* بروزرسانی آخرین فعالیت                            */
/* ================================================= */

UserSessionEngine.updateActivity = function(){

   if(this.currentSession){

       this.currentSession.lastActivity = new Date();

   }

};


/* ================================================= */
/* SECTION ID : USER-SESSION-ENGINE-005              */
/* CLOSE SESSION                                     */
/* پایان نشست                                        */
/* ================================================= */

UserSessionEngine.closeSession = function(){

   if(this.currentSession){

       this.currentSession.logoutTime = new Date();

       this.currentSession.status = "CLOSED";

       this.currentSession = null;

   }

};


/* ================================================= */
/* SECTION ID : USER-SESSION-ENGINE-006              */
/* GET ALL SESSIONS                                  */
/* دریافت تمام نشست‌ها                               */
/* ================================================= */

UserSessionEngine.getAllSessions = function(){

   return this.sessions;

};


/* ================================================= */
/* SECTION ID : USER-SESSION-ENGINE-007              */
/* CLEAR SESSIONS                                    */
/* پاکسازی نشست‌ها                                   */
/* ================================================= */

UserSessionEngine.clearSessions = function(){

   this.sessions = [];

   this.currentSession = null;

};


/* ================================================= */
/* SECTION ID : USER-SESSION-ENGINE-008              */
/* EXPORT                                            */
/* خروجی ماژول                                       */
/* ================================================= */

if(typeof module !== "undefined"){

   module.exports = UserSessionEngine;

}