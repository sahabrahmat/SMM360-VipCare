/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : informatics-api.js
   MODULE      : Informatics
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت API های واحد انفورماتیک

========================================================== */


/* ================================================= */
/* SECTION ID : INFORMATICS-API-001                  */
/* API CONFIGURATION                                 */
/* تنظیمات API واحد انفورماتیک                       */
/* ================================================= */

const InformaticsAPI = {

    baseUrl : "",

    version : "0.0.1",

    timeout : 30000,

    headers : {

        "Content-Type" : "application/json",

        "Accept" : "application/json"

    }

};


/* ================================================= */
/* SECTION ID : INFORMATICS-API-002                  */
/* SET BASE URL                                      */
/* تنظیم آدرس API                                    */
/* ================================================= */

InformaticsAPI.setBaseUrl = function(url){

    this.baseUrl = url;

};


/* ================================================= */
/* SECTION ID : INFORMATICS-API-003                  */
/* GET BASE URL                                      */
/* دریافت آدرس API                                   */
/* ================================================= */

InformaticsAPI.getBaseUrl = function(){

    return this.baseUrl;

};


/* ================================================= */
/* SECTION ID : INFORMATICS-API-004                  */
/* GET CONFIG                                        */
/* دریافت تنظیمات API                                */
/* ================================================= */

InformaticsAPI.getConfig = function(){

    return {

        baseUrl : this.baseUrl,

        version : this.version,

        timeout : this.timeout,

        headers : this.headers

    };

};


/* ================================================= */
/* SECTION ID : INFORMATICS-API-005                  */
/* UPDATE HEADERS                                    */
/* بروزرسانی هدرها                                   */
/* ================================================= */

InformaticsAPI.setHeaders = function(headers){

    this.headers = {

        ...this.headers,

        ...headers

    };

};


/* ================================================= */
/* SECTION ID : INFORMATICS-API-006                  */
/* RESET CONFIGURATION                               */
/* بازنشانی تنظیمات                                  */
/* ================================================= */

InformaticsAPI.reset = function(){

    this.baseUrl = "";

    this.version = "0.0.1";

    this.timeout = 30000;

};


/* ================================================= */
/* SECTION ID : INFORMATICS-API-007                  */
/* EXPORT                                            */
/* خروجی ماژول                                       */
/* ================================================= */

if(typeof module !== "undefined"){

    module.exports = InformaticsAPI;

}


/* ================================================= */
/* SECTION ID : INFORMATICS-API-999                  */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */