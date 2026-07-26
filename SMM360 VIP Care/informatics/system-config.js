/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : system-config.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   تنظیمات اصلی و سراسری سیستم

========================================================== */


/* ================================================= */
/* SECTION ID : SYSTEM-CONFIG-001                    */
/* SYSTEM INFORMATION                                */
/* اطلاعات اصلی سیستم                               */
/* ================================================= */

const SystemConfig = {

    systemName : "SMM360 VIP Care",

    enterprise : "ENTERPRISE EDITION",

    version : "0.0.1",

    language : "fa",

    direction : "rtl",

    timezone : "Asia/Tehran",

    developer : "Dr. Seyed Mehdi Mohammadi"

};


/* ================================================= */
/* SECTION ID : SYSTEM-CONFIG-002                    */
/* COMPANY INFORMATION                               */
/* اطلاعات مجموعه                                    */
/* ================================================= */

SystemConfig.company = {

    name : "SMM360 VIP CARE",

    copyright : "© SMM360 VIP CARE",

    website : "",

    email : "",

    phone : ""

};


/* ================================================= */
/* SECTION ID : SYSTEM-CONFIG-003                    */
/* UI SETTINGS                                       */
/* تنظیمات رابط کاربری                              */
/* ================================================= */

SystemConfig.ui = {

    theme : "Dark",

    language : "fa",

    direction : "rtl",

    primaryColor : "#07192F",

    secondaryColor : "#D4AF37"

};


/* ================================================= */
/* SECTION ID : SYSTEM-CONFIG-004                    */
/* SECURITY SETTINGS                                 */
/* تنظیمات امنیتی                                   */
/* ================================================= */

SystemConfig.security = {

    loginAttempts : 5,

    sessionTimeout : 30,

    autoLock : true,

    auditEnabled : true

};


/* ================================================= */
/* SECTION ID : SYSTEM-CONFIG-005                    */
/* DATABASE SETTINGS                                 */
/* تنظیمات پایگاه داده                              */
/* ================================================= */

SystemConfig.database = {

    driver : "",

    server : "",

    database : "",

    port : "",

    username : ""

};


/* ================================================= */
/* SECTION ID : SYSTEM-CONFIG-006                    */
/* GET CONFIG                                        */
/* دریافت تنظیمات                                   */
/* ================================================= */

SystemConfig.get = function(key){

    return this[key];

};


/* ================================================= */
/* SECTION ID : SYSTEM-CONFIG-007                    */
/* SET CONFIG                                        */
/* بروزرسانی تنظیمات                                */
/* ================================================= */

SystemConfig.set = function(key,value){

    this[key] = value;

};


/* ================================================= */
/* SECTION ID : SYSTEM-CONFIG-008                    */
/* RESET CONFIG                                      */
/* بازنشانی تنظیمات                                 */
/* ================================================= */

SystemConfig.reset = function(){

    this.version = "0.0.1";

    this.language = "fa";

    this.direction = "rtl";

};


/* ================================================= */
/* SECTION ID : SYSTEM-CONFIG-009                    */
/* EXPORT                                            */
/* خروجی ماژول                                      */
/* ================================================= */

if(typeof module !== "undefined"){

    module.exports = SystemConfig;

}


/* ================================================= */
/* SECTION ID : SYSTEM-CONFIG-999                    */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                      */
/* ================================================= */